using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Ninject;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using System.Threading;
using Ninject.Activation;
using Ninject.Infrastructure.Disposal;
using Microsoft.AspNetCore.Http;
using MissingDIExtensions;
using Microsoft.AspNetCore.Mvc.ViewFeatures.Internal;
using Books.Domain.Services;
using Books.Domain;
using Books.Controllers;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Extensions.Options;

namespace Books
{
    public class Startup
    {
        private readonly AsyncLocal<Scope> scopeProvider = new AsyncLocal<Scope>();
        private IReadOnlyKernel kernel;
        private object Resolve(Type type) => kernel.Get(type);
        private Scope RequestScope(IContext context) => scopeProvider.Value;
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();

        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddIdentityWithMongoStores(Configuration.GetConnectionString("DefaultConnection"))
                .AddDefaultTokenProviders();
            // Add framework services.
            services.AddMvc();

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            services.AddRequestScopingMiddleware(() => scopeProvider.Value = new Scope());
            services.AddCustomControllerActivation(Resolve);
            services.AddCustomViewComponentActivation(Resolve);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            //jwt configuration
            var secretKey = Configuration["secret"];
            var signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(secretKey));
            var tokenParams = new TokenValidationParameters
            {
                // The signing key must match!
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = signingKey,

                // Validate the JWT Issuer (iss) claim
                ValidateIssuer = true,
                ValidIssuer = "BooksIssuer",

                // Validate the JWT Audience (aud) claim
                ValidateAudience = true,
                ValidAudience = "BooksAudience",

                // Validate the token expiry
                ValidateLifetime = true,

                // If you want to allow a certain amount of clock drift, set that here:
                ClockSkew = TimeSpan.Zero
            };

            app.UseJwtBearerAuthentication(new JwtBearerOptions
            {
                AutomaticAuthenticate = true,
                AutomaticChallenge = true,
                TokenValidationParameters = tokenParams
            });
            //jwt configuration - finished
            kernel = RegisterApplicationComponents(app, loggerFactory, tokenParams);

            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions {
                    HotModuleReplacement = true
                });
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });

            
        }

        private IReadOnlyKernel RegisterApplicationComponents(IApplicationBuilder app, ILoggerFactory loggerFactory, TokenValidationParameters tokenParams)
        {
            IKernelConfiguration config = new KernelConfiguration();
            // Add JWT generation endpoint:
            var secretKey = Configuration["secret"];

            var signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(secretKey));
            var options = new TokenProviderOptions
            {
                Audience = tokenParams.ValidAudience,
                Issuer = tokenParams.ValidIssuer,
                SigningCredentials = new SigningCredentials(tokenParams.IssuerSigningKey, SecurityAlgorithms.HmacSha256)
            };
            config.Bind<TokenProviderOptions>().ToConstant(options).InSingletonScope();
            // Register application services
            //config.Bind(app.GetControllerTypes()).ToSelf().InScope(RequestScope);//todo fix
            config.Bind<HomeController>().ToSelf().InScope(RequestScope);
            config.Bind<BooksController>().ToSelf().InScope(RequestScope);
            var dataContext = new DataContext(Configuration.GetConnectionString("DefaultConnection"));

            //config.Bind<IUserService>().To<AspNetUserService>().InScope(RequestScope);
            config.Bind<IDataContext>().ToConstant(dataContext).InSingletonScope();
            config.Bind<ISearchService>().To<MongoSearchService>().InScope(RequestScope);
            config.Bind<IUserService>().To<MongoUserService>().InScope(RequestScope);
            //config.Bind<CustomMiddleware>().ToSelf();

            // Cross-wire required framework services
            config.BindToMethod(app.GetRequestService<IViewBufferScope>);
            config.Bind<ILoggerFactory>().ToConstant(loggerFactory);

            return config.BuildReadonlyKernel();
        }

        private sealed class Scope : DisposableObject { }
    }

    public static class BindingHelpers
    {
        public static void BindToMethod<T>(this IKernelConfiguration config, Func<T> method) => config.Bind<T>().ToMethod(c => method());
    }

   
}

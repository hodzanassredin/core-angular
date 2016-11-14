﻿using System;
using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ApplicationParts;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewComponents;
using Microsoft.AspNetCore.Razor.TagHelpers;
using Microsoft.Extensions.DependencyInjection;

namespace MissingDIExtensions
{
    public static class AspNetCoreMvcExtensions
    {
        public static void AddCustomControllerActivation(this IServiceCollection services, Func<Type, object> activator)
        {
            if (services == null) throw new ArgumentNullException(nameof(services));
            if (activator == null) throw new ArgumentNullException(nameof(activator));

            services.AddSingleton<IControllerActivator>(new DelegatingControllerActivator(
                context => activator(context.ActionDescriptor.ControllerTypeInfo.AsType())));
        }

        public static void AddCustomViewComponentActivation(this IServiceCollection services, Func<Type, object> activator)
        {
            if (services == null) throw new ArgumentNullException(nameof(services));
            if (activator == null) throw new ArgumentNullException(nameof(activator));

            services.AddSingleton<IViewComponentActivator>(new DelegatingViewComponentActivator(activator));
        }

        public static void AddCustomTagHelperActivation(this IServiceCollection services, Func<Type, object> activator)
        {
            if (services == null) throw new ArgumentNullException(nameof(services));
            if (activator == null) throw new ArgumentNullException(nameof(activator));

            services.AddSingleton<ITagHelperActivator>(new DelegatingTagHelperActivator(activator));
        }

        public static Type[] GetControllerTypes(this IApplicationBuilder builder)
        {
            var manager = builder.ApplicationServices.GetRequiredService<ApplicationPartManager>();

            var feature = new ControllerFeature();
            manager.PopulateFeature(feature);

            var ctrls = feature.Controllers.Select(t => t.AsType()).ToArray();
            return ctrls;
        }

        public static Type[] GetViewComponentTypes(this IApplicationBuilder builder)
        {
            var manager = builder.ApplicationServices.GetRequiredService<ApplicationPartManager>();

            var feature = new ViewComponentFeature();
            manager.PopulateFeature(feature);

            return feature.ViewComponents.Select(t => t.AsType()).ToArray();
        }
    }

    public sealed class DelegatingControllerActivator : IControllerActivator
    {
        private readonly Func<ControllerContext, object> controllerCreator;
        private readonly Action<ControllerContext, object> controllerReleaser;

        public DelegatingControllerActivator(Func<ControllerContext, object> controllerCreator,
            Action<ControllerContext, object> controllerReleaser = null)
        {
            if (controllerCreator == null)
            {
                throw new ArgumentNullException(nameof(controllerCreator));
            }

            this.controllerCreator = controllerCreator;
            this.controllerReleaser = controllerReleaser ?? ((_, __) => { });
        }

        public object Create(ControllerContext context) => this.controllerCreator(context);
        public void Release(ControllerContext context, object controller) => this.controllerReleaser(context, controller);
    }

    public sealed class DelegatingViewComponentActivator : IViewComponentActivator
    {
        private readonly Func<Type, object> viewComponentCreator;
        private readonly Action<object> viewComponentReleaser;

        public DelegatingViewComponentActivator(Func<Type, object> viewComponentCreator,
            Action<object> viewComponentReleaser = null)
        {
            if (viewComponentCreator == null) throw new ArgumentNullException(nameof(viewComponentCreator));

            this.viewComponentCreator = viewComponentCreator;
            this.viewComponentReleaser = viewComponentReleaser ?? (_ => { });
        }

        public object Create(ViewComponentContext context) =>
            this.viewComponentCreator(context.ViewComponentDescriptor.TypeInfo.AsType());

        public void Release(ViewComponentContext context, object viewComponent) =>
           this.viewComponentReleaser(viewComponent);
    }

    internal sealed class DelegatingTagHelperActivator : ITagHelperActivator
    {
        private readonly Func<Type, object> tagHelperCreator;

        public DelegatingTagHelperActivator(Func<Type, object> tagHelperCreator)
        {
            if (tagHelperCreator == null) throw new ArgumentNullException(nameof(tagHelperCreator));

            this.tagHelperCreator = tagHelperCreator;
        }

        public TTagHelper Create<TTagHelper>(ViewContext context) where TTagHelper : ITagHelper =>
            (TTagHelper)this.tagHelperCreator(typeof(TTagHelper));
    }
}

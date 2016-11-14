using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Newtonsoft.Json;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authorization;
using Books.Domain.Models;
using Books.Domain.Repositories;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Books.Controllers
{
    //jwt generator configuration
    public class TokenProviderOptions
    {
        public string Issuer { get; set; }
        public string Audience { get; set; }
        public TimeSpan Expiration { get; set; } = TimeSpan.FromMinutes(5);
        public SigningCredentials SigningCredentials { get; set; }
    }

    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private readonly TokenProviderOptions _options;
        private readonly IUserRepository users;

        public UsersController(TokenProviderOptions opts, IUserRepository users)
        {
            _options = opts;
            this.users = users;
        }
        [HttpPost("[action]")]
        public async Task<ActionResult> Login([FromBody] User user)
        {
            user = await users.Login(user.Username, user.Password);
            if (user == null)
            {
                this.Response.StatusCode = 400;
                return Content("Invalid username or password.");
            }

            var now = DateTimeOffset.UtcNow;

            // Specifically add the jti (random nonce), iat (issued timestamp), and sub (subject/user) claims.
            // You can add other claims here, if you want:
            var claims = new Claim[]
            {
        new Claim(JwtRegisteredClaimNames.Sub, user.Username),
        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
        new Claim(JwtRegisteredClaimNames.Iat, now.ToUnixTimeSeconds().ToString(), ClaimValueTypes.Integer64)
            };

            // Create the JWT and write it to a string
            var jwt = new JwtSecurityToken(
                issuer: _options.Issuer,
                audience: _options.Audience,
                claims: claims,
                notBefore: now.UtcDateTime,
                expires: now.UtcDateTime.Add(_options.Expiration),
                signingCredentials: _options.SigningCredentials);
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            var response = new
            {
                id_token = encodedJwt,
                expires_in = (int)_options.Expiration.TotalSeconds
            };
            var json = JsonConvert.SerializeObject(response, new JsonSerializerSettings { Formatting = Formatting.Indented });
            return Content(json, "application/json");
        }

        [HttpPost("[action]")]
        public async Task<ActionResult> Register([FromBody] User user)
        {
            var res = await users.Register(user);
            switch (res)
            {
                case RegisterResult.BadPassword:
                    this.Response.StatusCode = 400;
                    return Content("Bad Password.");
                case RegisterResult.UserAlreadyExists:
                    this.Response.StatusCode = 400;
                    return Content("User already exists.");
            }
            return await Login(user);
        }

        private Task<User> CurrentUser() {
            var name = this.User.Claims.Single(x => x.Type == ClaimTypes.NameIdentifier).Value;
            return users.GetByUserName(name);
        }
        [HttpGet("books")]
        [Authorize]
        public async Task<IEnumerable<Book>> Books()
        {
            var u = await CurrentUser();
            return await users.GetRequests(u);
        }
        [HttpPost("books")]
        [Authorize]
        public async Task CreateBookRequest([FromBody] Book book)
        {
            var u = await CurrentUser();
            if (u.Demands.Contains(book.Id)) return;
            u.Demands.Add(book.Id);
            await users.Update(u);
        }

        [HttpDelete("books/{bookId}")]
        [Authorize]
        public async Task CancelBookRequest(string bookId)
        {
            var u = await CurrentUser();
            if (!u.Demands.Contains(bookId)) return;
            u.Demands.Remove(bookId);
            await users.Update(u);
        }
    }
}

using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Books.Domain.Models
{
    public class User : MongoEntity
    {
        public User()
        {
            Demands = new List<string>();
        }
        public string Username { get; set; }
        public string Password { get; set; }
        public List<string> Demands { get; set; }
    }
}

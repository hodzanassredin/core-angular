using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Books.Domain.Models
{
    public class Book : MongoEntity
    {
        public string Title { get; set; }
        public string Publisher { get; set; }
        public string Description { get; set; }
        public IEnumerable<string> Authors { get; set; }
    }
}

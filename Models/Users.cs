using System.Runtime.CompilerServices;

namespace CDNAPI.Models
{
    public class Users
    {
        public int Id { get; set; } // Primary Key
        public string Username { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public List<string> Skillsets { get; set; } = new();
        public List<string> Hobbies { get; set; } = new();
    }
}

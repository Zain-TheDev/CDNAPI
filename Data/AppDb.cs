using CDNAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace CDNAPI.Data
{
    public class AppDb : DbContext
    {
        public AppDb(DbContextOptions<AppDb> options) : base(options) { }
        public DbSet<Users> Users { get; set;  }     
    }
}

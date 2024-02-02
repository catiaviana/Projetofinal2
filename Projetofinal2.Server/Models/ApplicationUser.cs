using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using ProjetoFinal.Models;
using System.ComponentModel.DataAnnotations;

namespace ProjetoFinal.Models
{
    public class ApplicationUser : IdentityUser
    {
        [Required]
        public bool IsAdmin { get; set; } = false;

        [Required]
        public bool IsDeleted { get; set; } = false;

        [Required]
        public bool IsLocked { get; set; } = false;

        [Required]
        public DateTime created_date { get; set; } = DateTime.Now;

        public virtual ICollection<Recipe>? Recipes { get; } = new List<Recipe>();

        public virtual ICollection<Favorite>? Favorites { get; } = new List<Favorite>();

        public virtual ICollection<Comments>? Comments { get; } = new List<Comments>();
    }
}
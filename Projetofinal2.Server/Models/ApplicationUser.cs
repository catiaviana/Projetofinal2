using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace ProjetoFinal.Models
{
    public class ApplicationUser : IdentityUser
    {
        [Required]
        public bool IsAdmin { get; set; } = false;
        [Required]
        public DateTime DateAccount { get; set; } = DateTime.Now;
        [Required]
        public bool IsLocked { get; set; } = false;
        [Required]
        public bool IsDeleted { get; set; } = false;
        [Required]
        public virtual ICollection<Recipe> Recipes { get; set; }

        public virtual ICollection<Favorite> Favorites { get; set; }
    }
}

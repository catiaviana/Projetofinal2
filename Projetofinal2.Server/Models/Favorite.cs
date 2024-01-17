using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace ProjetoFinal.Models
{
    [PrimaryKey(nameof(RecipeID), nameof(UserId))]

    public class Favorite
    {

        public Guid RecipeID { get; set; }
        public virtual Recipe Recipe { get; set; }


        public string UserId { get; set; }
        public virtual ApplicationUser User { get; set; }
    }
}


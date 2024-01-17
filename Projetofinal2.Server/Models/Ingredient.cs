using System.ComponentModel.DataAnnotations;

namespace ProjetoFinal.Models
{
    public class Ingredient
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        [Required]
        public string Name { get; set; }

        [Required]
        [StringLength(50)]
        public string Quantity { get; set; }

    }
}
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjetoFinal.Models
{
    public class Recipe
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public int Duration { get; set; }
        [Required]
        public int Difficulty { get; set; }
        [Required]
        public string Category { get; set; }
        [Required]
        public bool IsApproved { get; set; } = false;
        public bool IsUpdated { get; set; } = false;
        public bool IsDeleted { get; set; } = false;

        private int _evaluation_count = 0;

        public int Evaluation_count
        {
            get { return _evaluation_count; }
            set { _evaluation_count += 1; }
        }
        public int Evaluation_sum { get; set; }

        [NotMapped]
        public double Evaluation_avg { get { return Evaluation_count == 0 ? 0 : (Evaluation_sum / Evaluation_count); } }

        public virtual ICollection<Ingredient> Ingredients { get; set; }
        [Required]
        public virtual ApplicationUser User { get; set; }
    }
}
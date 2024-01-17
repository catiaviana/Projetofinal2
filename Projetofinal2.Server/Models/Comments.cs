using System.ComponentModel.DataAnnotations;

namespace ProjetoFinal.Models
{
    public class Comments
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        [Required]
        public string Description { get; set; }

        public virtual ApplicationBuilder User { get; set; }

    }
}

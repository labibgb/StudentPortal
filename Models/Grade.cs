using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentPortal.Models
{
    public class Grade
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Section { get; set; }

        public ICollection<Student> Students { get; set; }
    }
}

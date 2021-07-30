using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentPortal.Models
{
    public class Student
    {
        
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public byte[] Image { get; set; }

        public virtual Address Address { get; set; }

        public int GradeId { get; set; }
        public Grade Grade { get; set; }

        public virtual ICollection<StudentCourse> StudentCourses { get; set; }

    }
}

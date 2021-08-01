using System;
using System.Collections.Generic;

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

        public Address Address { get; set; }

        public int GradeId { get; set; }
        public Grade Grade { get; set; }

        public ICollection<StudentCourse> StudentCourses { get; set; }

    }
}

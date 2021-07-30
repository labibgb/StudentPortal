using Microsoft.EntityFrameworkCore.Migrations;

namespace StudentPortal.Migrations
{
    public partial class UpdateProperty : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "StudentPhone",
                table: "students",
                newName: "Phone");

            migrationBuilder.RenameColumn(
                name: "StudentName",
                table: "students",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "StudentEmail",
                table: "students",
                newName: "Email");

            migrationBuilder.RenameColumn(
                name: "StudentId",
                table: "students",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "GradeName",
                table: "grades",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "GradeId",
                table: "grades",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "CourseName",
                table: "courses",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "CourseCode",
                table: "courses",
                newName: "Code");

            migrationBuilder.RenameColumn(
                name: "CourseID",
                table: "courses",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "Addres1",
                table: "addresses",
                newName: "Address1");

            migrationBuilder.RenameColumn(
                name: "AddressID",
                table: "addresses",
                newName: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Phone",
                table: "students",
                newName: "StudentPhone");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "students",
                newName: "StudentName");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "students",
                newName: "StudentEmail");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "students",
                newName: "StudentId");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "grades",
                newName: "GradeName");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "grades",
                newName: "GradeId");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "courses",
                newName: "CourseName");

            migrationBuilder.RenameColumn(
                name: "Code",
                table: "courses",
                newName: "CourseCode");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "courses",
                newName: "CourseID");

            migrationBuilder.RenameColumn(
                name: "Address1",
                table: "addresses",
                newName: "Addres1");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "addresses",
                newName: "AddressID");
        }
    }
}

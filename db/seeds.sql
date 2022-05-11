USE employee_status;

INSERT INTO department(id, department_name)
VALUES 
(001, "Management"),
(002, "Marketing"),
(003, "Engineering"),
(004, "Finance"),
(005, "IT Services");
(006, "HR"),
(007, "Sales"),
(008, "Productions");

INSERT INTO role (id, title, salary, department_id)
VALUES 
(01, "CEO", 100.50, 001),
(02, "Operations Manager", 100.50, 001),
(03, "Product Manager", 100.50, 008),
(04, "Marketing Manager", 100.50, 002),
(05, "Engineering Manager", 100.50, 003),
(11, "Senior Developer", 100.50, 005),
(15, "Sales Manager", 100.50, 007),
(19, "HR Manager", 100.50, 006),
(20, "Sales Associate", 100.50, 001),
(21, "HR Manager", 100.50, 006),
(19, "Accountant", 100.50, 004),
(23, "HR Rep", 100.50, 006),
(26, "Junior Developer", 100.50, 005);


INSERT INTO employee (id, first_name, role_id, manage_id)
VALUES 
(1000, "", "A", 3000, null),
(1000, "", "A", 3000, null),
(1000, "", "A", 3000, null),
(1000, "", "A", 3000, null),
(1000, "", "A", 3000, null),
(1000, "", "A", 3000, null),
(1000, "", "A", 3000, null),
(1000, "", "A", 3000, null),
(1000, "", "A", 3000, null);
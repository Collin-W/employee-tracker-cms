--  used to pre populate my database

INSERT INTO department ('name')
VALUES
('Technology'),
('Customer Service'),
('Managment'),
('Marketing')

INSERT INTO roles ('title', 'salary', 'department_id')
VALUES
('Web Designer', 6000, 1),
('Boss Man', 2000000, 3),
('Advertising Specialist', 5500, 4 )
('Secretary', 5200, 2)

INSERT INTO employee ('first_name', 'last_name', 'role_id', 'manager_id')
VALUES
('Guts', 'Willams', 2, 3),
('Casca', 'Jay', 3, 4),
('John', "Smith", 1, 1),
('Mike', 'Billy', 1, 1),

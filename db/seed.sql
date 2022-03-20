use employees;

INSERT INTO department
    (name)
VALUES
    ('HR'),
    ('Accounting'),
    ('Sales'),
    ('IT');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('HR Generalist', 50000, 1),
    ('HR Director', 80000, 1),
    ('Accountant', 75000, 2),
    ('Junior Accountant', 50000, 2),
    ('Sales Manager', 100000, 3),
    ('Sales Representative', 65000, 3),
    ('IT Manager', 100000, 4),
    ('IT Tech', 70000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Dasher", "Snow", 1, NULL),
    ("Prancer", "Golden", 2, 1),
    ("Comet", "Cringle", 3, NULL),
    ("Donner", "Wood", 4, 3),
    ("Dancer", "Brown", 5, NULL),
    ("Vixen", "White", 6, 5),
    ("Blitzen", "Green", 7, NULL),
    ("Rudolph", "Bell", 8, 7);
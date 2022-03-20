const connection = require("./db/connection.js");
const inquirer = require("inquirer");
require("console.table");

// Main menu - What would you like to do?
const mainMenu = () => {
  inquirer
    .prompt({
      type: "list",
      name: "userOption",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add Department",
        "Add Role",
        "Add Employee",
        "Update Employee Role",
      ],
    })
    .then((input) => {
      console.log(input);
      if (input.userOption == "View all departments") {
        viewDepartments();
      } else if (input.userOption == "Add Department") {
        addDepartment();
      } else if (input.userOption == "View all roles") {
        viewRoles();
      } else if (input.userOption == "Add Role") {
        addRole();
      } else if (input.userOption == "View all employees") {
        viewEmployees();
      } else if (input.userOption == "Add Employee") {
        addEmployee();
      } else if (input.userOption == "Update Employee Role") {
        updateEmployeeRole();
      }
    });
};

// View Departments
const viewDepartments = () => {
  const query = "SELECT * FROM department;";
  connection.query(query, (err, result) => {
    console.table(result);
    // Takes you back to main menu after info displayed
    mainMenu();
  });
};

// Add Departments
const addDepartment = () => {
  inquirer
    .prompt({
      type: "input",
      name: "departmentName",
      message: "What department do you want to add?",
    })
    .then((input) => {
      const query = `INSERT INTO department(name) VALUES ("${input.departmentName}")`;
      connection.query(query, (err, result) => {
        console.log("Department added successfully!");
        //   Returns to main menu after department has been added
        mainMenu();
      });
    });
};

// View roles
const viewRoles = () => {
  const query = "SELECT * FROM role;";
  connection.query(query, (err, result) => {
    console.table(result);
    // Takes you back to main menu after info displayed
    mainMenu();
  });
};

// Add roles
const addRole = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "roleTitle",
        message: "What is the title of the role you want to add?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary for the new role?",
      },
      {
        type: "input",
        name: "deptID",
        message: "What is the department ID of the new role?",
      },
    ])
    .then((input) => {
      const query = `INSERT INTO role (title, salary, department_id) VALUES ('${input.roleTitle}', '${input.salary}', '${input.deptID}')`;

      connection.query(query, (err, result) => {
        console.log("Role added successfully!");

        //   Returns to main menu after department has been added
        mainMenu();
      });
    });
};

// View employees
const viewEmployees = () => {
  const query = "SELECT * FROM employee;";
  connection.query(query, (err, result) => {
    console.table(result);
    // Takes you back to main menu after info displayed
    mainMenu();
  });
};

// Add employees
const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "What is the employee's first name?",
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the employee's last name?",
      },
      {
        type: "input",
        name: "roleID",
        message: "What is the role ID?",
      },
      {
        type: "input",
        name: "managerID",
        message: "What is the employee's manager's ID?",
      },
    ])
    .then((input) => {
      const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${input.firstName}', '${input.lastName}', '${input.roleID}', '${input.managerID}')`;
      connection.query(query, (err, result) => {
        console.log("Employee added successfully!");
        //   Returns to main menu after department has been added
        mainMenu();
      });
    });
};

// Update employee role

// Beginning call to main menu
mainMenu();

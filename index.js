//const fs = require('fs');
const inquirer = require('inquirer');
const connection = require('./db/connection')
//const { addData } = require('./db/querys')
const cTable = require('console.table');

const cmsPrompts = [{
  type: 'list',
  name: 'start_actions',
  message: 'Which of the following actions would you like to take?',
  choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
}]

const addDepartment = [{
  type: 'input',
  name: 'nameDepartment',
  Message: 'Enter new department name.'
}]

const addRole = [{
    type: 'input',
    name: 'titleRole',
    Message: 'Enter title of role.'
  },
  {
    type: 'input',
    name: 'salaryRole',
    Message: 'Enter yearly salary of role.'
  },
  {
    type: 'input',
    name: 'departmentRole',
    Message: 'Enter department id for role.'
  }
]

const addEmployee = [{
    type: 'input',
    name: 'firstNameEmployee',
    Message: 'Enter employee first name.'
  },
  {
    type: 'input',
    name: 'lastNameEmployee',
    Message: 'Enter employee last name.'
  },
  {
    type: 'input',
    name: 'roleEmployee',
    Message: 'Enter employees role.'
  },
  {
    type: 'input',
    name: 'manageEmployee',
    Message: 'Enter employee manager.'
  }
]

function init() {
  inquirer.prompt(cmsPrompts)
    .then(data => {

      if (data.start_actions === 'view all departments') viewDepartments();
      if (data.start_actions === 'view all roles') viewRoles() ;
      if (data.start_actions === 'view all employees') viewEmployees();
      // if (data.start_actions === 'add a department') addDepartment() ;
      // if (data.start_actions === 'add a role') addRole() ;
      // if (data.start_actions === 'add an employee') addEmployee();
     // if (data.start_actions === 'update an employee role') ;
    })
};

function viewDepartments() {
  connection.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;
    console.table(res);
    init();
    connection.end();
  })
};

function viewRoles() {
  connection.query("SELECT * FROM roles", function (err, res) {
    if (err) throw err;
    console.table(res);
    init();
    connection.end();
  })
};

function viewEmployees() {
  connection.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;
    console.table(res);
    init();
    connection.end();
  })
};

// function addDepartment() {

// };

// function addRole() {

// };

// function addEmployee() {

//   const sql = `INSERT INTO employee ('first_name', 'last_name', 'role_id', 'manager_id') VALUES(?,?,?,?)`;
//   const params = [body.first_name, body.last_name, body.role_id, body.manager_id];

//   db.query(sql, params, (err, row) => {
//     if (err) {
//       res.status(400).json({
//         error: err.message
//       });
//       return;
//     }
//     res.json({
//       message: 'success',
//       data: row
//     });
//   });
//   init()
// };


// var query = connection.query(
//     "INSERT INTO employee SET ?",
//     {
//       first_name: "John",
//       last_name: "Doe",
//       role_id: 50,
//       manager_id: 3
//     },
//     function(err, res) {
//       if (err) throw err;
//     }
//   );
//   console.log(query.sql);










init();






// switch(expression) {
//     case x: 
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
//   }

// test
// const cTable = require('console.table');
// console.table([
//   {
//     name: 'foo',
//     age: 10
//   }, {
//     name: 'bar',
//     age: 20
//   }
// ]);

// prints
// name  age
// ----  ---
// foo   10
// bar   20
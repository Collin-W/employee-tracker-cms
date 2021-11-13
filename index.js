//const fs = require('fs');
const inquirer = require('inquirer');
const connection = require('./db/connection')
//const { addData } = require('./db/querys')
const cTable = require('console.table');

const cmsPrompts = [
  // {
  //     type: '',
  //     name: '',
  //     message: ''
  // },
  {
    type: 'list',
    name: 'start_actions',
    message: 'Which of the following actions would you like to take?',
    choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
  }
  //,

  // {
  //   type: 'input',
  //   name: 'addRole',
  //   message: 'Enter new job title, salary, and department id.'
  // },
  // {
  //   type: 'input',
  //   name: 'addDepartment',
  //   message: 'Enter department name.'
  // },
  // {
  //   type: 'input',
  //   name: '',
  //   message: ''
  // },
  // {
  //   type: 'input',
  //   name: '',
  //   message: ''
  // },
]

//going to add my new employee prompots in the actual functions after being called by the chocies 

function init() {
  inquirer.prompt(cmsPrompts)
    .then(data => {

      // if (data.start_actions === ) ;

      //if (data.start_actions === 'view all departments') viewDepartments();
      // if (data.start_actions === 'view all roles') viewRoles() ;
      // if (data.start_actions === 'view all employees') viewEmployees();
      // if (data.start_actions === 'add a department') addDepartment() ;
      // if (data.start_actions === 'add a role') addRole() ;
       if (data.start_actions === 'add an employee') addEmployee() ;
      // if (data.start_actions === 'update an employee role') ;


    })
};





function viewDepartments() {
  console.log('view dept')
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

function addDepartment() {

};

function addRole() {

};




function addEmployee() {



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
  const sql = `INSERT INTO employee ('first_name', 'last_name', 'role_id', 'manager_id') VALUES(?,?,?,?)`;
  const params = [body.first_name, body.last_name, body.role_id, body.manager_id];

  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({
        error: err.message
      });
      return;
    }
    res.json({
      message: 'success',
      data: row
    });
  });
  init()
};


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
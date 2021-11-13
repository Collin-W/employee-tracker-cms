const inquirer = require('inquirer');
const connection = require('./db/connection')
const cTable = require('console.table');

const cmsPrompts = [{
  type: 'list',
  name: 'start_actions',
  message: 'Which of the following actions would you like to take?',
  choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'exit']
}]

const addDepartments = [{
  type: 'input',
  name: 'name',
  Message: 'Enter new department name.'
}]

const addRoles = [{
    type: 'input',
    name: 'title',
    Message: 'Enter title of role.'
  },
  {
    type: 'input',
    name: 'salary',
    Message: 'Enter yearly salary of role.'
  },
  {
    type: 'input',
    name: 'department_id',
    Message: 'Enter department id for role.'
  }
]

const addEmployees = [{
    type: 'input',
    name: 'first_name',
    Message: 'Enter employee first name.'
  },
  {
    type: 'input',
    name: 'last_name',
    Message: 'Enter employee last name.'
  },
  {
    type: 'input',
    name: 'role_id',
    Message: 'Enter employees role.'
  },
  {
    type: 'input',
    name: 'manager_id',
    Message: 'Enter employee manager.'
  }
]

function init() {
  inquirer.prompt(cmsPrompts)
    .then(data => {

      if (data.start_actions === 'view all departments') viewDepartments();
      if (data.start_actions === 'view all roles') viewRoles();
      if (data.start_actions === 'view all employees') viewEmployees();
      if (data.start_actions === 'add a department') addDepartment() ;
      if (data.start_actions === 'add a role') addRole() ;
      if (data.start_actions === 'add an employee') addEmployee();
      if (data.start_actions === 'update an employee role') ;
      if (data.start_actions === 'exit') exit();
    })
};

function viewDepartments() {
  connection.promise().query("SELECT * FROM department").then(function ([data]) {
      console.table(data);
    })
    .then(() => {
      init()
    })
};

function viewRoles() {
  connection.query("SELECT * FROM roles", function (err, res) {
    if (err) throw err;
    console.table(res);
    init();
  })
};

function viewEmployees() {
  connection.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;
    console.table(res);
    init();
  })
};

function addDepartment() {

  inquirer.prompt(addDepartments)
  .then(body => {
    connection.promise().query("INSERT INTO department SET ?", body)
    .then(function ([body]) {
      console.table(body);
    })
    .then(() => {
      init()
    })
  })

};

function addRole() {

  inquirer.prompt(addRoles)
  .then(body => {
    connection.promise().query("INSERT INTO roles SET ?", body)
    .then(function ([body]) {
      console.table(body);
    })
    .then(() => {
      init()
    })
  })
};

function addEmployee() {

  inquirer.prompt(addEmployees)
    .then(body => {
    
      connection.promise().query("INSERT INTO employee SET ?", body)
      .then(function ([body]) {
          console.table(body);
        })
        .then(() => {
          init()
        })
    })
};

function exit(){
  connection.end();
}

init();
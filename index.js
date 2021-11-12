const fs = require('fs');
const inquirer = require('inquirer');

const cmsPrompts = [
{
    type: '',
    name: '',
    message: ''
},
{
    type: 'list',
    name: 'start_actions',
    message: 'Which of the following actions would you like to take?',
    choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']

},
{
    type: '',
    name: '',
    message: ''
},
{
    type: '',
    name: '',
    message: ''
},
]

switch(expression) {
    case x: 
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
  }
// test
  const cTable = require('console.table');
console.table([
  {
    name: 'foo',
    age: 10
  }, {
    name: 'bar',
    age: 20
  }
]);

// prints
// name  age
// ----  ---
// foo   10
// bar   20
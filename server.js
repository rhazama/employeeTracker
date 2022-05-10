const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoletable = require('console.table');
const util = require('util');
const { connection } = require('.config/connection');

connection.query = util.promisify(conenction.query);

connection.connect(function (err) {
    if(err) throw err;
    initialAction();
})

console.table("Welcome to My Employee Tracker")

const initialAction = async () => {
    try {
        let answer = await inquirer.prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View Employees',
                'View Departments',
                'View Roles',
                'Add Employees',
                'Add Departments',
                'Add Roles',
                'Update Employee Role',
                'Exit'
            ]
        });
        switch (answer.action) {
            case 'View Employees':
                viewEmployees();
                break;

            case 'View Departments':
                viewDepartments();
                break;

            case 'View Roles':
                viewRoles();
                break;

            case 'Add Employees':
                addEmployees();
                break;

            case 'Add Departments':
                addDepartments();
                break;

            case 'Add Roles':
                addRoles();
                break;

            case 'Update Employee Role':
                employeeUpdate();
                break;

            case 'Exit':
                connectionEnd();
                break;
        };
    } catch (err) {
        console.log(err);
        initialAction();
    };
}


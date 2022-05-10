const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoletable = require('console.table');
const util = require('util');
const { connection } = require('.config/connection');
const { connect } = require('http2');

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

const viewEmployees = async () => {
    console.log('Employee View');
    try {
        let query = 'SELECT * FROM employee';
        connection.query(query, function (err, res) {
            if (err) throw err;
            let employeeArray = [];
            res.forEach(employee => employeeArray.push(employee));
            console.table(employeeArray);
            initialAction();
        });
    } catch (err) {
        console.log(err);
        initialAction();
    };
}

const viewDepartments = async () => {
    console.log('Department View');
    try {
        let query = 'SELECT * FROM department';
        connect.query(query, function (err, res) {
            if (err) throw err;
            let departmentArray = [];
            res.forEach(department => departmentArray.push(department));
            console.table(departmentArray);
            initialAction();
        });
    } catch (err) {
        console.log(err);
        initialAction();
    };
}

const addEmployee = async () => {
    try {
        console.log('Employee Add');

        let roles = await connection.query("SELECT * FROM role");

        let managers = await connection.query("SELECT * FROM  employee");

        let answer = await inquirer.prompt([
            {
            name: 'firstName',
            type: 'input',
            message: 'What is the first name of this Employee?'
            },
            {
            name: 'lastName',
            type: 'input',
            message: 'What is the last name of this Employee?'
            },
            {
            name: 'employeeRoleId',
            type: 'list',
            choices: roles.map((role) => {
                return {
                    name: role.title,
                    value: role.id
                }
            }),
            message: "What is this Employee's role ID?"
            },
            {
            name: 'employeeManagerId',
            type: 'list',
            choices: managers.map((manager) => {
                return {
                    name: manager.first_name + " " + manager.last_name,
                    value: manager.id
                }
            }),
            message: "What is this Employee Manager's ID?"
            },
        ])

        let result = await connection.query("INSERT INTO employee SET ?", {
            first_name: answer.firstname,
            last_name: answer.lastname,
            role_id: (answer.employeeRoleId),
            manager_id: (answer.employeeManagerId)
        });

        console.log(`${answer.firstName} ${answer.lastname} added successfully.\n`);
        initialAction();
    } catch (err) {
        console.log(err);
        initialAction();
    };
}

const addDepartments = async () => {
    try {
        console.log('Department Add');

        let answer = await inquirer.prompt([
            {
                name: 'deptName',
                type: 'input',
                message: 'What is the name of your new department?'
            }
        ]);

        let result = await connection.query("INSERT INTO department SET ?", {
            department_dept_name: answer.deptName
        });

        console.log(`${answer.deptName} added successfully to departments.\n`)
    } catch (err) {
        console.log(err);
        initialAction();
    };
}

const addRole = async () => {
    try {
        console.log('Role Add');

        let department = await connection.query("SELECT * FROM department")

        let answer = await inquirer.prompt([
            {
                name: 'title',
                type: 'input',
                message: 'What is the name of your new role?'
            },
            {
                name: 'salary',
                type: 'input',
                message: 'What salary will this role provide?'
            },
            {
                name: 'departmentId',
                type: 'list',
                choices: department.map((departmentId) => {
                    return {
                        name: departmentId.department_name,
                        value: departmentId.id
                    }
                }),
                message: 'What department ID is this role associated with?',
            },
        ]);

        let result = await connection.query("INSERT INTO role SET ?", {
            title: answer.title,
            salary: answer.salary,
            department_id: answer.departmentId
        })

        console.log(`${answer.title} role added successfully.\n`)
        initialAction();
    } catch (err) {
        console.log(err);
        initialAction();
    };
}

const employeeUpdate = async () => {
    try {
        console.log('Employee Update');

        let employees = await connection.query("SELECT * FROM employee");

        let employeeSelection = await inquirer.prompt{[
            
        ]}
    }
}
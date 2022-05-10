const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoletable = require('console.table');
const util = require('util');
const { connection } = require('.config/connection');

connection.query = util.promisify{conenction.query};

connection.connect(function (err) {
    if(err) throw err;
    initialAction();
})

console.table("Welcome to My Employee Tracker")


// Example usage
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Your Inquirer prompts and logic will go here

// Example:
const manager = new Manager('John Doe', 1, 'john@example.com', '101');
console.log(manager.getRole());  // Outputs: Manager

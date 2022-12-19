const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the name of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is your description of the project?",
        name: "description"
    },
    {
        type: "input",
        message: "What additional steps for installation of the project are required?",
        name: "installation"
    },
    {
        type: "input",
        message: "Please offer details describing the usage of your project.",
        name: "usage"
    },
    {
        type: "input",
        message: "Please detail your project's contribution guidelines.",
        name: "contribution"
    },
    {
        type: "input",
        message: "Please detail any and all tests as well as their instructions.",
        name: "tests"
    }, 
    {
        type: "checkbox",
        message: "Which license would you like to include with your project?",
        choices: [
            "MIT", "ISC", "Apache"
        ],
        name: "license"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is the email address where users may contact you with questions?",
        name: "email"
    }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

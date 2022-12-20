// To begin I link in the three libraries required to run the application. fs is built into node, Inquirer downloaded in the terminal, and generateMarkdown is an imported module defined in the generateMarkdown.js in the utils folder.
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// The array below of question objects are each a prompt the user will respond to. Each section of the readme is passed sequentially with the user entering all relevant information and desired text content when they are prompted. The returned object is then passed onto generateMarkdown where the input is turned into markdown text that may be printed to a readme.

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
        message: "Who holds the copyright for this project?",
        name: "name"
    },
    {
        type: "input",
        message: "What year was this copyright registered?",
        name: "year"
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
let fileName;

// The function below creates the actual readme.md file and writes to it the markdown returned from generateMarkdown

function writeToFile(fileName, data) {
    fileName = "READMEE.md";
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log("Successfully generated readme.")
    )
}

// init represents the actual function that runs the application calling it. Inquirer runs each of the questions described in the array above, and the data object is passed onto generateMarkdown before it is finally printed onto a created .md file

function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile(fileName, data)
});
}

// Function call to initialize application
init();

// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your Github Username?",
        name: "gitUsername",
    }, 
    {
        type: 'input',
        message: "What is your email address?",
        name: "email",
    }, 
    {
        type: 'input',
        message: "What is the name of your project?",
        name: "projectName",
    },
    {
        type: 'input',
        message: "What is the description of your project?",
        name: "description",

    }];

console.log(questions)


//user answer will come back from input in an object like, {email: "input@yahoo.com"}, {projectName: "cool Webpage"}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init() {}

inquirer.prompt(questions).then((response) =>

 makeReadMe(`## Table of Contents
# Title
    ${response.projectName}

# Description
    ${response.description}

 
 Email: ${response.email}
 `)


); ////.....

function makeReadMe(input) {
    fs.writeFile(`${'README'}.md`, input, (err) =>
  err ? console.error(err) : console.log('Success!')
)
}

// fs.writeFile('README', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );
// Function call to initialize app
init();

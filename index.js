// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "Please enter your Github username.",
        name: "gitUsername",
    }, 
    {
        type: 'input',
        message: "What is your email address?",
        name: "email",
    }, 
    {
        type: 'input',
        message: "What is the title of your project?",
        name: "projectName",
    },
    {
        type: 'input',
        message: "What is the description of your project?",
        name: "description",

    },
    {
        type: 'input',
        message: "What are the installation instructions?",
        name: "installation",

    },
    {
        type: 'input',
        message: "What is the usage information for your project?",
        name: "usage",

    },
    {
        type: 'input',
        message: "What are your contribution guidelines?",
        name: "contribution",

    },
    {
        type: 'input',
        message: "What are your test instructions?",
        name: "test",

    },
    {
        type: 'list',
        message: "Pick a license.",
        name: "licenseSpot",
        choices: ["MIT","Apache 2.0 License","Boost Software License 1.0","None"],

    },
];

console.log(questions)


//user answer will come back from input in an object like, {email: "input@yahoo.com"}, {projectName: "cool Webpage"}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init() {}

inquirer.prompt(questions).then((response) =>

 makeReadMe(
`
# Title
   ## ${response.projectName}



   License Info: ${response.licenseSpot}

# Description
    ${response.description}

# Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributions](#Contributions)
* [Test](#Test)
* [Questions](#Questions)

# Installation
${response.installation}


# Usage
${response.usage}


# Contributions
    ${response.contribution}

# Test
    ${response.test}

 # Questions

 Feel free to reach out with any additional questions!

 Github Username : https://github.com/${response.gitUsername}
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

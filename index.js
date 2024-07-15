// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter usage information ie: how will this app be downloaded & ran',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'Mozilla', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email',
        validate: function (email) {
            const valid = /\S+@\S+\.\S+/.test(email);
            return valid || 'Please enter a valid email address';
          },
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// TODO: Create a function to initialize app
//from the inquirer npm, which is very nice 
function init() {
    inquirer.prompt(questions)
        .then((answers) => writeToFile('README.md', generateMarkdown(answers)))
        .catch((err) => {
            if (err.isTtyError) {
                console.log('Prompt could not be rendered in the current environment')
            } else {
                console.log('Something went wrong')
            }
        });
}

// Function call to initialize app
init();

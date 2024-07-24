// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
// the way to write these is very clearly written out on the inquirer npmjs and also the mini project for this week
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
        message: 'Enter usage information ie: how will this app be downloaded & run',
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
// something we learned in class and something I have experienced in testing this out a couple times is that
// the writeToFile function will write over anything you currently have in that file
// fs.appendFile would add to the file instead of rewriting it
// in this instance it makes sense to use fs.writeFile, but there are many times append would be the better choice
// once its gone its gone! (unless of course, you control z to get your original README back ;) )
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
            // TtyError specifically works in the context of inquirer
            // tty = terminal. so if you are trying to run the app without a terminal or if your terminal doesn't support the features of your prompts, then this err will run
            if (err.isTtyError) {
                console.log('Prompt could not be rendered in the current environment')
            } else {
                console.log('Something went wrong')
            }
        });
}

// Function call to initialize app
init();

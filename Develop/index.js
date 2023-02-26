// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate(titleInput) {
            if (titleInput) {
                return true;
            } else {
                console.log('Need to input a title.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        validate(descriptionInput) {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Must answer what, why, and how.');
                return false;
            }
          },
          waitUserInput: true,
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'If your README is long, add a table of contents to make it easy for users to find what they need.',
        // answers are generated as links to each section
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        validate(installationInput) {
            if (installationInput) {
                return true;
            } else {
                console.log('Must include steps for installation.');
                return false;
            }
          },
          waitUserInput: true,
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
        validate(usageInput) {
            if (usageInput) {
                return true;
            } else {
                console.log('Must include instructions and examples for use.');
                return false;
            }
          },
          waitUserInput: true,
    },
    {
        type: 'expand',// list options
        name: 'license',
        message: 'The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. Choose a license from the list of options.',
        choices: [
            {
                key: 'm',
                name: 'MIT license',
                value: 'MIT',
            },
            {
                key: 'a',
                name: 'Apache License 2.0',
                value: 'Apache',
            },
            {
                key: 'g',
                name: 'GNU General Public License v3.0',
                value: 'GNU',
            },
            {
                key: 'b',
                name: 'Boost Software License 1.0',
                value: 'Boost',
            },
            {
                key: 'e',
                name: 'Eclipse Public License 2.0',
                value: 'Eclipse',
            },
        ],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.',
        validate(contributingInput) {
            if (contributingInput) {
                return true;
            } else {
                console.log('Must include instructions and examples for use.');
                return false;
            }
          },
          waitUserInput: true,
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
        validate(testsInput) {
            if (testsInput) {
                return true;
            } else {
                console.log('Must include tests and examples.');
                return false;
            }
          },
          waitUserInput: true,
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?',
        validate(githubUsernameInput) {
            if (githubUsernameInput) {
                return true;
            } else {
                console.log('Must include GitHub username.');
                return false;
            }
          },
          waitUserInput: true,
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate(emailInput) {
            if (emailInput) {
                return true;
            } else {
                console.log('Must include your email.');
                return false;
            }
          },
          waitUserInput: true,
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return function (answers) {
        return answers[fileName, data];
    }

}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();

inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });

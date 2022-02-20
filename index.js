// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require ('./src/readme-template');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description of your project!');
                return false;
            }
        }
    },
   
    {
        type: 'input',
        name: 'installStep',
        message: 'Provide a step-by-step description to install your project. Add one step at a time',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter a description of the step!');
                return false;
            }
        }        
    },
    {
        type: 'confirm',
        name: 'addAnotherStep',
        message: 'Would you like to add another step required to install your project?',
        default: false
    },
    {
        type: 'confirm',
        name: 'usage',
        message: 'Would you like to add instructions and examples for use?',
        default: true
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Provide instructions for use',
        validate: instrucionsInput => {
            if (instrucionsInput) {
                return true;
            } else {
                console.log('Please enter the instructions!');
                return false;
            }
        }    
    },
    {
        type: 'confirm',
        name: 'screenshots',
        message: 'Would you like to add an example screenshot? To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it',
        default: true
    },
    {
        type: 'input',
        name: 'screenshotName',
        message: 'Enter the file name of the screenshot. Ex: screenshot.png',
        validate: screenshotInput => {
            if (screenshotInput) {
                return true;
            } else {
                console.log('Please enter the screenshot file name!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'credits',
        message: 'Did you use any third-party assets, collaborators or follow tutorials? ',
        default: true   
    },
    {
        type: 'input',
        name: 'collaboratorName',
        message: 'Enter the third-party assets, collaborators or tutorial name',
        validate: collaboratorInput => {
            if (collaboratorInput) {
                return true;
            } else {
                console.log('Please enter a name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'collaboratorLink',
        message: 'Enter the third-party assets web link, collaborators link to their GitHub profile or tutorial link',
        validate: collaboratorLinkInput => {
            if (collaboratorLinkInput) {
                return true;
            } else {
                console.log('Please enter a link!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'tests',
        message: 'Would you like to write tests for your application? ',
        default: true   
    },
    {
        type: 'input',
        name: 'testDescription',
        message: 'Enter your test',
        validate: testDescriptionInput => {
            if (testDescriptionInput) {
                return true;
            } else {
                console.log('Please enter a test!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'tests',
        message: 'Would you like to add another test for your application? ',
        default: true   
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'Select a license for your application',
        choices: ['MIT', 'GNU GPLv3','Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense'] 
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: gitHubInput => {
            if (gitHubInput) {
            return true;
            } else {
            console.log('Please enter your GitHub username!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
        validate: emailInput => {
            if (emailInput) {
            return true;
            } else {
            console.log('Please enter your email address!');
            return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}
const init = () => {
return inquirer.prompt(questions)
.then( readmeFile => {
    return console.log(answers);
});
};

// Function call to initialize app
init();

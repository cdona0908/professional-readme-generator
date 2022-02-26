// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
        name: 'installation',
        message: 'What command should be run to install dependencies',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter an instruction to install dependencies!');
                return false;
            }
        }        
    },   
    
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user needs to know about using the repo',
        validate: gitHubInput => {
            if (gitHubInput) {
            return true;
            } else {
            console.log('Please enter instructions for how to use the repo');
            return false;
            }
        }
    },


    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your application',
        choices: ['MIT', 'GPLv3','Mozilla Public License 2.0', 'Apache License 2.0', 'None'] 
    },
    
   
    {
        type: 'input',
        name: 'contribute',
        message: 'What does the user needs to know about contributing to the repo',
        validate: contributeInput => {
            if (contributeInput) {
            return true;
            } else {
            console.log('Please enter instructions for how to contribute');
            return false;
            }
        }

    },
    
    {
        type: 'input',
        name: 'test',
        message: 'What command should be used to run test?',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter an instruction to run tests!');
                return false;
            }
        }
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
const writeFile = data => {
    fs.writeFile('./dist/README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('The Readme file has been saved');
        }
        
    });
};

// TODO: Create a function to initialize app
//function init() {}
const init = () => {
    return inquirer.prompt(questions)
    .then( answers => {
        return generateMarkdown(answers);
    })
    .then(data => {
        return writeFile(data);
    })
    .catch(err => {
        console.log(err);
    });
};

// Function call to initialize app
init();

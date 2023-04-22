// Imported required packages
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
{
    message: 'What is your GitHub username?',
    type: 'input',
    name: 'GitHub',
},

{
    message: 'What is your email address?',
    type: 'input',
    name: 'email',

},

{
    message: 'What is your repository name?',
    type: 'input',
    name: 'repository',
},
{
    message: 'What is the name of your project?',
    type: 'input',
    name: 'title',
},
{
    message: 'Describe your project.',
    type: 'input',
    name: 'description',
},
{
    message: 'Please provide installation instructions.',
    type: 'input',
    name: 'installation',
},
{
    message: 'Please provide the project usage instructions.',
    type: 'input',
    name: 'usage',
},
{
    message: 'Please provide repository contribution guidelines.',
    type: 'input',
    name: 'contributions',
},
{
    message: 'Please provide the project test instructions.',
    type: 'input',
    name: 'test',
},
{
    message: 'What is the license for your project?',
    type: 'list',
    choices: ['a', 'b', 'c', 'none'],
    name: 'license',
}
];



// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=> {
        if (err) throw err
        console.log('README has been created!')
    })
}

// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions) 
    .then((answers) => {
        console.log(answers)

        writeToFile('README.md', generateMarkdown(answers)) 
    })
    
}

// // Function call to initialize app
init();


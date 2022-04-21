//node version: v16.14.2

const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

// First argument is the file name that's being created/ the output file
// Second argument is the data being written : The HTML string template
// Third argument is the callback function that will handle any errors as well as the success message

// fs.writeFile('index.html', generatePage(name, github), err => {

//     //stops the execution of code if an error occurs

//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });

inquirer 
// can receive an array of objects in its argument, known as the 'question' object
 // // the properties of 'question' object identify the type, name, and and question message of this particular question
const promptUser = () => {
   
    return inquirer.prompt([
    { // 'input' will allow user to type answer to question
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }, 
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username'
    },
    {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself!:'
    }
]);
};

const promptProject = portfolioData => {

    // If there's no 'projects' an array property, create one
    if (!portfolioData.projects) {
    portfolioData.projects = [];
    } 
    

    console.log('============ Add a New Project ==============');

    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What's the name of your project?"
        },
        {
            // list possible answers in array
            type: 'checkbox',
            name: 'Languages',
            message: 'What did you build your project with? (check all that apply)',
            choices: ['Javascript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the Github link to your project. (REQUIRED)'
        },
        {
            // confirm type is a boolean, can recieve yes or no(true or false) responses
            type:'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type:'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false

        }
    ])
      // used array method push() to place projectData from inquirer into the new projects array we just created
      .then(projectData => {
        portfolioData.projects.push(projectData);
        // evaluating user response to whether they wish to add more projects.  without portfolioData as an argument, a new project will be initialized and existing project data will be lost
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } 
        // if userd declined to add more projects, will return portfolio daat
        else {
            return portfolioData;
        }
    })
};


// answer object is returned as a Promise(tool for using asynchronus functions)
promptUser()
.then(promptProject)
.then(portfolioData => {
    console.log(portfolioData);
});


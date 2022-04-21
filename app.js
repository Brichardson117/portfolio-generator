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
.prompt([
    {
        // 'input' will allow user to type answer to question
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }
])
// answer object is returned as a Promise(tool for using asynchronus functions)
.then(answers => console.log(answers));

// const printProfileData = profileDataArr => {
    
//     for (let i = 0; i < profileDataArr.length; i += 1) { 
//     console.log(profileDataArr[i]);
//     }
//     console.log('================');

//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);
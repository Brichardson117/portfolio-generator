//node version: v16.14.2

const fs = require('fs');
const generatePage = require(".src/page-template.js");
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;


// First argument is the file name that's being created/ the output file
// Second argument is the data being written : The HTML string template
// Third argument is the callback function that will handle any errors as well as the success message

fs.writeFile('index.html', generatePage(name, github), err => {

    //stops the execution of code if an error occurs
    
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
});

// const printProfileData = profileDataArr => {
    
//     for (let i = 0; i < profileDataArr.length; i += 1) { 
//     console.log(profileDataArr[i]);
//     }
//     console.log('================');

//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);
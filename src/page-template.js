//You might remember that parentheses are unnecessary in arrow functions when there is one parameter. In this function, which has no parameters, we need parentheses to hold the place where parameters would've been.
 module.exports = templateData => {
  console.log(templateData); 
  
  // reset operator( ... ): packages leftover data under a new array or object- depending on what the source of the data is- if we dont want to explicitly create data for it(or if there's an indefinite amount of data).

  // spread operator( ... ): make a new array or object with the same content as an existing array or object
  const { projects, about, ...header } = templateData;

  return `
     <!DOCTYPE html>
     <html lang="en">

     <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <title>Portfolio Demo</title>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
       <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
       </head>
    
       <body>
       <header>
         <div class="container flex-row justify-space-between align-center py-3">
           <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
           <nav class="flex-row">
             <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${
               header.github
             }">GitHub</a>
           </nav>
         </div>
       </header>
       <main class="container my-5">
   
       </main>
       <footer class="container text-center py-3">
         <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
       </footer>
     </body>
     </html>
    `;
    };
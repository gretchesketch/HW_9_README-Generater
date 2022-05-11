// TODO: Include packages needed for this application

// creating package requirments
const inquirer = require("inquirer")
const fs = require("fs");
const util = require("util");

// creating a promise to write a file
const writeFile = util.promisify(fs.writeFile)

// TODO: Create an array of questions for user input
questions = () => {
    return inquirer.prompt(
      [
        {
          type: "input",
          name: "title",
          message: "Enter the title of your project."
        },
        {
          type: "input",
          name: "description",
          message: "Enter the description for your project."
        },
        {
          type: "input",
          name: "installation",
          message: "Describe any installation requirements for this project."
        },
        {
          type: "input",
          name: "usage",
          message: "Describe the usage for this project."
        },
        {
          type: "input",
          name: "contributing",
          message: "List out all of your contributors."
        },
        {
          type: "input",
          name: "tests",
          message: "Explain testing for your project."
        },
        {
            type: "License",
            name: "License",
            message: "Any licences?"
        },
        {
          type: "input",
          name: "questions",
          message: "Leave any questions and answers for your user."
        },
        {
          type: "input",
          name: "github",
          message: "GitHub Username:"
        },
        {
          type: "input",
          name: "email",
          message: "Email:"
        },
        {
          type: "input",
          name: "contact",
          message: "Best way to reach you:"
        },
      ]
    )
  }


//table of contenents
  readme = ans => {
    return `#${ans.title}
    ${ans.badge}
  ​
  
    ## Table of Contents
    [Description](#description)
    [Installation](#installation)
    [Usage](#usage)
    [License](#license)
    [Contributing](#contributing)
    [Tests](#tests)
    [Questions](#questions)
  ​
    ## Description:
    ${ans.description}
    ## Installation:
    ${ans.installation}
    ## Usage: 
    ${ans.usage}
    ## License: 
    The license for your website is: ${ans.license}
    ## Contributing: 
    ${ans.contributing}
    ## Tests: 
    ${ans.tests}
    ## Questions and Notes: 
    ${ans.questions}
    GitHub: (www.github.com/${ans.github})  
    Email: ${ans.email}  
    Answers: ${ans.contact}
    `
  }

  // function to write read me
(async function () {
    await writeFile("README.md", readme(await questions()))
 })()
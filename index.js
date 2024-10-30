// TODO: Include packages needed for this application
const inquirer = require(`inquirer`)
const fs = require(`fs`)

// TODO: Create an array of questions for user input
const questions = [
    `What is your project title?`, 
    `Provide a description of your project:`, 
    `What are your installation instructions?`, 
    `Provide your usage information`, 
    `What are your contribution guidelines?`, 
    `Please provide your test instructions:`
    `Choose a license for your project`,
    `What is your GitHub username?`,
    `What is your email address?`,
 ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(`Error writing to file:`, err);
            return;
        }
        console.log(`README file has been created successfully!`);
    });
}
//To call this function:
// const readmeContent = `# Project Title\n\nDescription of the project...`;
// writeToFile('README.md', readmeContent);

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

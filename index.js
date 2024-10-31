// TODO: Include packages needed for this application
const inquirer = require(`inquirer`)
const fs = require(`fs`);
const { default: generateMarkdown } = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: `input`,
        name: `title`,
        message: `What is your project title?`,
    },
    {
        type: `input`,
        name: `description`,
        message: `Provide a description of your project:`,
    },
    {
        type: `input`,
        name: `installation`,
        message: `What are your installation instructions?`,
    },
    {
        type: `input`,
        name: `usage`,
        message: `Provide your usage information`,
    },
    {
        type: `input`,
        name: `contribution`,
        message: `What are your contribution guidelines?`,
    },
    {
        type: `input`,
        name: `test`,
        message: `Please provide your test instructions:`,
    },
    {
        type: `list`,
        name: `license`,
        message: `Choose a license for your project`,
        choices: [
            `MIT`,
            `Apache License 2.0`,
            `GNU General Public License (GPL) v3`,
            `BSD 3-Clause License`,
        ],
    },
    {
        type: `input`,
        name: `github`,
        message: `What is your GitHub username?`,
    },
    {
        type: `input`,
        name: `email`,
        message: `What is your email address?`,
    },
 ];
 // TODO: Create a function to write README file
const readmeContent = generateMarkdown(answers);

 inquirer.prompt(questions).then((answers) => {
    console.log(`Your answers:`, answers);
    fs.writeFile(`README.md`, readmeContent, (err) => {
            if (err) {
                console.error(`Error writing to file:`, err);
                return;
            }
            console.log(`README file has been created successfully!`);
        });
    }
)

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

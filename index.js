// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import generateMarkdown from "./utils/generateMarkdown.js";

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
            `MIT_License`,
            `Apache_License_2.0`,
            `GNU_General_Public_License_v3.0`,
            `BSD_3-Clause_License`,
            `BSD_2-Clause_"Simplified"_License`,
            `Boost_Software_License_1.0`,
            `Creative_Commons_Zero_v1.0_Universal`,
            `Eclipse_Public_License_2.0`,
            `GNU_Affero_General_Public_License_v3.0`,
            `GNU_General_Public_License_v2.0`,
            `GNU_Lesser_General_Public_License_v2.1`,
            `Mozilla_Public_License_2.0`,
            `The_Unlicense`
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
 function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data)
 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile(`README-template.md`, generateMarkdown({ ...answers}))
})}

// Function call to initialize app
init();

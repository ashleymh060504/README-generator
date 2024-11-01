// TODO: Include packages needed for this application
import inquirer from `inquirer`;
import fs from `fs`;
import path from `path`;
import generateMarkdown from "./utils/generateMarkdown";

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
            `MIT License`,
            `Apache License 2.0`,
            `GNU General Public License v3.0`,
            `BSD 3-Clause License`,
            `BSD 2-Clause "Simplified" License`,
            `Boost Software License 1.0`,
            `Creative Commons Zero v1.0 Universal`,
            `Eclipse Public License 2.0`,
            `GNU Affero General Public License v3.0`,
            `GNU General Public License v2.0`,
            `GNU Lesser General Public License v2.1`,
            `Mozilla Public License 2.0`,
            `The Unlicense`
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

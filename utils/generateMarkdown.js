// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)`
  } return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `- [License](#license)`
  } return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    
    Licensed under the ${license}.`
  } return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ${renderLicenseBadge(answers.license)}

  ## Description

  ${answers.description}

  ## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink(answers.license)}

  ## Installation

  ${answers.installation}

  ## Usage

  ${answers.usage}

  ${renderLicenseSection(answers.license)}

  ## Contributing

  ${answers.contribution}

  ## Tests

  ${answers.test}

  ## Questions

  [GitHub](https://github.com/${answers.github})

  If you have any questions, you can reach me at ${answers.email}`;
}

export default generateMarkdown;

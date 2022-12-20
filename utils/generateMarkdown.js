// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license[0] == "MIT") {
    data.url = "https://img.shields.io/badge/License-MIT-yellow.svg"
    console.log(data.url);
  } else if (data.license[0] == "ISC") {
    data.url = "https://img.shields.io/badge/License-ISC-blue.svg"
    console.log(data.url)
  } else if (data.license[0] == "Apache") {
    data.url = "https://img.shields.io/badge/License-Apache_2.0-blue.svg"
    console.log(data.url)
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseLink(data);
//   return `# ${data.title}
//   ## Description
//   ${data.description}
//   ![data.licence[0](data.url)
//   ## Table of Contents
//   - [Installation](#installation)
//   - [Usage](#usage)
//   - [Contribute](#contribute)
//   - [Tests](#tests)
//   - [License](#license)
//   - [Questions](#questions)
//   ## Installation
//   ${data.installation}
//   ## Usage
//   ${data.usage}
//   ## Contribute
//   ${data.contribution}
//   ## Tests
//   ${data.tests}
//   ## License
//   // print License here 
//   ## Questions
//   You can find me on GitHub @${data.github} or you can send me an email at ${data.email}
// `;
}

module.exports = generateMarkdown;

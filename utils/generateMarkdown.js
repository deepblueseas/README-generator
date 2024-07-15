// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  //Shield.io generates badges for Github
  //i looked at the static badge page
  return `[License](https://img.shields.io/badge/License-${license}-violet)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  return `[License](#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return '';
  }
  return `## License
  
  This project, ${data.title}, is licensed under the ${license} License. See [LICENSE](LICENSE) for more information.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents
  I. [Installation](#installation)
  II. [Contribution Guidlines](#contribution-guidelines)
  III. [Test Instructions](#test-instructions)
  IV. ${renderLicenseLink(data.license)}
  V. [Contact Information](#contact-information)

  ## Installation

  ${data.installation}

  ## Contribution Guidelines

  ${data.contribution}

  ## Test Instructions

  ${data.tests}

  ## License

  ${renderLicenseSection(data.license)}

  ## Contact Information

  >GitHub: ${data.github}(https://github.com/${data.github}
  >Email: ${data.email}

`;
}

module.exports = generateMarkdown;

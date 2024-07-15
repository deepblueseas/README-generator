// Function to return a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  return `![License](https://img.shields.io/badge/License-${license}-violet)`;
}

// Function to return the license link
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  return `[License](#license)`;
}

// Function to return the license section of README
function renderLicenseSection(license, title) {
  if (!license || license === 'None') {
    return '';
  }
  return `## License

  This project, ${title}, is licensed under the ${license} License. See [LICENSE](LICENSE) for more information.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents
  I. [Installation](#installation)
  II. [Contribution Guidelines](#contribution-guidelines)
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

  ${renderLicenseSection(data.license, data.title)}

  ## Contact Information

  >GitHub: [${data.github}](https://github.com/${data.github})
  >Email: ${data.email}

`;
}

module.exports = generateMarkdown;
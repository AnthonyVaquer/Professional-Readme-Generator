// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'none'){
    return ''
  }
  // return a badge
 return `
 ![license](https://img.shields.io/badge/license-${license}-green.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, retxurn an empty string
function renderLicenseLink(license) {
  if(license === 'none'){
    return ''
  }
// return license link for the table of contents
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'none'){
    return ''
  }
  // return the license section for the readme

}

// If there is no email, return an empty string
function renderEmail(email) {
  if(email === 'none'){
    return ''
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${data.repository}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.contributions}

## Tests

${data.test}

- - - - - - - - - - - - - - - - - - - - - -

## Contact Me

${data.GitHub}

${data.email}

`;
}

module.exports = generateMarkdown;

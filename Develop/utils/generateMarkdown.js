// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'none'){
    return ''
  }
  // return a badge
 return `
 ![license](https://img.shields.io/badge/license-${license}-green.svg)`
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'none'){
    return ''
  }
// return license link for the table of contents
}

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

// TODO: Generate Markdown for ReadMe
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

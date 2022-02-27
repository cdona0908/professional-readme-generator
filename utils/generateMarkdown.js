// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const renderLicenseBadge = license => {
  if (license === 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'GPLv3'){
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'Mozilla Public License 2.0'){
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else if (license === 'Apache License 2.0'){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }else {
    return '';
  } 
  
};


// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  
  ## Description

  ${data.description}

  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  

  ## Installation

  To install the neccesary dependencies, run the following command:

  ${data.installation}


  ## Usage

  To use the repo , see the following directions:

  ${data.usage}
   
  To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, add it to your README using the relative filepath.
 

  ## License

  
  This project is licensed under ${data.license} license. 

  ## Contributing
  
  If you like to contribute to this application, please refer to the following guidelines:

  ${data.contribute}

  ## Tests

  To run tests,please run the following command:
  
  ${data.test}

  ## Questions

  You can find me on Github: [${data.github}](https://github.com/${data.github}) <br>
  Any questions? Email me to : ${data.email}

`;
}

module.exports = generateMarkdown;

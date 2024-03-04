import inquirer from "inquirer";  // This npm is used to take inputs from the user
import qr from "qr-image"   // generates qr images in the from of png

inquirer
  .prompt([
    {
        "message": 'what is your name',
        "name": 'edddd'
    }
  ])
  .then((answers) => {
    console.log(this.message)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
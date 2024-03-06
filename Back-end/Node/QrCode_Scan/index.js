import inquirer from "inquirer";  // This npm is used to take inputs from the user
import qr from "qr-image"   // generates qr images in the from of png
import fs from "fs"



// inquirer is basically a npn : that asks for a prompt in the terminal 
// i.e inquirer.prompt(question, answer) ->( means returns) Promise
// inquirer.prompt(question, answer).then(answer).catch(error)



inquirer
  .prompt([
    {
      type: "input",
      message: "what is your name",
      name : "URL",
    }
  ])
  .then((answer) => {
    const file = answer; // the .url will remove the qoutation marks and will return it as a url but the value of name property in the prompt must be in URL ;
    console.log(file)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
      console.log("if the thing we want is not fullfilled ")
    }
  });
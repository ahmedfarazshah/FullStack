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
      message: "Type your URL",
      name : "URL",
    }
  ])
  .then((answer) => {
    const file = answer.URL; // the .url will remove the qoutation marks and will return it as a url but the value of name property in the prompt must be in URL ;
    var qrFile = qr.image(file, {type : 'svg'})
    qrFile.pipe(fs.createWriteStream("newqr.svg"))
    fs.writeFile("newmessage.txt", file, (err)=>{if(err)throw err})
        
  })
  .catch((error) => {
    if (error.isTtyError) {
      throw error.isTtyError  // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
      console.log("if the thing we want is not fullfilled ")
    }
  });







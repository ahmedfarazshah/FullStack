import inquire from "inquirer"
import filesystem from "fs"

inquire.prompt(
    [
        {
            message : "what is your name",
            name : "Name",

        }
    ]
).then(answer =>{
    console.log(answer.Name);
    filesystem.writeFile('Inquire name.txt', answer.Name, err=>{
        console.log(err)
    })

}).catch(err=>{
    console.log(err);
})
#!usr/bin/env node
import inquirer from "inquirer";

console.log("Welcome to Daily Quiz");
console.log("Each Qs marks is 10\n");

let marks : number = 0;

let userInput = await inquirer.prompt([

    { 
        type: "list",
        name: "question1",
        message: "1.Which is the capital city of Pakistan?",
        choices: ["karachi" , "larkana", "islamabad","lahore"]
    },

   {

      type: "list",
      name: "question2",
      message: "2.How many provinces are there in Pakistan?",
      choices: ["four" , "five", "nine","eight"]
   },

{ 
    type: "list",
    name: "question3",
    message: "3.what is the first letter of alphabet?",
    choices: ["A" , "G", "O","Z"]


},

{  type: "list",
    name:"question4",
    message:"4.what is the opposite of big?",
    choices:["small", "heavy", "wide","tall"]

},

{  type: "list",
    name:"question5",
    message:"5. which word is an animal?",
    choices:["dog","car","fan","chair "]

}
]);

const{question1 , question2 , question3 , question4 , question5} =userInput;
let correctOptions = ["islamabad", "five", "A", "small","dog"]
if(question1==="islamabad") marks+=10;
if(question2==="five")marks+=10;
if(question3==="A")marks+=10;
if(question4==="small")marks+=10;
if(question5==="dog")marks+=10
console.log(marks);

function myAnswers(){
    console.log(`\n correct options:`, correctOptions)
    if(marks===50){
        console.log(`congratulations! you got full ${marks}marks`)

    }else if(marks>0){
        console.log(`\n you got ${marks}marks`)
    }else {
        console.log(`\n unfortunately ! you got ${marks}marks`)
    }
}myAnswers();
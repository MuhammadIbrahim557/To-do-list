#! /usr/bin/env node
import inquirer from "inquirer";

let toDoList = []
let condition = true;
while(condition){

let addTask = await inquirer.prompt([
  {
    name: "toDo",
    type: "input",
    message: "What you want to do iwa toDos?",
  },
  {
    name: "addMore",
    type:"confirm",
    message: "Do you want to add more in toDos?",
    default:"false"
  }
]);
toDoList.push(addTask.toDo);
condition = addTask.addMore;
console.log(toDoList)

}

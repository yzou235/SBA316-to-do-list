let todoArray = [];
let deleTasks;
let editTasks;

const form = document.querySelector(".form");
const input = document.querySelector("#todo");
const ul = document.querySelector(".todoList");
const button = document.getElementById("add");

// Add task:
button.addEventListener("click", function(){
    const inputValue = input.value.trim();
    console.log(inputValue);
    
    //validation:
    if (!inputValue) {
        alert("Please enter a task.");
        return;
    }

    //create new list item
    const li = document.createElement("li");
    li.innerHTML = `<span>${inputValue}</span>`;
    console.log(li);

    //append to uk
    ul.appendChild(li);

    //clear input field
    input.value="";
});
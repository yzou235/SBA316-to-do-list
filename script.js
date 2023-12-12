const form = document.querySelector(".form");
const input = document.querySelector("#todo");
const list = document.getElementById("list");
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
    const newTask = document.createElement("newTask");
    newTask.innerHTML = 
        `<div class="task">
            <input type="checkbox" class="task-check" style="transform:scale(3)">
            <span style="font-size:32pt; margin-left:25px;">${inputValue}</span>
            <button class="edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
            <button class="delete"><i class="fa fa-trash" aria-hidden="true"></i></button>
        </div>`;

    //append to uk
    list.appendChild(newTask);

    //clear input field
    input.value="";

    ///////////////////////////////////////////////////////////

    // delete button
    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach(button => {
        button.addEventListener("click", function(){
            button.parentNode.remove();
        })
    })

    // edit button
    

});


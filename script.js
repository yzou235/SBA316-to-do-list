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
            <input type="checkbox" class="task-check">
            <span>${inputValue}</span>
            <button class="edit" id="edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
            <button class="delete" id="delete"><i class="fa fa-trash" aria-hidden="true"></i></button>
        </div>`;

    //append to uk
    list.appendChild(newTask);

    //clear input field
    input.value="";

    ///////////////////////////////////////////////////////////

    // checkbox and strikethrough
    const checkbox = newTask.querySelector(".task-check");
    checkbox.addEventListener("change", function() {
        const spanElement = newTask.querySelector("span");
        spanElement.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });

    // delete button
    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach(button => {
        button.addEventListener("click", function(){
            button.parentNode.remove();
        })
    })

    // // double click to edit
    // //note: I googled it but the code still doesn't work. I can edit the item but cannot save it. 
    // // Most of the answers on google mentioned using React.
    // newTask.addEventListener("dblclick", function(event){
    //     let item = event.target.textContent;
    //     let itemInput = document.createElement("input");
    //     itemInput.type = "text";
    //     itemInput.value = item;
    //     itemInput.classList.add('edit');
    //     itemInput.addEventListener('keypress', saveItem);
    //     itemInput.addEventListener('blur', saveItem);
    //     event.target.parentNode.prepend(itemInput);
    //     event.target.remove();
    //     itemInput.select();

    //     //save item
    //     function saveItem(event) {
    //         let inputValue = event.target.value;
    //         if(event.target.value.length > 0 && (event.keyCode === 13 || event.type === "click")) {
    //             // newTask.addEventListener("click", toggleDone);
    //             // newTask.addEventListener("dblclick", editItem);
    //             newTask.textContent = event.target.value;
    //             event.target.parentNode.prepend(newTask);
    //             event.target.remove();
    //         }
    //     }
    // })

});


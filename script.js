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

    // edit button
    const editButtons = document.querySelectorAll(".edit");
    editButtons.forEach(button => {
        button.addEventListener("click", function(event){
            let targetEl = event.target;
            const spanEl = targetEl.previousElementSibling;
            // here I encountered a problem and I don't why this if code would fix it.
            if (!spanEl) {
                console.error("Error: Unable to find spanElement");
                return;
            }
            const currentText = spanEl.innerText;
            const editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value = currentText;
            spanEl.replaceWith(editInput);
            editInput.focus();
            editInput.addEventListener("blur", function(){
                const editedValue = editInput.value.trim();
                if(editedValue) {
                    spanEl.innerText = editedValue;
                }
                editInput.replaceWith(spanEl);
            });
        })
    })

    

});


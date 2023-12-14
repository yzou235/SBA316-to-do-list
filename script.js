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
    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML = 
        `   <input type="checkbox" class="task-check">
            <span>${inputValue}</span>
            <button class="edit" id="edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
            <button class="delete" id="delete"><i class="fa fa-trash" aria-hidden="true"></i></button>`;
        
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

    // edit button - second try
    const editButtons = document.querySelectorAll(".edit");
    editButtons.forEach(button => {
        button.addEventListener("click", function(event){
            const target = event.target.classList.contains("edit");
            const update = event.target.classList.contains("update");
            // console.log(event.target.parentElement.innerHTML);
            if (target) {
                let val = event.target.previousSibling.previousSibling.innerHTML; //one previousSibling will take us to the text node
                event.target.parentElement.innerHTML = `
                    <input type="text" class="form-input" id="todo" name="todo" value="${val}">
                    <input type="submit" value="update" class="update-btn">
                `;

                const updateBtn = document.querySelector(".update-btn");
                updateBtn.addEventListener("click", function(updateEvent){
                    const updatedValue = updateEvent.target.previousElementSibling.value;
                    console.log(updatedValue);
                    updateEvent.target.parentElement.innerHTML = `
                        <input type="checkbox" class="task-check">
                        <span>${updatedValue}</span>
                        <button class="edit" id="edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                        <button class="delete" id="delete"><i class="fa fa-trash" aria-hidden="true"></i></button>
                    `
                })
            }

        })
    })


});


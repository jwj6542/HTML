const inputField = document.getElementById("todo-input");
const addButton = document.querySelector(".btn");
const todoList = document.getElementById("todoList");
const totalItem = document.querySelector(".counter-container sapn");
const deleteButton = document.getElementById("deleteButton");

let itemCount = 0;

function addTodo(){
    const todoText = inputField.value.trim();

    if(todoText){
        const listItem = document.createElement("li")
        listItem,textContent =todoText;
        todoList.appendChild(listItem)

        itemCount++;
        updateTotalItems();
        inputField.value = "";
    }

}


function updateTotalItems(){
    updateTotalItems.textContent = itemCount;
}

function deleteAllTodos(){
    todoList.innerHTML= '';
    itemCount = 0;
    updateTotalItems();
}

addButton.addEventListener('click', addTodo);
deleteButton.addEventListener('click', deleteAllTodos);
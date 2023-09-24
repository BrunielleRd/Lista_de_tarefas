
const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");

const tasksContainer = document.querySelector(newFunction());

const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
    const inputIsValid = validateInput();

    if (!inputIsValid) {
        return inputElement.classList.add("error")
};
}



addTaskButton.addEventListener("click",() => handleAddTask ());
inputElement.addEventListener("change",() => handleInputChange ());


const taskItemContainer = document.createElement("div");
taskItemContainer.classList.add("task-item");


const taskContent = document.createElement("p");
taskContent.innerText = inputElement.value;


taskContent.addEventListener("click", () => handleClick(taskContent));


const deleteItem = document.createElement ("i");
deleteItem.classList.add("far");
deleteItem.classList.add("fa-trash-alt");

deleteItem.addEventListener("click", () =>
    handleDeleteClick(taskItemContainer, taskContent)
);

taskItemContainer.appendChild(taskContent);
taskItemContainer.appendChild(deleteItem);

tasksContainer.appendChild(taskItemContainer);

inputElement.value = "0";

updateLocalStorage();


function newFunction() {
    return ".tasks-container";
}


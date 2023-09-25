const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");
const tasksContainer = document.querySelector(".tasks-container");

const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
    const inputIsValid = validateInput();

    if (!inputIsValid) {
        inputElement.classList.add("error");
    } else {
        inputElement.classList.remove("error");

        const taskItemContainer = document.createElement("div");
        taskItemContainer.classList.add("task-item");

        const taskContent = document.createElement("p");
        taskContent.innerText = inputElement.value;

        const deleteItem = document.createElement("i");
        deleteItem.classList.add("far", "fa-trash-alt");

        deleteItem.addEventListener("click", () =>
            handleDeleteClick(taskItemContainer, taskContent)
        );

        taskItemContainer.appendChild(taskContent);
        taskItemContainer.appendChild(deleteItem);

        tasksContainer.appendChild(taskItemContainer);

        inputElement.value = "";

        updateLocalStorage();
    }
};

const handleDeleteClick = (taskItemContainer, taskContent) => {

};

const updateLocalStorage = () => {

};

addTaskButton.addEventListener("click", handleAddTask);
inputElement.addEventListener("change", handleAddTask)

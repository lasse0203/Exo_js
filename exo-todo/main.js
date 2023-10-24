import Todo from "./Todo.js"

const todos = [];

const form = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const descriptionInput = document.querySelector('#description');
    const deadlineInput = document.querySelector('#deadline');

    const description = descriptionInput.value;
    const deadline = deadlineInput.value;
        const newTodo = new Todo(description, deadline);
        todos.push(newTodo);
        descriptionInput.value = '';
        deadlineInput.value = '';

        displayTodos();
    
});

function displayTodos() {
    todos.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    todoList.innerHTML = '';

        todos.forEach((todo, index) => {
            const listItem = document.createElement('li');
            const descriptionSpan = document.createElement('span');
            descriptionSpan.textContent = `${todo.description} (Deadline: ${todo.deadline})`;
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Supprimer';
            deleteButton.dataset.index = index; 
            deleteButton.addEventListener('click', () => {
                const indexToRemove = deleteButton.dataset.index;
                if (confirm("Êtes-vous sûr ?")) {
                    todos.splice(indexToRemove, 1);
                    displayTodos();
                }
            });
    
            listItem.appendChild(descriptionSpan);
            listItem.appendChild(deleteButton);
            todoList.appendChild(listItem);
        });
    }
    

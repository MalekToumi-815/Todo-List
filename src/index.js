import {Todos} from './TodosHandler.js';
import { DOM } from './DOMHandler.js';
import './styles.css';
// Event listener for the new todo form submission
const form = document.getElementById('newtodoForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const category = document.getElementById('category').value;
    const dueDate = document.getElementById('dueDate').value;
    // Logic to handle the new todo item
    console.log(`New Todo: ${title}, ${description}, ${priority}, ${category}, ${dueDate}`);
    Todos.addTodo(title, description, dueDate, priority, category);
    DOM.displayTodo(Todos.todos);
    // Reset the form after submission
    form.reset();
});
// Event listener for the delete button
document.querySelector('.TodoList').addEventListener('click', (e) => {
    if (!e.target.classList.contains('delete-todo')) return;
    const id = e.target.dataset.id;
    Todos.deleteTodo(id);
    const parent = e.target.parentElement;
    parent.remove();
})
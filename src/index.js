import {Todos} from './TodosHandler.js';
import { DOM } from './DOMHandler.js';
import { Category } from './CategoryHandler.js';
import './styles.css';
//Loading categories when page loads
document.addEventListener("DOMContentLoaded",() => {
    DOM.loadCategory(Category.categories);
})
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
    DOM.displayTodo(Todos.todos.filter(item => item.category === category));
    //underline the category of the new todo
    document.querySelectorAll(".categoryItem").forEach(item => {
        if (item.dataset.category == category){
            item.style.textDecoration = "underline";
        }
        else
            item.style.textDecoration = "none"
    });
    // Reset the form after submission
    form.reset();
});
// Event listener for Todolist
document.querySelector('.TodoList').addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-todo')) {
        const id = e.target.dataset.id;
        Todos.deleteTodo(id);
        const parent = e.target.parentElement;
        parent.remove();
    }
    else if (e.target.classList.contains('todo-item')) {
        const todoId = e.target.closest('.todo-item').querySelector('.delete-todo').dataset.id;
        const todo = Todos.findTodo(todoId);
        DOM.displayTodoDetails(todo,Category.categories);
    }
    else return;
})
// Event listener for TodoDetails closing & editing
document.querySelector("#TodoDetails").addEventListener("click", (e) => {
    if (e.target.id === "closeIcon") {
        document.querySelector("#detailstodoForm").innerHTML = "";
        document.querySelector("#detailstodoForm").classList.add("readonly");
    }
    else if (e.target.id === "editIcon") {
        if (document.querySelector("#detailstodoForm").innerHTML !== ""){
            document.querySelector("#detailstodoForm").classList.remove("readonly");
        }
        else return;
    }
    else if (e.target.id === "saveEdit") { 
        e.preventDefault();
        const title = document.getElementById('titledetails').value;
        const description = document.getElementById('descriptiondetails').value;
        const priority = document.getElementById('prioritydetails').value;
        const category = document.getElementById('categorydetails').value;
        const dueDate = document.getElementById('dueDatedetails').value;
        let edited_todo = {
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority,
            category: category
        };
        const id = e.target.dataset.id;
        Todos.editTodo(id, edited_todo);
        DOM.displayTodo(Todos.todos.filter(item => item.category === category));
        document.querySelector("#detailstodoForm").classList.add("readonly");
        document.querySelectorAll(".categoryItem").forEach(item => {
            if (item.dataset.category == category){
                item.style.textDecoration = "underline";
            }
            else
                item.style.textDecoration = "none"
            });
    }
    else return;
});
//Event listener for new , filter and delete category
document.querySelector("nav").addEventListener("click", (e) => {
    if (e.target.id === "newcategoryButton"){
        e.preventDefault()
        let newcategory = document.querySelector("#newCategory").value
        if (!newcategory.trim()) return;
        Category.addCategory(newcategory)
        DOM.loadCategory(Category.categories);
        document.querySelector("#newCategory").value = ""
    }
    else if (e.target.classList.contains("categoryItem")){
        //remove text decoration for all other categories
        document.querySelectorAll(".categoryItem").forEach(item => {
            item.style.textDecoration = "none";
        });
        let category = e.target.dataset.category
        DOM.displayTodo(Todos.todos.filter(item => item.category === category))
        e.target.style.textDecoration = "underline"
    }
    else if (e.target.classList.contains("delCategory")){
        let category = e.target.parentElement.dataset.category
        Category.deleteCategory(category)
        DOM.loadCategory(Category.categories);
        Todos.deleteCategoryTodos(category);
        DOM.displayTodo(Todos.todos);
        document.querySelectorAll(".categoryItem").forEach(item => {
            item.style.textDecoration = "none";
        });
    }
}) 
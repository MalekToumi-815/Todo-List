function newTodo (todo) {
    const todoList = document.querySelector('.TodoList');
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';
    todoItem.innerHTML = `
        <h3>${todo.title}</h3>
        <p>${todo.description}</p>
        <p>Due: ${todo.dueDate}</p>
        <p>Priority: ${todo.priority}</p>
        <p>Category: ${todo.category}</p>
        <button class="delete-todo" data-id="${todo.id}">Delete</button>
    `;
    todoList.appendChild(todoItem);
}
export { newTodo };
const DOM = (() => {
    function displayTodo (todos) {
        const todoList = document.querySelector('.TodoList');
        todoList.innerHTML = ''; // Clear existing todos
        todos.forEach(todo => {
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
        });
    }
    return { displayTodo };
})();
export { DOM };
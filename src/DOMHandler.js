const DOM = (() => {
    function displayTodo (todos) {
        const todoList = document.querySelector('.TodoList');
        todoList.innerHTML = '<h1>Todos</h1>'; // Clear existing todos
        todos.forEach(todo => {
            const todoItem = document.createElement('div');
            todoItem.className = 'todo-item';
            if (todo.priority === 'Medium') 
                todoItem.style.backgroundColor = 'rgba(104, 166, 236, 0.76)';
            if (todo.priority === 'High') 
                todoItem.style.backgroundColor = 'rgba(247, 180, 180, 0.76)';
            if (todo.priority === 'Low') 
                todoItem.style.backgroundColor = 'rgba(198, 248, 188, 0.76)';
            todoItem.innerHTML = `
                <div><h3>${todo.title}</h3>
                <p>Due: ${todo.dueDate}</p></div>
                <button class="delete-todo" data-id="${todo.id}">Delete</button>
            `;
            todoList.appendChild(todoItem); 
        });
    }
    return { displayTodo };
})();
export { DOM };
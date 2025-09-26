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
    function displayTodoDetails(todo) {
        const tododetails = document.querySelector('#detailstodoForm');
        tododetails.innerHTML = `
            
                <div class="form-group">
                    <label for="title">Title:</label>
                    <input type="text" id="titledetails" name="title" required value="${todo.title}"/>
                </div>
            
                <div class="form-group">
                    <label for="description">Description:</label>
                    <textarea id="descriptiondetails" name="description" rows="2">${todo.description}</textarea>
                </div>
            
                <div class="form-group">
                    <label for="dueDate">Due Date:</label>
                    <input type="date" id="dueDatedetails" name="dueDate" required value="${todo.dueDate}"/>
                </div>
            
                <div class="form-group">
                    <label for="priority">Priority:</label>
                    <select id="prioritydetails" name="priority" required>
                        <option value="">--Select Priority--</option>
                        <option value="Low" ${todo.priority === "Low" ? "selected" : ""}>Low</option>
                        <option value="Medium" ${todo.priority === "Medium" ? "selected" : ""}>Medium</option>
                        <option value="High" ${todo.priority === "High" ? "selected" : ""}>High</option>
                    </select>
                </div>
            
                <div class="form-group">
                    <label for="category">Category:</label>
                    <select id="categorydetails" name="category" required>
                        <option value="">--Select Category--</option>
                        <option value="projects" ${todo.category === "projects" ? "selected" : ""}>Projects</option>
                    </select>
                </div>
            
                <div class="form-group">
                    <button id="saveEdit" type="submit" data-id="${todo.id}">Save</button>
                </div>
        `;
    }
    return { displayTodo , displayTodoDetails};
})();
export { DOM };
class Todo {
    constructor(title, description, dueDate ,priority , category = "Projects") {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description; 
        this.dueDate = dueDate;
        this.priority = priority;
        this.category = category;
    }
}
export const Todos = (() => {
    const todos = []
    const addTodo  = (title, description, dueDate, priority, category) => {
        const todo = new Todo(title, description, dueDate, priority, category);
        todos.push(todo);
        return todo;
    }
    const deleteTodo = (id) => {
        const index = todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            todos.splice(index, 1);
        }
    }
    const findTodo = (id) => {
        return todos.find(todo => todo.id === id);
    }
    const editTodo = (id, update) => {
        const todo = findTodo(id);
        if (todo) {
            todo.title = update.title;
            todo.description = update.description;
            todo.dueDate = update.dueDate;
            todo.priority = update.priority;
            todo.category = update.category;
        }
    }
    return { addTodo, deleteTodo, findTodo, editTodo };
})();
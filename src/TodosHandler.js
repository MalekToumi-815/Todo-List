class Todo {
    constructor(title, description, dueDate ,priority , category) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description; 
        this.dueDate = dueDate;
        this.priority = priority;
        this.category = category;
    }
}
export const Todos = (() => {
    const stored = localStorage.getItem("todos");
    const todos = stored ? JSON.parse(stored) : [];
    const addTodo  = (title, description, dueDate, priority, category) => {
        const todo = new Todo(title, description, dueDate, priority, category);
        todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
        console.log(todo)
        return todo;
    }
    const deleteTodo = (id) => {
        const index = todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            todos.splice(index, 1);
            localStorage.setItem("todos", JSON.stringify(todos));
        }
        else {
            console.error(`Todo with ID ${id} not found`);
        }
        console.log(`Todo with ID ${id} deleted`);
    }
    const deleteCategoryTodos = (category) => {
        const filtered = todos.filter(todo => todo.category !== category);
        todos.length = 0;
        todos.push(...filtered);
        localStorage.setItem("todos", JSON.stringify(todos));
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
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }
    return { addTodo, deleteTodo, findTodo, editTodo , deleteCategoryTodos ,todos };
})();
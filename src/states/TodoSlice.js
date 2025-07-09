import { nanoid } from "nanoid";

export const createTodoSlice = (set) => ({
    todos: [],
    addTodo: (text) => set((state) => ({
        todos: [...state.todos, { id: nanoid(), text, done: false }],
    })),
    toggleTodo: (id) => set((state) => ({
        todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        )
    })),
    removeTodo: (id) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        })),
})
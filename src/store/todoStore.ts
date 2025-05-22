import {create} from 'zustand'

export interface Todo { id: string; text: string; }

interface TodoState {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  reorderTodos: (from: number, to: number) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (text) =>
    set((state ) => ({ todos: [...state.todos, { id: Date.now().toString(), text }] })),
  removeTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((t) => t.id !== id) })),
  reorderTodos: (from, to) =>
    set((state) => {
      const updated = Array.from(state.todos);
      const [moved] = updated.splice(from, 1);
      updated.splice(to, 0, moved);
      return { todos: updated };
    }),
}));
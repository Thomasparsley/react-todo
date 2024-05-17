import { useState } from "react";

import { NewTodo, Todo } from "@/types/Todo";

export function useTodosState(init?: Todo[]) {
  const [todos, setTodos] = useState<Todo[]>(init ?? []);

  return {
    todos,
    setTodos,
    addTodo: (todo: NewTodo) => {
      const id = (Math.random() * 10000).toFixed().toString();
      const newTodo: Todo = { id, ...todo };
      setTodos([...todos, newTodo]);
    },
    removeTodoById: (id: string) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
  }
}
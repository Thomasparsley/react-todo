
import DefaultLayout from "@/layout/default";

import TodoForm from "@/components/forms/todoForm";
import TodoList from "@/components/todos/todosList";

import { useTodosState } from "@/states/useTodosState";
import { loadTodos, saveTodos } from "@/lib/todosStorage";
import { useEffect } from "react";

export default function App() {
  const { todos, addTodo, removeTodoById } = useTodosState(loadTodos());

  const todoFormHandle = ({ taskName }: { taskName: string }) => {
    addTodo({ name: taskName });
  }

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  return (
    <DefaultLayout>
      <TodoForm submit={todoFormHandle} />
      <TodoList todos={todos} onRemove={removeTodoById} />
    </DefaultLayout>
  )
}

import type { Todo } from "@/types/Todo";

/**
 * Loads the todos from local storage.
 *
 * @returns {Todo[]} An array of Todo objects. If no todos are found in local storage, an empty array is returned.
 */
export function loadTodos(): Todo[] {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

/**
 * Saves the todos to local storage.
 *
 * @param todos - An array of Todo objects to be saved.
 */
export function saveTodos(todos: Todo[]) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

export interface Todo {
  id: string;
  name: string;
}

export type NewTodo = Pick<Todo, "name">;
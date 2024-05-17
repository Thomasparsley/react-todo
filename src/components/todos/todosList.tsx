import { useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";

import TodoItem from "./todosItem";
import type { Todo } from "@/types/Todo";

interface Props {
  todos: Todo[];
  onRemove: (id: string) => void;
}

export default function TodoList(props: Props) {
  const { todos, onRemove } = props;

  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    listRef.current && autoAnimate(listRef.current);
  }, [listRef])

  return (
    <ul className=":uno: my-4 grid gap-2" ref={listRef}>
      {todos.map((todo, key) => (
        <TodoItem {...{ todo, onRemove }} key={key} />
      ))}
    </ul>
  )
}
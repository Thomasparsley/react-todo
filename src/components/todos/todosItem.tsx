import { Cross } from "lucide-react";

import type { Todo } from "@/types/Todo";
import Button from "../ui/Button";

interface Props {
  todo: Todo;
  onRemove: (id: string) => void;
}

export default function TodoItem(props: Props) {
  const { todo, onRemove } = props;

  return (
    <li className=":uno: bg-white px-4 py-3 text-zinc-800 rounded shadow flex justify-between items-center">
      <div className=":uno: flex">
        {todo.name}
      </div>

      <div>
        <Button size="icon" onClick={() => onRemove(todo.id)}>
          <Cross className=":uno: h-4 w-4" />
        </Button>
      </div>
    </li>
  )
}
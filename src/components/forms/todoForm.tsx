import type { FormEvent } from "react";

import FormInput from "../ui/Forms/Input";
import Button from "../ui/Button";

import { useTodoFormState } from "@/states/useTodoFormState";

interface Props {
  submit: ({ taskName }: { taskName: string }) => void;
}

export default function TodoForm({ submit }: Props) {
  const { controllers, getFormValue, clearForm } = useTodoFormState();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit(getFormValue());
    clearForm();
  }

  return (
    <form className=":uno: flex gap-2 items-center" onSubmit={handleSubmit}>
      <div className=":uno: w-full">
        <FormInput className=":uno: w-full" id="task-name" label="Task name" placeholder="Whats the new tasks?" controller={controllers.taskName} />
      </div>

      <Button type="submit" variant="outline">Add</Button>
    </form>
  )
}
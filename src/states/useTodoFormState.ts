import { useController } from "@/hooks/useController";

interface TodoFormState {
  taskName?: string;
}

export function useTodoFormState(options?: TodoFormState) {
  const taskNameControler = useController(options?.taskName ?? "");
  const { value: taskName, setValue: setTaskName } = taskNameControler;

  return {
    controllers: {
      taskName: taskNameControler
    },
    getFormValue() {
      return {
        taskName,
      }
    },
    clearForm() {
      setTaskName("");
    },
  }
}
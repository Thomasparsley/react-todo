import type { ChangeEvent } from "react";

import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";

import { type ControllerState } from "@/hooks/useController";

interface Props<T> {
  id: string;
  placeholder: string;
  label: string;
  controller: ControllerState<T>;
  className?: string;
}

export default function FormInput<T extends string | number>(props: Props<T>) {
  const { id, placeholder, label, controller, className } = props;
  const { value, setValue } = controller;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value as T);

  return (
    <div className={className}>
      <Label className=":uno: sr-only" htmlFor={id}>{label}</Label>
      <Input {...{ id, placeholder, value }} type="text" onChange={handleChange} />
    </div>
  )
}
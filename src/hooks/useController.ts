import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";

export type ControllerState<T = unknown> = {
  value: T;
  setValue: Dispatch<SetStateAction<T>>;
};

export function useController<T>(init: T): ControllerState<T> {
  const [value, setValue] = useState(init);

  return {
    value,
    setValue,
  }
}
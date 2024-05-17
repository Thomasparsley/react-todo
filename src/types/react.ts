import { Dispatch, SetStateAction } from "react";

export type StateHook<S> = [S, Dispatch<SetStateAction<S>>];
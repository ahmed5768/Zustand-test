import { create } from "zustand";
import { createThemeSlice } from "./ThemeSlice";
import { createCountSlice } from "./CountSlice";
import { createTodoSlice } from "./TodoSlice";

const useStore = create((set) => ({
    ...createCountSlice(set),
    ...createThemeSlice(set),
    ...createTodoSlice(set)
}))

export default useStore
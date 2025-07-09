export const createThemeSlice = (set) => ({
    theme: "light",
    toggletheme: () => set((state) => ({theme: state.theme === "light" ? "dark" : "light"}))
})
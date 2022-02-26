import create, { GetState, SetState } from "zustand";
import { persist } from "zustand/middleware";

type DarkMode = {
    isDark: boolean;
    setDarkMode: () => void;
};

const useDarkMode = create(
    persist<DarkMode, SetState<DarkMode>, GetState<DarkMode>>(
        (set) => ({
            isDark: false,
            setDarkMode: () => set((state) => ({ isDark: !state.isDark })),
        }),
        { name: "shumo-theme" }
    )
);

export default useDarkMode;

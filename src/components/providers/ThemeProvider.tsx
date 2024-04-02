"use client";
import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

// Define the shape of the context data
interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

// Provide a default value for the context
const ThemeContext = createContext<ThemeContextType>({
    theme: "light", // or 'dark',
    toggleTheme: () => {},
});

// Type for the props of ThemeProvider
interface ThemeProviderProps {
    children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<string>("light");

    useEffect(() => {
        const storedTheme =
            localStorage.getItem("theme") ||
            (window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light");
        setTheme(storedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}

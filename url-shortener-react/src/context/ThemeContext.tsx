import { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: {children:ThemeContextType}) {
     const [theme, setTheme]= useState<Theme>("light");
     function toggleTheme(){
        setTheme(theme === "light" ? "light" : "dark");
     }

   
}
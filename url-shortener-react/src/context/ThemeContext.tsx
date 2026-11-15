import { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
     const [theme, setTheme]= useState<Theme>("light");
     function toggleTheme(){
        setTheme(theme === "light" ? "dark" : "light");
     }
     useEffect(()=>{
        document.body.className = theme;
     }, [theme]);

     return(
        <ThemeContext.Provider value = {{theme, toggleTheme}}>{children}</ThemeContext.Provider>
     )

   
}
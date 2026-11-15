import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';



export default function ThemeToggle(){
    const theme = useContext(ThemeContext);
    return(
        <div>
            <button onClick={theme?.toggleTheme}>{theme?.theme === "light" ? "Dark" : "Light"}</button>
        </div>
    )
}
import type { ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode;
}

export default function Button({children}: ButtonProps) {
    return (
        
            <button type="button">{children}</button>
        
    )
}
import { ReactNode } from "react";

interface CellProps {
    children: ReactNode
    size: string
    style?: object
}
export default function Cell({ children, size, style = {} }: CellProps) {
    const cellStyle = `
        grid-item aspect-square
        border-5 border-slate-500/50
        bg-indigo-500/50
`;
    // w-${size} h-${size} 
    return (
        <div
            className={cellStyle}
            style={{
                ...style, width: size, height: size, paddingBottom: '100%', // This creates a square aspect ratio
                background: 'lightgrey',
            }} // Use inline styles to apply dynamic size
        >{children}</div>
    );
};

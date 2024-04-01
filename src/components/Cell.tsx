import { ReactNode } from "react";
import { Position } from "./Grid";
interface CellProps {
    children?: ReactNode
    pos: Position
    size: string
    style?: object
}
export default function Cell({ children = null, pos, size, style = {} }: CellProps) {
    const tw = `
        grid-item aspect-square
        border-5 border-slate-500/50
        bg-indigo-500/50
`;
    // w-${size} h-${size} 
    return (
        <div
            className={tw}
            style={{
                ...style, width: size, height: size, paddingBottom: '100%', // This creates a square aspect ratio
                // background: 'lightgrey',
            }} // Use inline styles to apply dynamic size
        >{children}</div>
    );
};

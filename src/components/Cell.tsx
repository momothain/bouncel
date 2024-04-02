import { ReactNode } from "react";
import { Position } from "./Grid";
import { CellProps, ElementType } from "@/components/GridMemo";
import React from "react";
import Ball from "./Ball";
// interface CellProps {
//     children?: ReactNode
//     pos: Position
//     size: string
//     style?: object
// }
export default function Cell({ pos, size, children }: CellProps) {
    const tw = `
        grid-item aspect-square
        border-5 border-slate-500/50
        bg-indigo-900/75
`;
    // w-${size} h-${size}

    return (
        <div
            className={tw}
            style={{
                width: size,
                height: size,
                paddingBottom: "100%", // This creates a square aspect ratio
                // background: "lightgrey",
            }} // Use inline styles to apply dynamic size
        >
            {children}
        </div>
    );
}

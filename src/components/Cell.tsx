import { CellProps } from "@/types/element-types";
import React from "react";
import { useTheme } from "./providers/ThemeProvider";

export default function Cell({ pos, size, children }: CellProps) {
    const { theme } = useTheme();
    const backgroundColor = theme === "light" ? "bg-cyan-500/90" : "bg-indigo-900/75"; // Example colors

    const style = {
        gridRow: 1 + pos[0], // technically redundant right now but feels like good practice
        gridColumn: 1 + pos[1],
        width: size,
        height: size,
        "box-sizing": "border-box",
        // paddingBottom: "100%", // This creates a square aspect ratio
    };

    const tw = `aspect-square
        border-5 border-slate-500/50
        ${backgroundColor}
`;
    // w-${size} h-${size}

    return (
        <div
            className={tw}
            style={style} // Use inline styles to apply dynamic size
        >
            {children}
        </div>
    );
}

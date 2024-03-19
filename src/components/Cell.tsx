interface CellProps {
    size: string
}
export default function Cell({ size }: CellProps) {
    const cellStyle = `
        grid-item aspect-square
        border-5 border-slate-500/50
        bg-indigo-500/50
`;
    // w-${size} h-${size} 
    return (
        <div
            className={cellStyle}
            style={{ width: size, height: size }} // Use inline styles to apply dynamic size
        >

        </div>
    );
};

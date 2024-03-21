import React, { useState, useEffect } from 'react';
import Cell from './Cell';
import Ball from './Ball';

export type Position = [number, number];
export enum ObjType {
    EMPTY,
    BALL

} 1
export interface ObjState {
    id: string;
    position?: Position;
    type: ObjType;
}
export type GridState = ObjState[];

interface GridProps {
    rows: number;
    cols: number;
    initGrid: GridState;
}

export default function Grid({ rows, cols, initGrid }: GridProps) {
    const debug = true
    const [gridState, setGridState] = useState<GridState>(initGrid);

    // Create a grid array for rendering
    const cellComponents = Array.from({ length: rows }, () => new Array(cols).fill(null));

    // dependciess
    let grid;
    useEffect(() => {
        grid = gridState.map(obj => {
            let cellComponent;
            switch (obj.type) {
                case ObjType.EMPTY:
                    cellComponent = null;
                case ObjType.BALL:
                    cellComponent = <Ball />;
                default:
                    throw new Error("You invented a new physics element. Nice.");
            };
            if (cellComponent) {
                const [x, y] = obj.position;
                cellComponents[y][x] = cellComponent;
            }
        }, [gridState]);

        const cellSize = `calc(100vw / ${Math.max(rows, cols)})`; // Adjust cell size based on grid dimensions

        return (
            <div className="flex flex-col ">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${cols}, 1fr)`,
                    gridTemplateRows: `repeat(${rows}, 1fr)`,
                    gap: '1px',
                    width: '100vw',
                    height: `calc(100vw * ${rows} / ${cols})`,
                    margin: 'auto',
                }}>
                    {cellComponents.flatMap((row, rowIndex) =>
                        row.map((cellContent, colIndex) => (
                            <Cell key={`${rowIndex}-${colIndex}`} size={cellSize}>
                                {cellContent}
                            </Cell>
                        ))
                    )}
                </div>
                );
            </div>
        )
    }

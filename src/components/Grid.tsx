import React, { useState, useEffect, ReactNode } from 'react';
import Cell from './Cell';
import Ball from './Ball';

export type Position = [number, number];

export enum ObjType {
    EMPTY,
    BALL,
}

export interface EltState {
    id: string;
    position: Position;
    type: ObjType;
}

type CellState = EltState | null;


type GridState = CellState[][];


interface GridProps {
    rows: number;
    cols: number;
    initGrid: EltState[];
}

function initializeGrid(rows: number, columns: number) {
    // Create a 2D array filled with null (no element in the cell)
    return Array.from({ length: rows }, () => Array(columns).fill(null));
}

function updateGrid(grid: GridState, elementsArray: EltState[]) {
    // Clear the grid
    for (let row of grid) {
        row.fill(null);
    }

    // Populate the grid with new positions of elements
    for (const element of elementsArray) {
        if (grid[element.row] && grid[element.row][element.column] === null) {
            grid[element.row][element.column] = element;
        }
    }
}


export default function Grid({ rows, cols, initGrid }: GridProps) {
    const debug = true;
    const [objStates, setObjStates] = useState<EltState[]>(initGrid);
    const [cellElts, setCellElts] = useState<[ReactNode, Position][]>([]);
    const cellSize = `calc(100vw / ${Math.max(rows, cols)})`;
    const [grid, setGrid] = useState<ReactNode[]>([]);

    // Create a grid array for rendering

    // dependencies
    useEffect(() => {
        setCellElts(
            objStates.map(obj => {
                let cellElt;
                switch (obj.type) {
                    case ObjType.EMPTY:
                        cellElt = null;
                        break;
                    case ObjType.BALL:
                        cellElt = <Ball />;
                        break;
                    default:
                        throw new Error("you invented a new physics element. nice.");
                }

                return [cellElt, obj.position];
            })
        );

        // 
        setGrid(Array.from({ length: rows * cols }, (index: number) => {
            const pos: Position = [Math.floor(index / cols), index % cols];
            return <Cell key={`{pos[0]},{pos[1]}`} pos={pos} size={cellSize}></Cell>;
        }))

    }, [objStates, cellSize, cols, rows]);

    function s() {

    }


    // Adjust cell size based on grid dimensions
    return (
        <div className="flex flex-col">
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${cols}, 1fr)`,
                    gridTemplateRows: `repeat(${rows}, 1fr)`,
                    gap: '1px',
                    width: '100vw',
                    height: `calc(100vw * ${rows} / ${cols})`,
                    margin: 'auto',
                }}
            >
                {

                    cellElts.flatMap((row, rowIndex) =>
                        row.map((cellContent, colIndex) => (
                            <Cell key={`${rowIndex}-${colIndex}`} pos={[rowIndex, colIndex]} size={cellSize}>
                                {cellContent}
                            </Cell>
                        ))
                    )}
            </div>
        </div>
    );
}
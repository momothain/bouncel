//components/Grid.tsx
"use client"
import React, { useState } from 'react'
import Ball from '@/components/Ball'
import { CellType, GridState } from "./types"
import Cell from './Cell'

interface GridProps {
    rows: number
    cols: number
    initGrid: GridState
}

export default function Grid({ rows, cols, initGrid }: GridProps) {
    // The grid container style
    const styleGrid =
        `grid grid-rows-${rows} grid-cols-${cols}
        divide-x divide-y border-5 border-gray-300
        relative h-screen w-full`

    // You don't need to create a 2D array since you're just filling the grid with cells
    const cells = Array.from({ length: rows * cols }, (_, index) => (
        <Cell key={index} /> // Render the Cell component
    ));

    return (
        <div className={styleGrid}>
            {cells}
        </div>
    );
};



// export default function Grid({ rows, cols, initGrid }: GridProps) {
//     const [gridState, setGridState] = useState<GridState>(initGrid)

//     const styleGrid =
//         `grid grid-rows-${rows} grid-cols-${cols}
//     divide-x divide-y border-2 border-gray-300
//     relative h-screen w-full`

//     return (
//         <div className={styleGrid} style={{ width: '100%', height: '100%' }}>
//             {Array.from({ length: rows * cols }, (_, index) => {
//                 const x = index % cols;
//                 const y = Math.floor(index / cols);

//                 // Find if there is a gameObject for this cell
//                 const cell = gridState.find(cell => cell.props.position[0] === x && cell.props.position[1] === y);

//                 return (
//                     <div key={index} className={`${cellStyle} flex justify-center items-center bg-gray-50`}>
//                         {/* Render the appropriate component based on the cell type */}
//                         {cell?.type === CellType.BALL ? <Ball {...cell.props} /> : <></>}
//                     </div>
//                 );
//             })}
//         </div>
//     )
// }


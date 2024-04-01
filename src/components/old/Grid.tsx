//components/Grid.tsx
"use client"
import React, { useState } from 'react'
import Ball from '@/components/Ball'
import { ObjType } from "../types"
import { ObjState[] } from "../Grid"
import Cell from '../Cell'

interface GridProps {
    rows: number
    cols: number
    initGrid: ObjState[]
}

export default function Grid({ rows, cols, initGrid }: GridProps) {
    const style =
        " grid-container "
        + ` bg-sky=500-75 `
        + " h-screen w-screen "
        + ` grid grid-cols-${cols} divide-x border-10 border-black-500/80 `
        + ` grid-rows-${rows} divide-y `

    const cellSize = `calc(100vh / ${Math.max(rows, cols)})`; // Making sure the size is based on the larger of rows or cols for a square grid
    const cells = Array.from({ length: rows * cols }, (_, index) => (
        <Cell size={cellSize} key={index} />
    ));



    return (
        <div className={style}>
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


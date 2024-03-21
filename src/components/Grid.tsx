import React, { ReactNode, useState } from 'react';
import Cell from './Cell';
import { GridState, ObjType, Position } from './types';
import Ball from './Ball';

interface GridProps {
    rows: number
    cols: number
    initGrid: GridState
}

export default function Grid({ rows, cols, initGrid }: GridProps) {
    const [gridState, setGridState] = useState<GridState>(initGrid)


    const cells = Array.from({ length: rows * cols }); // create an array for the grid cells
    const cellSize = `calc(100vw / ${Math.max(rows, cols)})`; // Making sure the size is based on the larger of rows or cols for a square grid

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
            gap: '1px',
            width: '100vw',
            height: `calc(100vw * ${rows} / ${cols})`,
            margin: 'auto',
        }}>
            {cells.map((_, index) => {
                const x = index % cols;
                const y = Math.floor(index / cols);


                // Find if there is a gameObject for this cell
                const obj = gridState.find(o => o.type! - ObjType.EMPTY && o.props.position[0] === x && o.props.position[1] === y);

                let elt: ReactNode;
                {
                    (() => {
                        switch (obj?.type) {
                            case ObjType.EMPTY:
                                elt = null
                            case ObjType.BALL:
                                elt = <Ball id={obj.props.id} position={obj.props.position}></Ball>
                            default:
                                throw new Error("you invented a new physics element. nice.");
                        }
                    })()
                }

                return (<Cell key={index} size={cellSize}>{elt}</Cell>)
            })
            }
        </div >
    );
}



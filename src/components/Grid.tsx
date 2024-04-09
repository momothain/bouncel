// GPL-3.0-or-later © Copyleft 2024 momothain, Morgann Thain
import React, { useState, useEffect, useMemo, ReactNode } from "react";
import Cell from "./Cell";
import Ball from "./Ball";
import {
    BouncelType,
    Vector,
} from "../types/types";
import {
    GridProps,
    ElementState, ElementProps,
    CellProps
} from "@/types/element-types";

export default function Grid({ rows, cols, initEltStates }: GridProps) {
    const [eltStates, setEltStates] = useState<ElementState[]>(initEltStates);
    const cellSize = `calc(100vw / ${Math.max(rows, cols)})`;
    const MemoizedBall = React.memo(Ball);
    const MemoizedCell = React.memo(Cell);

    const grid: ReactNode[] = useMemo(() => {
        function renderElement(type: BouncelType, props: ElementProps): ReactNode {
            switch (type) {
                case BouncelType.EMPTY:
                    return null;
                case BouncelType.BALL:
                    // Assert that eltProps is not undefined when elementType is BALL
                    if (!props)
                        throw new Error("Element props are required for BALL type");
                    return <MemoizedBall {...props} />;
                default:
                    throw new Error("you invented a new element. nice");
            }
        }

        function renderCell(props: CellProps) {
            return <MemoizedCell {...props}></MemoizedCell>;
        }
        // Initialize the grid with null values
        const gridArray: ReactNode[] = Array.from(
            { length: rows * cols },
            (_, index) => {
                const pos: Vector = [Math.floor(index / cols), index % cols];
                const cellProps: CellProps = {
                    pos: pos,
                    size: cellSize,
                    children: (
                        <h2>
                            `{[pos[0]]},{pos[1]}`
                        </h2>
                    ),
                };
                return renderCell(cellProps);
            },
        );

        eltStates.forEach(({ pos, type, props }) => {
            const gridIndex: number = pos[0] * cols + pos[1];
            const elt = renderElement(type, props);
            const cellProps: CellProps = { pos: pos, size: cellSize, children: elt };
            const cell = renderCell(cellProps);
            gridArray[gridIndex] = cell;
        });

        return gridArray;
    }, [rows, cols, cellSize, eltStates, MemoizedBall, MemoizedCell]);

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${cols}, 1fr)`,
                gridTemplateRows: `repeat(${rows}, 1fr)`,
                gap: "1px",
            }}
        >
            {grid}
        </div>
    );
}

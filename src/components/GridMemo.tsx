import React, { useState, useEffect, useMemo, ReactNode, ReactElement } from "react";
import Cell from "./Cell";
import Ball from "./Ball";

export type Position = [number, number];
function posEquals(v1: Position, v2: Position) {
    return v1.every((value, index) => value === v2[index]);
}

// DEFINE BOUNCEL ELEMENTS
export enum ElementType {
    EMPTY,
    BALL,
}

export type ID = string;

export type ElementProps = ElementPropsBase | null;

export interface ElementPropsBase {
    id: ID;
}

export interface BallProps {}

export type Element = ReactElement<ElementProps>;

export interface CellProps {
    pos: Position;
    size: string;
    children?: ReactNode;
}

export interface ElementState {
    pos: Position;
    type: ElementType;
    props: ElementProps;
}

interface GridProps {
    rows: number;
    cols: number;
    initEltStates: ElementState[];
}

export default function Grid({ rows, cols, initEltStates }: GridProps) {
    const [eltStates, setEltStates] = useState<ElementState[]>(initEltStates);
    const cellSize = `calc(100vw / ${Math.max(rows, cols)})`;
    const MemoizedBall = React.memo(Ball);
    const MemoizedCell = React.memo(Cell);

    const grid: ReactNode[] = useMemo(() => {
        function renderElement(type: ElementType, props: ElementProps): ReactNode {
            switch (type) {
                case ElementType.EMPTY:
                    return null;
                case ElementType.BALL:
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
        const gridArray: ReactNode[] = Array.from({ length: rows * cols }, () => null);

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

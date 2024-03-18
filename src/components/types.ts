export enum CellType {
    EMPTY,
    BALL

}

export type Position = [number, number];

export interface CellProps {
    id: number;
    position: Position;
}
export interface CellState {
    props: CellProps;
    type: CellType; // Use the CellType enum
}

export type GridState = CellState[];




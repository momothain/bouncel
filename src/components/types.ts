export enum ObjType {
    EMPTY,
    BALL

}

export type Position = [number, number];

export interface ObjProps {
    id: number;
    position: Position;
}
export interface ObjState {
    props: ObjProps;
    type: ObjType; // Use the CellType enum
}

export type GridState = ObjState[];




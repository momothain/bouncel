import { ReactNode, ReactElement } from "react";

export type Position = [number, number];
function posEquals(v1: Position, v2: Position) {
    return v1.every((value, index) => value === v2[index]);
}
// DEFINE BOUNCEL ELEMENTS

export enum ElementType {
    EMPTY,
    BALL,
    WALL,
    USER,
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
export interface GridProps {
    rows: number;
    cols: number;
    initEltStates: ElementState[];
}

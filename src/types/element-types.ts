// GPL-3.0-or-later © Copyleft 2024 momothain, Morgann Thain
import { ID, Vector, BouncelType } from "./types";

import { ReactElement, ReactNode } from "react";

export interface ElementProps {
    id: ID;
}

export interface BallProps { }

export type Element = ReactElement<ElementProps>;

export interface CellProps {
    pos: Vector;
    size: string;
    children?: ReactNode;
}

export interface ElementState {
    pos: Vector;
    type: BouncelType;
    props: ElementProps;
}
export interface GridProps {
    rows: number;
    cols: number;
    initEltStates: ElementState[];
}

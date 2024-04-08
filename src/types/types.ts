
export type Vector = [number, number];
function vecEquals(v1: Vector, v2: Vector) {
    return v1.every((value, index) => value === v2[index]);
}
// DEFINE BOUNCEL ELEMENTS

export enum BouncelType {
    EMPTY,
    BALL,
    WALL,
    USER,
}

export type ID = string;

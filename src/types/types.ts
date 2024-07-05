// GPL-3.0-or-later © Copyleft 2024 momothain, Morgann Thain
import * as yup from 'yup';
// pos
export interface Bounds {
    rows: number, cols: number
}
// 
// 
export type Vector = [number, number];
export function vecEquals(v1: Vector, v2: Vector) {
    return v1.every((value, index) => value === v2[index]);
}
// 
export type Position = Vector
export class InvalidPositionError extends Error {
    constructor(msg: string = "Invalid Position") {
        super(msg);
        this.name="InvalidPositionError";
    }

}
// 
export function valPosGeneric(p : Position, {rows, cols} : Bounds) {
    if (!(0 <= p[0] && p[0] < rows) || !(0 <= p[1] && p[1] < cols)) {
        throw new InvalidPositionError();
    }
}

export function getPositionSchema({rows, cols} : Bounds) {
    return yup.object({
        x: yup.number().min(0).max(rows - 1),
        y: yup.number().min(0).max(cols - 1),
    });
}
//   
// 
export enum BouncelType {
    EMPTY,
    BALL,
    WALL,
    USER,
}
// 
// 
export type ID = string;
export class IdDoesNotExistError extends Error {
    constructor(message: string = "ID does not exist") {
        super(message);
        this.name = "IdDoesNotExistError";
    }
}

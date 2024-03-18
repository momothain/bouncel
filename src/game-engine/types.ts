// types.ts
export type Vector = {
  x: number
  y: number
}

export enum Velocity {
  POS = -1,
  NONE = 0,
  NEG = 1,
}

export enum GameObjectType {
  NONE = 'empty',
  WALL = 'wall',
  BALL = 'ball',
  USER = 'user'
}

export type GID = [GameObjectType, number]

export interface GameObject {
  id: GID
  type: GameObjectType
  position: Vector
  velocity: Velocity
  moveInterval: number
  moveCountdown: number
  gravity: number
  elasticity: number
}

export interface GameComponentProps {
  id: GID
  position: Vector
  moveCountdown: number
}

export type GridState = GameComponentProps[][]

export type GridSize = [number, number]
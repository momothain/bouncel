// GameEngine.ts
import { GID, GameObjectType as TYPE, Vector, Velocity, GameObject, GridSize, GridState } from "./types"

export class GameEngine {
  private gridSize: GridSize = [12, 12]
  private objects: GridState = []
  private velocities: Map<string, Vector> = new Map()

  addObject = (type: TYPE, props: any) => {
    const obj = createGameObject(type, props)
    this.objects.push(obj)
    this.velocities.set(obj.id, { x: 0, y: 0 })
  }

  updateVelocity = (id: string, velocity: Vector) => {
    this.velocities.set(id, velocity)
  }

  update = (delta: number) => {
    this.objects.forEach((obj) => {
      const velocity = this.velocities.get(obj.id)!
      // Update object position based on velocity and delta
      // Check for collisions
      // Update velocities for next frame
    })
  }
}

class Ball implements GameObject {
  type = TYPE.BALL
  id: string
  position: Vector
  velocity: Velocity
  moveInterval: number
  moveCountdown: number
  gravity: number
  elasticity: number

  constructor(
    id: string,
    position: Vector,
    velocity: Velocity,
    moveInterval: number,
    moveCountdown: number,
    gravity: number,
    elasticity: number
  ) {
    this.id = id
    this.position = position
    this.velocity = velocity
    this.moveInterval = moveInterval
    this.moveCountdown = moveCountdown
    this.gravity = gravity
    this.elasticity = elasticity
  }

}


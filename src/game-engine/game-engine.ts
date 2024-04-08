import { BouncelType, Vector } from "@/types/types";

interface ObjectState {
  id: string;
  pos: Vector;
  vel: Vector; // Should velocity be a Position type or should there be a separate Velocity type?
  mass: boolean; // Should mass be a boolean?
}

interface EngineProps {
  rows: number;
  cols: number;
  initObjStates?: ObjectState[];
}

export class Engine {
  private rows: number;
  private cols: number;
  private objStates: ObjectState[];
  private velocities: Map<string, Vector> = new Map(); // Assuming Position is correct for velocity

  constructor({ rows, cols, initObjStates }: EngineProps) {
    this.rows = rows;
    this.cols = cols;
    if (initObjStates) {
      this.objStates = initObjStates;
    } else {
      this.objStates = []
    }
    // Initialize objects or other properties as needed
  }
  
  instantiateObject(type: BouncelType, props: ObjectState) {
    switch (type) {
      case BALL:
        
        break;
    
      default:
        break;
    }

  }
  addObject(type: TYPE, props: any) { // TYPE needs to be defined, and props should have a type
    const obj = createGameObject(type, props);
    this.objStates.push(obj);
    this.velocities.set(obj.id, { x: 0, y: 0 });
  }

  updateVelocity(id: string, velocity: Vector) { // Ensure Position is the right type for velocity
    this.velocities.set(id, velocity);
  }

  update(delta: number) {
    this.objStates.forEach((obj) => {
      const velocity = this.velocities.get(obj.id)!;
      // Update object position based on velocity and delta
      // Check for collisions
      // Update velocities for next frame
    });
  }
}

// Assuming Ball and other types like TYPE, GameObject are defined elsewhere

// GPL-3.0-or-later © Copyleft 2024 momothain, Morgann Thain
import Ball from "@/components/Ball";
import { ElementProps } from "@/types/element-types";
import { BouncelType, Bounds, ID, IdDoesNotExistError, Position, Vector, valPosGeneric } from "@/types/types";
const { EMPTY, BALL, WALL, USER } = BouncelType;

interface ObjectState {
    id: string;
    pos: Vector;
    vel: Vector; 
    mass: boolean;
}

interface EngineProps {
    bounds : Bounds;
    initObjStates?: ObjectState[];
}

export class Engine {
    private bounds: Bounds;
    private objStates: ObjectState[];
    private idObjMap: Map<ID, ObjectState>;

    constructor({ bounds, initObjStates }: EngineProps) {
        this.bounds = bounds;
        if (initObjStates) {
            this.objStates = initObjStates;
            this.idObjMap = new Map(this.objStates.map((st) => [st.id, st]));
        } else {
            this.objStates = [];
            this.idObjMap = new Map();
        }
    }
        
    valPos(p: Position) {
      valPosGeneric(p, this.bounds);
    }
    
    Pos(p: Position) {
      this.valPos(p);
      return p;
    }
    nextPos(pos: Position, vel: Vector) {
      return this.Pos([pos[0] + vel[0], pos[1] + vel[1]])
    }


    getObjectOrThrow(id: ID): ObjectState {
      const o = this.idObjMap.get(id);
      if (!o) {
          throw new IdDoesNotExistError();
      }
      return o;
  }

    // one tick
    moveObject(obj: ObjectState) {
      const pos: Vector = this.nextPos(obj.pos, obj.vel);
      obj.pos = pos;
      return true; 
    }
    moveId(id: ID, vel: Vector) {
        const obj = this.getObjectOrThrow(id);
        // ∆
        const pos: Vector = this.nextPos(obj.pos, vel);
        obj.pos = pos;
        return true; 
      }

    renderObject(type: BouncelType, state: ObjectState) {
        switch (type) {
            case EMPTY:
                return null;
            case BALL:
                const props: ElementProps = { id: state.id };
                return Ball(props);
            case WALL:
                break;
            case USER:
                break;
            default:
                throw new TypeError();
        }
    }

    addObject(state: ObjectState) {
        // TYPE needs to be defined, and props should have a type
        this.objStates.push(state);
        this.idObjMap.set(state.id, state);
    }

    update(ticks: number) {
        this.objStates.forEach((obj) => {
            // Update object position based on velocity and delta
            const nextPos = this.nextPos(obj.pos, obj.vel);
            // Check for collisions
            // const obstacle = this.cells[nextPos[0], nextPos[1]]
            // if (obstacle) {
            //   // collide changes velocities to apply 
            // //   also moves them and ends their tick turn?
            //   obj.collide(obstacle);
            // } else {
            //   this.moveObject(obj)
            // }
        });
    }
}

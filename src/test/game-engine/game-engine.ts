import { Engine } from '@/game-engine/game-engine'
const engine = new Engine()
export default engine

function createGameObject(type: TYPE, props: any) {
    if (type == TYPE.BALL) {

    } else if (type == TYPE.WALL) {

    } else {

    }
}
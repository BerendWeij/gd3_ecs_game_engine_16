import Rectangle from './Rectangle';
import MovingEntity from './MovingEntity';

export default class Main {

    constructor(){
        console.log("base game engine is running");

        let testEntity = new MovingEntity(50, 100, 200, 0, "Hond", {x: 0, y: 1, z: 0});

        console.log(testEntity);
    }

}
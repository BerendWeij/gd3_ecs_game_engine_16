import Rectangle from './Rectangle';
import MovingEntity from './MovingEntity';
import RenderSystem from './RenderSystem';

export default class Main {

    constructor(){
        console.log("base game engine is running");

        let renderSystem = new RenderSystem('#world-container');

        let testEntity = new MovingEntity(-600, 0, 200, 0, "ferrari", {x: 1, y: 0, z: 0});;

        renderSystem.addEntity(testEntity);

        console.log(renderSystem);
    }

}
import Rectangle from './Rectangle';
import MovingEntity from './MovingEntity';
import RenderSystem from './RenderSystem';

export default class Main {

    constructor(){
        console.log("base game engine is running");

        let testEntity = new MovingEntity(50, 100, 200, 0, "ferrari", {x: 0, y: 1, z: 0});

        let renderSystem = new RenderSystem('#world-container');

        renderSystem.addEntity(testEntity);

        console.log(renderSystem);
    }

}
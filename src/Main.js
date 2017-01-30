import Entity from './Entity';
import MovingEntity from './MovingEntity';
import RenderSystem from './RenderSystem';

export default class Main {

    constructor(){
        console.log("base engine running");

        let renderSystem = new RenderSystem();

        let car = new MovingEntity(-800, 200, 14, 15, 'ferrari', {x: 1, y: 0, z:0});

        renderSystem.add(car);
    }

}
import Entity from './Entity';
import MovingEntity from './MovingEntity';
import RenderSystem from './RenderSystem';

export default class Main {

    constructor(){
        console.log("base engine running");

        let renderSystem = new RenderSystem();

        let rock = new Entity(10, 10, 200, 0, 'rock');
        let chair = new Entity(67, 23, 150, 10, 'chair');

        let car = new MovingEntity(-800, 13, 14, 0, 'ferrari', {x: 1, y: 0, z:0});

        renderSystem.add(car);
    }

}
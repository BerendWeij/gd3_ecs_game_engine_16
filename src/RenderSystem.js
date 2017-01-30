export default class RenderSystem {

    constructor(containerId){

        this._entities = [];
        this._counter = 0;
        this._container = document.querySelector(containerId);

    }

    addEntity(newEntity){
        let entityElement = document.createElement('DIV');
        let currentName = 'entity_' + this._counter;

        entityElement.id = currentName;

        entityElement.classList.add('entity');
        entityElement.classList.add(newEntity.className);

        this._container.appendChild(entityElement);

        this._entities.push(
            {
                entity: newEntity,
                htmlElement: entityElement
            }
        );

        this._counter++;
    }

    update(){
        
    }

}
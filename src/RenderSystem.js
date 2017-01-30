export default class RenderSystem {

    constructor(containerId) {

        this._entities = [];
        this._counter = 0;
        this._container = document.querySelector(containerId);

        setInterval(() => this.update(), 1000 / 60);


    }

    addEntity(newEntity) {
        let entityElement = document.createElement('DIV');
        let currentName = 'entity_' + this._counter;

        entityElement.id = currentName;

        entityElement.classList.add('entity');
        entityElement.classList.add(newEntity.className);

        this._container.appendChild(entityElement);

        this._entities.push(
            {
                entity : newEntity,
                htmlElement : entityElement
            }
        );

        this._counter++;
    }

    update() {
        this._entities.forEach((currentEntity) => {

            let x = currentEntity.entity.x;
            let y = currentEntity.entity.y;
            let z = currentEntity.entity.z;
            let rotation = currentEntity.entity.rotation;

            currentEntity.htmlElement.style = ` transform:perspective(500px)translate3d(${x}px,${y}px,${z}px) rotate(${rotation}deg);z-index:${z};`;

        });
    }

}
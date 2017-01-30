export default class RenderSystem {

    constructor() {
        console.log('een rendersysteem');

        this._container = document.querySelector("#world-container");

        this.counter = 0;
        this.entities = [];

        setInterval(() => this.update(), 1000/60);

    }

    add(newEntity) {

        let entityName = "entity_" + this.counter;
        let entityElement = document.createElement("DIV");

        entityElement.id = entityName;
        entityElement.classList.add(newEntity.className);
        entityElement.classList.add("entity");

        this.counter++;

        this._container.appendChild(entityElement);

        this.entities.push({
                               htmlElement : entityElement,
                               entity : newEntity
                           });

    }

    update() {

        this.entities.forEach((currentEntity) => {
            let {x, y, z, rotation} = currentEntity.entity;

            currentEntity.htmlElement.style = ` transform:perspective(500px)translate3d(${x}px,${y}px,${z}px) rotate(${rotation}deg);z-index:${z};`;
        });

    }

    /**
     * Get the entities for this rendersystem
     * @returns {Array} the entities for this rendersystem
     */
    get entities() {
        return this._entities;
    }

    /**
     * Set the entities for this rendersystem
     * @param {Array} value - the entities for this rendersystem
     */
    set entities(value) {
        this._entities = value;
    }


}
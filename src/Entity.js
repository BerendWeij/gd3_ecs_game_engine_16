export default class Entity {

    constructor(x = 0, y = 0, z = 0, rotation = 0, className = "") {
        this._x = x;
        this._y = y;
        this._z = z;
        this._rotation = rotation;
        this._className = className;
    }

    /**
     * Get the x position of this Entity
     * @returns {Number} the x position of this Entity
     */
    get x() {
        return this._x;
    }

    /**
     * Set the x position of this Entity
     * @param {Number} value - the x position of this Entity
     */
    set x(value) {
        this._x = value;
    }

    /**
     * Get the y position of this Entity
     * @returns {Number} the y position of this Entity
     */
    get y() {
        return this._y;
    }

    /**
     * Set the y position of this Entity
     * @param {Number} value - the y position of this Entity
     */
    set y(value) {
        this._y = value;
    }

    /**
     * Get the z position of this Entity
     * @returns {Number} the z position of this Entity
     */
    get z() {
        return this._z;
    }

    /**
     * Set the z position of this Entity
     * @param {Number} value - the z position of this Entity
     */
    set z(value) {
        this._z = value;
    }

    /**
     * Get the rotation of this Entity
     * @returns {Number} the rotation of this Entity
     */
    get rotation() {
        return this._rotation;
    }

    /**
     * Set the rotation of this Entity
     * @param {Number} value - the rotation of this Entity
     */
    set rotation(value) {
        this._rotation = value;
    }

    /**
     * Get the className of this Entity
     * @returns {String} the className of this Entity
     */
    get className() {
        return this._className;
    }

    /**
     * Set the className of this Entity
     * @param {String} value - the className of this Entity
     */
    set className(value) {
        this._className = value;
    }


}
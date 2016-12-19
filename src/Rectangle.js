export default class Rectangle {

    constructor(x = 0, y = 0, width = 100, height = 100){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    /**
     * Get the x position of this Rectangle
     * @returns {number} the x position of this Rectangle
     */
    get x() {
        return this._x;
    }

    /**
     * Set the x position of this Rectangle
     * @param {number} value - the x position of this Rectangle
     */
    set x( value ) {
        this._x = value;
    }

    /**
     * Get the y position of this rectangle
     * @returns {number} the y position of this rectangle
     */
    get y() {
        return this._y;
    }

    /**
     * Set the y position of this rectangle
     * @param {number} value - the y position of this rectangle
     */
    set y( value ) {
        this._y = value;
    }

    /**
     * Get the left position of this Rectangle
     * @returns {number} the left position of this Rectangle
     */
    get left() {
        return this.x;
    }

    /**
     * Get the right position of this Rectangle
     * @returns {number} the right position of this Rectangle
     */
    get right() {
        return this.x + this.width;
    }

    /**
     * Get the top position of this Rectangle
     * @returns {number} the top position of this Rectangle
     */
    get top() {
        return this.y;
    }

    /**
     * Get the bottom position of this Rectangle
     * @returns {number} the bottom position of this Rectangle
     */
    get bottom() {
        return this.y + this.height;
    }

    contains(x, y){
        return x > this.left && x < this.right && y > this.top && y < this.bottom;
    }

    static get defaultRectangle(){
        return new Rectangle();
    }

}
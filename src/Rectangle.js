export default class Rectangle {

    constructor(x = 0, y = 0, width = 10, height = 10){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    /**
     * Get the width of this rectangle
     * @returns {number} the width of this rectangle
     */
    get width() {
        return this._width;
    }

    /**
     * Set the width of this rectangle
     * @param {number} value - the width of this rectangle
     */
    set width( value ) {
        this._width = value;
    }

    /**
     * Get the height of this rectangle
     * @returns {number} the height of this rectangle
     */
    get height() {
        return this._height;
    }

    /**
     * Set the height of this rectangle
     * @param {number} value - the height of this rectangle
     */
    set height( value ) {
        this._height = value;
    }

    /**
     * Get the x position of this rectangle
     * @returns {number} the x position of this rectangle
     */
    get x() {
        return this._x;
    }

    /**
     * Set the x position of this rectangle
     * @param {number} value - the x position of this rectangle
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
     * Get the left position of the Rectangle
     * @returns {number} the left position of the Rectangle
     */
    get left() {
        return this.x;
    }

    /**
     * Get the right position of the Rectangle
     * @returns {number} the right position of the Rectangle
     */
    get right() {
        return this.x + this.width;
    }

    /**
     * Get the top position of the Rectangle
     * @returns {number} the top position of the Rectangle
     */
    get top() {
        return this.y;
    }

    /**
     * Get the bottom position of the Rectangle
     * @returns {number} the bottom position of the Rectangle
     */
    get bottom() {
        return this.y + this.height;
    }

    contains(x, y){
        return x > this.left && x < this.right && y > this.top && y < this.bottom;
    }

}
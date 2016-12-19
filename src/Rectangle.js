export default class Rectangle {

    constructor(x = 0, y = 0, width = 10, height = 10){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
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

}
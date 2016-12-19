import Rectangle from './Rectangle';

export default class Main {

    constructor(){
        console.log("main app is running");

        let testRectangle = new Rectangle(10, 10, 50, 50);

        //console.log(testRectangle.contains(2, 20));
        console.log(Rectangle.defaultRectangle);
    }

}
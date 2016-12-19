import Rectangle from './Rectangle';

export default class Main {

    constructor(){
        console.log("main application is running");

        let newRectangle = new Rectangle(5, 5, 100, 100);

        console.log(newRectangle);
    }

}
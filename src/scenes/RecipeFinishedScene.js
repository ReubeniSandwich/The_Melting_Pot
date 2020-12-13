import Phaser from "phaser";

export default class RecipeFinishedScene extends Phaser.Scene {
    
    constructor() {
        super("RecipeFinishedScene");
    }

    init () {
        
    }

    preload() {

    }

    create() {
        const logo = this.add.image(400, 200, "logo").setScale(.3);
    }

    update () {

    }
}
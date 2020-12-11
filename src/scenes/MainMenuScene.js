import Phaser from "phaser";

export default class MainMenuScene extends Phaser.Scene {
    constructor() {
        super("MainMenuScene");
    }

    init () {
        
    }

    preload() {

    }

    create(){

        // important that they start in conjunction... I think... for passign data using event
        this.add.text(20, 20, "Loading game...");
        setTimeout(() => {
            this.scene.start('KitchenScene');
            this.scene.launch('FridgeScene')
          }, 1000);
      }

    update () {

    }
}
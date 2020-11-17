import Phaser from "phaser";

export default class MainMenuScene extends Phaser.Scene {
    constructor() {
        super("MainMenu");
    }

    init () {
        
    }

    preload() {

    }

    create(){

        this.add.text(20, 20, "Loading game...");
        setTimeout(() => {
            this.scene.start('KitchenScene')
          }, 3000);
      }

    update () {

    }
}
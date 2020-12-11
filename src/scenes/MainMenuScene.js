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



        beginGame();

          const beginGame = () => {
            this.add.text(20, 20, "Loading game...");
            setTimeout(() => {
                // important that they start in conjunction... I think... for passing data using event
                this.scene.start('KitchenScene');
                this.scene.launch('FridgeScene')
              }, 1000);
          }
      }

    update () {

    }
}
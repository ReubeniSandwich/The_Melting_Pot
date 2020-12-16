import Phaser from "phaser";

export default class MainMenuScene extends Phaser.Scene {
    constructor() {
        super("MainMenuScene");
    }

    init () {
        
    }

    preload() {

    }

    create() {
      this.cameras.main.fadeIn(1000, 0, 0, 0)
      
      let startButton = this.add.image(400, 500, "startButton").setScale(.4, .3);
      this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#FFFFFF");
      startButton.setInteractive();


      startButton.once("pointerdown", function () {
        this.cameras.main.fadeOut(1000, 0, 0, 0)

        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start('KitchenScene');
            this.scene.launch('FridgeScene');
            this.scene.launch('SinkScene');
        }); 
      }, this);

      }

    update () {

    }
}
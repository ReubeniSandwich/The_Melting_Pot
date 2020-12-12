import Phaser from "phaser";
import logoImg from "../assets/logo.png";
import startButton from "../assets/Done_Button.png"

export default class LoadingScene extends Phaser.Scene {
    constructor() {
        super("LoadingScene");
    }

    init () {
        
    }

    preload() {
        this.load.image("logo", logoImg);
        this.load.image("startButton", startButton);
    }

    create() {
        const logo = this.add.image(400, 200, "logo").setScale(.4, .3);
        let startButton = this.add.image(400, 500, "startButton").setScale(.4, .3);
        // this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#FFFFFF");
        startButton.setInteractive();

        startButton.on("pointerdown", function () {
            this.scene.start('KitchenScene');
            this.scene.launch('FridgeScene');
        }, this);
        
        // this.add.text(20, 20, "Loading game...");
        // setTimeout(() => {
        //     // important that they start in conjunction... I think... for passing data using event
        //     this.scene.start('KitchenScene');
        //     this.scene.launch('FridgeScene')
        //   }, 3000);
      }

    update () {

    }
}
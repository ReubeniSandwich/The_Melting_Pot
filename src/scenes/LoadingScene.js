import Phaser from "phaser";
import logoImg from "../assets/logo.png";
import startButton from "../assets/Done_Button.png"

export default class LoadingScene extends Phaser.Scene {
    constructor() {
        super("LoadingScene");
    }

    init() {

    }

    preload() {
        this.load.image("logo", logoImg);
        this.load.image("startButton", startButton);
    }

    create() {
        const logo = this.add.image(400, 200, "logo").setScale(.3);
        let startButton = this.add.image(400, 500, "startButton").setScale(.4, .3).setInteractive();
        // this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#FFFFFF");

        startButton.once("pointerdown", function () {
            this.cameras.main.fadeOut(1000, 0, 0, 0)
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                this.scene.start('MainMenuScene');
            });
        }, this);

    }

    update() {

    }
}
import Phaser from "phaser";
import logoImg from "../assets/logo.png";
import startButton from "../assets/Start_button.png";
import blurredStove from "../assets/MeltingPotStove_Blur.png";

export default class LoadingScene extends Phaser.Scene {
    constructor() {
        super("LoadingScene");
    }

    init() {

    }

    preload() {
        this.load.image("logo", logoImg);
        this.load.image("startButton", startButton);
        this.load.image("blurredKitchen", blurredStove);
    }

    create() {
        const background = this.add.image(0, 0, "blurredKitchen").setOrigin(0, 0);
        const logo = this.add.image(400, 200, "logo").setScale(.3);
        let startButton = this.add.image(400, 500, "startButton").setScale(.8, .8).setInteractive();
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
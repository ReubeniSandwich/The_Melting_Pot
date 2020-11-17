import Phaser from "phaser";

export default class SinkScene extends Phaser.Scene {
    constructor() {
        super("SinkScene");
    }

    init () {

    }

    preload() {

    }

    create(){
        this.add.text(20, 20, "Playing game", {font: "25px Arial", fill: "yellow"});
      }

    update () {

    }
}

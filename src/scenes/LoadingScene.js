import Phaser from "phaser";

export default class LoadingScene extends Phaser.Scene {
    constructor() {
        super("LoadingScene");
    }

    init () {
        
    }

    preload() {

    }

    create(){
        // this.add.text(20, 20, "Loading game...");
        // setTimeout(() => {
        //     this.scene.start('KitchenScene')
        //   }, 3000);
      }

    update () {

    }
}
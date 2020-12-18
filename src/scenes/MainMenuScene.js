import Phaser from "phaser";
import selectionScreen from "../assets/MeltingPotSelectionScreen.png";
import noodleRecipeButton from "../assets/recipebutton.png";

export default class MainMenuScene extends Phaser.Scene {
    constructor() {
        super("MainMenuScene");
    }

    init () {
        
    }

    preload() {
      this.load.image("selectionBackground", selectionScreen);
      this.load.image("noodleRecipeButton", noodleRecipeButton);
    }

    create() {
      this.cameras.main.fadeIn(1000, 0, 0, 0)

      const selectionBackground = this.add.image(0, 0, "selectionBackground").setOrigin(0, 0);
      let noodleRecipeButton = this.add.image(400, 350, "noodleRecipeButton").setScale(.9, .9).setInteractive();

      noodleRecipeButton.once("pointerdown", function () {
        
        this.cameras.main.fadeOut(1000, 0, 0, 0)
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start('KitchenScene');
        }); 
      }, this);

      }

    update () {

    }
}
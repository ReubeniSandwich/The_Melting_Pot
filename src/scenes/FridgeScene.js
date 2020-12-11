import Phaser from "phaser";

import pastaIngredientImport from "../assets/MeltingPotNoodles.png";
import saltShakerImage from "../assets/MeltingPotSalt.png";
import kitchenSink from "../assets/MeltingPotSinkScreen.png";


export default class FridgeScene extends Phaser.Scene {
  constructor() {
    super('FridgeScene');
  }

  init() {
    this.scene.setVisible(false);
  }

  preload() {
    this.load.image("kitchenSink", kitchenSink);
    this.load.image("pastaIngredient", pastaIngredientImport);
    this.load.image("saltShaker", saltShakerImage);
  }

  create() {

    // OBJECTS ++++++++++++++++
    let pastaIngredient = this.add.image(100, 100, "pastaIngredient").setScale(0.4, 0.4).setInteractive({
      draggable: true
    });
    let saltShaker = this.add.image(200, 100, "saltShaker").setScale(0.4, 0.4).setInteractive({
      draggable: true
    });

    
    // EVENT LISTENERS ++++++++++++++
    
    this.input.on('dragstart', function (pointer, gameObject) {
      gameObject.setTint(0xff0000);
    });

    this.input.on('dragend', function (pointer, gameObject) {
      gameObject.clearTint();

    });

  
    // METHODS / FUNCTIONS ++++++++++++

    // send data across files in real time.
    // params: emitterName is the unique name you give to the emitter, you will use the same name with the data receiver
    // params: data. pass data hwoever you need to in this variable
    const emitData = (emitterName, data) => {
      this.events.emit(emitterName, data);
    }

    // will switch to scene and pause the current one. cAse SenSitive.
    // sceneName: String
    const switchScene = (sceneName) => {
      this.scene.resume(sceneName);
      this.scene.pause();
    }
  }





  update() {

  }
}
    // pastaIngredient.on('pointerdown', function () {
    //   console.log("pasta");
    //   pastaIngredient.setTint(0xff0000);

    // });
import Phaser from "phaser";
import kitchenSink from "../assets/MeltingPotSinkScreen.png";


export default class FridgeScene extends Phaser.Scene {
  constructor() {
    super('FridgeScene');
  }

  init() {
    this.scene.setVisible(false);
  }

  preload() {
    // TODO understand where assets need to be loaded and where they don't need to be
    // this.load.image("kitchenSink", kitchenSink);
  }

  create() {
    const objectArray = [];

    // OBJECTS ++++++++++++++++
    let pastaIngredient = this.add.image(100, 100, "pastaIngredient").setScale(0.4, 0.4).setInteractive({
      draggable: true
    });
    let saltShaker = this.add.image(200, 100, "saltShaker").setScale(0.4, 0.4).setInteractive({
      draggable: true
    });

    let startButton = this.add.image(200, 300, "startButton").setScale(.4, .3).setInteractive();

    pastaIngredient.isSelected = false;
    saltShaker.isSelected = false;

    
    // EVENT LISTENERS ++++++++++++++

    this.input.on('dragstart', function (pointer, gameObject) {
      gameObject.isSelected = !gameObject.isSelected;

      if (gameObject.isSelected === true) {
        gameObject.setTint(0xff0000);
        objectArray.push(gameObject.texture.key);
      } else {
        gameObject.clearTint();
        const index = objectArray.indexOf(gameObject.texture.key);
        objectArray.splice(index, 1);
      }
    });

    this.input.on('dragend', function (pointer, gameObject) {
    });

    startButton.on("pointerdown", function () {
      console.log("Event: startButton Clicked");
      sendData('FRIDGE_DATA', objectArray);
      switchToKitchenScene();
    }, this);
  
    // METHODS / FUNCTIONS ++++++++++++

    // send data across files in real time.
    // params: emitterName is the unique name you give to the emitter, you will use the same name with the data receiver
    // params: data. pass data hwoever you need to in this variable
    const sendData = (emitterName, data) => {
      this.events.emit(emitterName, data);
    }

    // switch to KitchenScene and pause / hide this one
    // send any data before switching.
    // sceneName: String
    const switchToKitchenScene = () => {
      this.scene.resume('KitchenScene');
      this.scene.setVisible(false, 'FridgeScene');
      this.scene.pause();
    }


  }





  update() {

  }
}
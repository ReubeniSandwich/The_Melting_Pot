import Phaser from "phaser";
import cabinetBackground from "../assets/cabinetinside.png";
import doneButton from "../assets/Done_Button.png";

export default class FridgeScene extends Phaser.Scene {
  constructor() {
    super('FridgeScene');
  }

  preload() {
    this.load.image("cabinetBackground", cabinetBackground);
    this.load.image("doneButton", doneButton);
  }

  create() {

    // ++++ OBJECTS ++++
    let cabinetBackground = this.add.image(0, 0, "cabinetBackground").setOrigin(0, 0);
    let finishButton = this.add.image(400, 510, "doneButton").setInteractive();

    let saltShaker = this.add.image(100, 70, "saltShaker").setScale(0.4, 0.4).setInteractive({draggable: true});
    let pepperShaker = this.add.image(200, 170, "pepperShaker").setScale(0.4, 0.4).setInteractive({draggable: true});
    let butter = this.add.image(300, 280, "butterIngredient").setScale(0.4, 0.4).setInteractive({draggable: true});
    let pastaIngredient = this.add.image(400, 350, "pastaIngredient").setScale(0.4, 0.4).setInteractive({draggable: true});
    let plate = this.add.image(500, 160, "plate").setScale(0.5, 0.5).setInteractive({draggable: true});


    saltShaker.isSelected = false;
    pepperShaker.isSelected = false;
    butter.isSelected = false;
    pastaIngredient.isSelected = false;
    

    // ++++ EVENT LISTENERS ++++

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

    const objectArray = [];
    finishButton.on("pointerdown", function () {
      console.log("Event: finishButton Clicked");
      sendData('FRIDGE_DATA', objectArray);
      switchToKitchenScene();
    }, this);


    // ++++ FUNCTIONS ++++

    // send data across files in real time.
    // params: emitterName is the unique name you give to the emitter, you will use the same name with the data receiver
    // params: data to be passed
    const sendData = (emitterName, data) => {
      this.events.emit(emitterName, data);
    }

    // switch to KitchenScene and sleep this scene
    // send any data before switching.
    const switchToKitchenScene = () => {
      this.scene.resume('KitchenScene');
      this.scene.sleep();
    }




  }





  update() {

  }
}
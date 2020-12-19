import Phaser from "phaser";
// import cabinetBackground from "../PLACENAMEHERE.png";

export default class FridgeScene extends Phaser.Scene {
  constructor() {
    super('FridgeScene');
  }

  preload() {
    // this.load.image("cabinetBackground", cabinetBackground);
  }

  create() {

    // ++++ OBJECTS ++++
    // let cabinetBackground = this.add.image(0, 0, "cabinetBackground").setOrigin(0, 0);
    let finishButton = this.add.image(200, 300, "startButton").setScale(.4, .3).setInteractive();

    let saltShaker = this.add.image(100, 100, "saltShaker").setScale(0.4, 0.4).setInteractive({draggable: true});
    let pepperShaker = this.add.image(200, 100, "pepperShaker").setScale(0.4, 0.4).setInteractive({draggable: true});
    let butter = this.add.image(300, 100, "butterIngredient").setScale(0.4, 0.4).setInteractive({draggable: true});
    let pastaIngredient = this.add.image(400, 100, "pastaIngredient").setScale(0.4, 0.4).setInteractive({draggable: true});

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

    this.scene.get('KitchenScene').events.on('KITCHEN_TO_SINK_DATA', function (data) {
      console.log("data sucessfully retrieved from: KITCHEN_TO_SINK_DATA");
      if (data === true && data != null) {
        console.log(data);
        // TODO logic
      }
    });

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
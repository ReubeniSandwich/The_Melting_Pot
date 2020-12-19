import Phaser from "phaser";
import kitchenSink from "../assets/MeltingPotSinkScreen.png";
import pot from "../assets/Pot.png";
import potWater from "../assets/Pot_with_Water.png";
import potBoilingWater from "../assets/Pot_with_Boiling_Water.png";
import BackToStoveTopButton from "../assets/BackToStoveTop_Button.png";
import faucetOn from "../assets/faucet_with_water.png";
import faucetOff from "../assets/faucet_no_water.png";
import waterButton from "../assets/get_water_button.png"
import collander from "../assets/collander.png"

export default class SinkScene extends Phaser.Scene {
  constructor() {
    super("SinkScene");
  }

  init() {
  }

  preload() {
    this.load.image("kitchenSink", kitchenSink);
    this.load.image("pot", pot);
    this.load.image("potWater", potWater);
    this.load.image("potBoilingWater", potBoilingWater);
    this.load.image("buttonBackToStove", BackToStoveTopButton);
    this.load.image("faucetOn", faucetOn);
    this.load.image("faucetOff", faucetOff);
    this.load.image('waterButton', waterButton);
    this.load.image('collander', collander);
  }

  create() {

    // ++++ OBJECTS AND VARIABLES ++++

    let kitchenSink = this.add.image(0, 0, "kitchenSink").setOrigin(0, 0);
    let collander = this.add.image(660, 240, "collander").setScale(0.8, 0.8).setInteractive({draggable: true});
    let pot = this.add.image(660, 240, "pot").setScale(0.8, 0.8).setInteractive({draggable: true});
    let potWater = this.add.image(10, 10, "potWater").setScale(0.8, 0.8).setInteractive({draggable: true}).setVisible(false);
    let potBoilingWater = this.add.image(660, 240, "potBoilingWater").setScale(0.8, 0.8).setInteractive({draggable: true}).setVisible(false);
    let potBoilingWaterPasta = this.add.image(660, 240, "potBoilingWaterPasta").setScale(0.8, 0.8).setInteractive({draggable: true}).setVisible(false);
    // need colander

    let faucetOn = this.add.image(280, 80, "faucetOn").setOrigin(0,0).setVisible(false);
    let faucetOff = this.add.image(280, 80, "faucetOff").setOrigin(0,0);

    let buttonBackToStove = this.add.image(400, 565, "buttonBackToStove").setScale(0.4, 0.4).setInteractive({draggable: false});
    let buttonWater = this.add.image(400, 35, "waterButton").setScale(0.8, 0.8).setInteractive({draggable: false});

    let pastaCooked = this.add.image(200, 300, "pastaCooked").setScale(0.4, 0.4).setInteractive({draggable: true}).setVisible(false);

    let waterFillZone = this.add.zone(330, 350, 120, 120).setRectangleDropZone(120, 120); //zone(x, y, width, height);
    this.input.enableDebug(waterFillZone);

    let self = this;
    let isPotFilledWithWater = false;
    let isWaterFaucetOn = false;
    let isPotInDropZone = false;
    let isCollanderInDropZone = false;


    // ++++ EVENT LISTENERS ++++ 

    buttonWater.on("pointerdown", function () {
      toggleWaterFaucet();
    }, this);

    // event listener when dragging begins
    this.input.on('dragstart', function (pointer, gameObject) {
      gameObject.setTint(0xff0000);
      self.children.bringToTop(gameObject);
      self.children.bringToTop(faucetOff);
      
      //TODO logic to keep the fauce image at the top
    });

    this.input.on('dragleave', function (pointer, gameObject) {
      console.log("dragleave");
      if (gameObject.texture.key === "collander") {
        isCollanderInDropZone = false;
      }

      if (gameObject.texture.key === "potBoilingWaterPasta" || gameObject.texture.key === "potBoilingWater") {
        isPotInDropZone = false;
      }
    });

    // event listener when the dragging ends
    this.input.on('dragend', function (pointer, gameObject) {
      gameObject.clearTint();
    });

    // event listener while object is being dragged
    // this one enables smooth dragging
    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    // Event Listener: Drop
    this.input.on('drop', function (pointer, gameObject, dropZone) {

      if (gameObject.texture.key === "pot") {
        isPotInDropZone = true;
        gameObject.x = dropZone.x
        gameObject.y = dropZone.y;
        fillPotWithWater();
      }
      if (gameObject.texture.key === "collander") {
        isCollanderInDropZone = true;
        gameObject.x = dropZone.x
        gameObject.y = dropZone.y;
      }

      if (gameObject.texture.key === "potBoilingWaterPasta") {
        isPotInDropZone = true;
        gameObject.x = dropZone.x
        gameObject.y = dropZone.y;
      }

      if (gameObject.texture.key === "potBoilingWaterPasta" && isCollanderInDropZone === true) {
        isPotInDropZone = true;
        gameObject.x = dropZone.x
        gameObject.y = dropZone.y;
        drainPasta();
      }


    }, this);

    // listening for data being sent from kitchen
    this.scene.get('KitchenScene').events.on('KITCHEN_TO_SINK_DATA', function (data) {
      console.log("data sucessfully retrieved from: KITCHEN_TO_SINK_DATA");
      if (data === 1 && data != null) {

        potBoilingWaterPasta.setVisible(true);
        potBoilingWater.destroy();
      }
    });

    this.scene.get('KitchenScene').events.on('DELETE_WATER_POT_SINK', function (data) {
      console.log("data sucessfully retrieved from: DELETE_WATER_POT_SINK");
      if (data === true && data != null) {
        potBoilingWater.setVisible(true);
        potWater.destroy();
      }
    });

    // event listener if the object leaves a area while being dragged
    pot.on('dragleave', function (pointer, gameObject, dropZone) {
      console.log("Event: dragleave");
      isPotInDropZone = false;
    });

    // Go Back to Kitchen
    buttonBackToStove.on('pointerdown', function (pointer, localX, localY, event) {
      switchToKitchenScene();
    }, this);
    
    // ++++ FUNCTIONS ++++

    const fillPotWithWater = () => {
      
      if (isPotInDropZone === true && isPotFilledWithWater === false && isWaterFaucetOn === true) {
        console.log("Filled pot with water");
        isPotFilledWithWater = true;
        replacePotWithWaterPot();
        if (isPotFilledWithWater === true) {
          sendData('SINK_DATA', isPotFilledWithWater);
          }
      }
    }

    const toggleWaterFaucet = () => {
      isWaterFaucetOn = !isWaterFaucetOn;

      if (isWaterFaucetOn === true) {
        fillPotWithWater();
        faucetOff.setVisible(false)
        faucetOn.setVisible(true);
      } else {
        faucetOff.setVisible(true)
        faucetOn.setVisible(false);
      }
      // waterAnimation.setVisible(isWaterFaucetOn);
    }

    const replacePotWithWaterPot = () => {
      pot.setVisible(false);
      potWater.setVisible(true);
      potWater.x = pot.x;
      potWater.y = pot.y;
      pot.removeInteractive()
      self.children.bringToTop(potWater);
    }

    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const drainPasta = () => {
      pastaCooked.setVisible(true);
      pastaCooked.x = potBoilingWaterPasta.x
      pastaCooked.y = potBoilingWaterPasta.y
      self.children.bringToTop(pastaCooked);
      potBoilingWaterPasta.setVisible(false);
      potBoilingWaterPasta.removeInteractive();
      sendData('PASTA_IS_DRAINED', true);
    }


    const sendData = (emitterName, data) => {
      this.events.emit(emitterName, data);
    }

    const switchToKitchenScene = () => {
      this.scene.resume('KitchenScene');
      this.scene.sleep('SinkScene');
    }
  }

  update() {

  }
}
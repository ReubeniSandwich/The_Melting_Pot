import Phaser from "phaser";
import kitchenSink from "../assets/MeltingPotSinkScreen.png";
import pot from "../assets/Pot.png";
import potWater from "../assets/Pot_with_Water.png";
import potBoilingWater from "../assets/Pot_with_Boiling_Water.png"
import BackToStoveTopButton from "../assets/BackToStoveTop_Button.png";

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
  }

  create() {
    //rescale this image in image editor
    let kitchenSink = this.add.image(0, 0, "kitchenSink").setOrigin(0, 0).setScale(0.4, 0.4);
    let pot = this.add.image(200, 200, "pot").setScale(0.8, 0.8).setInteractive({
      draggable: true
    });
    let potWater = this.add.image(200, 200, "potWater").setScale(0.4, 0.4).setVisible(false).setInteractive({
      draggable: true
    });
    let potBoilingWater = this.add.image(200, 200, "potBoilingWater").setScale(0.4, 0.4).setInteractive({
      draggable: true
    });
    let buttonBackToKitchen = this.add.image(400, 500, "buttonBackToStove").setScale(0.4, 0.4).setInteractive({
      draggable: false
    });

    let waterFillZone = this.add.zone(400, 200, 120, 120).setRectangleDropZone(120, 120); //zone(x, y, width, height);
    this.input.enableDebug(waterFillZone);

    let self = this;
    let isPotFilledWithWater = false;
    let isWaterFaucetOn = false;
    let isPotInDropZone = false;


    // ++++ EVENT LISTENERS ++++

    this.input.on('dragstart', function (pointer, gameObject) {
      gameObject.setTint(0xff0000);
      self.children.bringToTop(gameObject);
      //TODO logic to keep the fauce image at the top
    });

    this.input.on('dragend', function (pointer, gameObject) {
      gameObject.clearTint();
    });

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    pot.on('dragleave', function (pointer, gameObject, dropZone) {
      console.log("Event: dragleave");
      isPotInDropZone = false;
    });

    this.input.on('drop', function (pointer, gameObject, dropZone) {
      console.log("Event: drop");

      if (gameObject.texture.key === "pot") {
        isPotInDropZone = true;
        gameObject.x = dropZone.x
        gameObject.y = dropZone.y;
        fillPotWithWater();
      }
    }, this);

    buttonBackToKitchen.on('pointerdown', function (pointer, localX, localY, event) {
      console.log("Event: return to kitchen clicked");

      if (isPotFilledWithWater === true) {
        sendData('SINK_DATA', isPotFilledWithWater);
        isPotFilledWithWater = false;
      }
      switchToKitchenScene();
    }, this);


    // ++++ FUNCTIONS ++++


    const toggleWaterFaucet = () => {
      isWaterFaucetOn = !isWaterFaucetOn;
      // TODO waterAnimation.setVisible(isWaterFaucetOn);
    }

    const fillPotWithWater = () => {
      // if (isWaterFaucetOn === true && isPotInDropZone === true) {
      if (isPotInDropZone === true) {
        replacePotWithWaterPot();
        console.log("Filled pot with water");
      } else {
        console.log("DID NOT Fill pot with water");
      }
    }

    const replacePotWithWaterPot = () => {
      isPotFilledWithWater = true;

      pot.setVisible(false);
      pot.disableInteractive();
      
      potWater.setVisible(true);
      potWater.x = pot.x;
      potWater.y = pot.y;
      self.children.bringToTop(potWater);
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
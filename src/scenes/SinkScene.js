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

    init () {
        // this.scene.setVisible(false);
    }

    preload() {
            this.load.image("kitchenSink", kitchenSink);
            this.load.image("pot", pot);
            this.load.image("potWater", potWater);
            this.load.image("potBoilingWater", potBoilingWater);
            this.load.image("buttonBackToStove", BackToStoveTopButton);
    }

    create(){
        // may need to rescale this image in image editor
        let kitchenSink = this.add.image(0, 0, "kitchenSink").setOrigin(0, 0).setScale(0.4, 0.4);
        let pot = this.add.image(200, 200, "pot").setScale(0.8, 0.8).setInteractive({draggable: true});
        let potWater = this.add.image(200, 200, "potWater").setScale(0.4, 0.4).setInteractive({draggable: true});
        let potBoilingWater = this.add.image(200, 200, "potBoilingWater").setScale(0.4, 0.4).setInteractive({draggable: true});

        let buttonBackToStove = this.add.image(400, 500, "buttonBackToStove").setScale(0.4, 0.4).setInteractive({
            draggable: false
          });

        let waterFillZone = this.add.zone(400, 200, 120, 120).setRectangleDropZone(120, 120); //zone(x, y, width, height);
        this.input.enableDebug(waterFillZone);

        let self = this;
        let isPotFilledWithWater = false;
        let isWaterFaucetOn = false;
        let isPotInDropZone = false;
        let button;
        
    // event listener when dragging begins
    this.input.on('dragstart', function (pointer, gameObject) {
        // console.log("Event: dragstart");
        gameObject.setTint(0xff0000);
        self.children.bringToTop(gameObject);
        //TODO logic to keep the fauce image at the top
      });
      
      // event listener when the dragging ends
      this.input.on('dragend', function (pointer, gameObject) {
        // console.log("Event: dragend");
        gameObject.clearTint();
      });
  
      // event listener while object is being dragged
      // this one enables smooth dragging
      this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
        // console.log("Event: drag");
        gameObject.x = dragX;
        gameObject.y = dragY;
      });

    this.input.on('drop', function (pointer, gameObject, dropZone) {
        console.log("Event: drop");

        console.log(gameObject.texture.key);
        if (gameObject.texture.key === "pot") {
            isPotInDropZone = true;
            gameObject.x = dropZone.x
            gameObject.y = dropZone.y;
        }

      }, this);

    // event listener if the object leaves a area while being dragged
    pot.on('dragleave', function (pointer, gameObject, dropZone) {
        console.log("Event: dragleave");
        isPotInDropZone = false;
      });

    //   sendData('SINK_DATA', "SinkData! Successful Sent");

    buttonBackToStove.on('pointerdown', function (pointer, localX, localY, event) {
        console.log("Event: return to kitchen clicked");
        
        if (isPotFilledWithWater === true) {
            sendData('SINK_DATA', isPotFilledWithWater);
        }
        switchToKitchenScene();
      }, this);
  

    const fillPotWithWater = () => {
        console.log("Filled pot with water");

        if (isFaucetOn === true) {
            isPotFilledWithWater = true;
            // TODO drop zone logic.. if in dropzone === true
        }
    }

    const toggleWaterFaucet = () => {
        isWaterFaucetOn = !isWaterFaucetOn;
        // waterAnimation.setVisible(isWaterFaucetOn);
    }
    

    const sendData = (emitterName, data) => {
        this.events.emit(emitterName, data);
    }      
        
        const switchToKitchenScene = () => {
            this.scene.resume('KitchenScene');
            this.scene.sleep('SinkScene');
            // this.scene.setVisible(false, 'SinkScene'); //try out this.scene.key
            // this.scene.pause();
          }
      }

    update () {

    }
}

import Phaser from "phaser";
import kitchenSink from "../assets/MeltingPotSinkScreen.png";
import potWater from "../assets/Pot_with_Water.png";
import potBoilingWater from "../assets/Pot_with_Boiling_Water.png"

export default class SinkScene extends Phaser.Scene {
    constructor() {
        super("SinkScene");
    }

    init () {
        this.scene.setVisible(false);
    }

    preload() {
            this.load.image("kitchenSink", kitchenSink);
            this.load.image("pot", pot);
            this.load.image("potWater", potWater);
            this.load.image("potBoilingWater", potBoilingWater);
    }

    create(){
        // may need to rescale this image in image editor
        let kitchenSink = this.add.image(0, 0, "kitchenSink").setOrigin(0, 0);
        let pot = this.add.image(200, 200, "pot").setScale(0.8, 0.8).setInteractive({draggable: true});
        let potWater = this.add.image(200, 200, "potWater").setScale(0.4, 0.4).setInteractive({draggable: true});
        let potBoilingWater = this.add.image(200, 200, "potBoilingWater").setScale(0.4, 0.4).setInteractive({draggable: true});

        let self = this;

        
    // event listener when dragging begins
    this.input.on('dragstart', function (pointer, gameObject) {
        // console.log("Event: dragstart");
        gameObject.setTint(0xff0000);
        self.children.bringToTop(gameObject);
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

    //   sendData('SINK_DATA', "SinkData! Successful Sent");


        const sendData = (emitterName, data) => {
            this.events.emit(emitterName, data);
          }      
        
        const switchToKitchenScene = () => {
            this.scene.resume('KitchenScene');
            this.scene.setVisible(false, 'SinkScene'); //try out this.scene.key
            this.scene.pause();
          }
      }

    update () {

    }
}

import Phaser from "phaser";

import kitchenTopImage from "../assets/MeltingPotStove_1.png";
import saltShakerImage from "../assets/MeltingPotSalt.png";
import buttonFridge from "../assets/Fridge_Button.png";
import pot from "../assets/Pot.png";



export default class KitchenScene extends Phaser.Scene {

    constructor() {
        super('KitchenScene');
      }

preload () {

  this.load.image("kitchenTop", kitchenTopImage);
  // this.load.image("kitchenSink", "assets/MeltingPotSinkScreen.png");
  // this.load.image("burnerFlame", "assets/MeltingPotBurnerFlame.png");

  // this.load.image("buttonCabinet", "assets/Cabinet_Button.png");
  this.load.image("buttonFridge", buttonFridge);
  // this.load.image("buttonSink", "assets/Sink_Button.png");
  // this.load.image("buttonBackToStove", "assets/BackToStoveTop_Button.png");
  // this.load.image("buttonDone", "assets/Done_Button.png");
  // this.load.image("buttonExit", "assets/Exit_Button.png");

  // this.load.image("butterIngredient", "assets/MeltingPotButter.png");
  this.load.image("saltShaker", saltShakerImage);
  // this.load.image("pepperShaker", "assets/MeltingPotPepper.png");
  // this.load.image("pastaIngredient", "assets/MeltingPotNoodles.png");
  // this.load.image("pastaCooked", "assets/MeltingPotNoodlesCooked.png");
  // this.load.image("pan", "assets/Pot.png");
  this.load.image("pot", pot);
  // this.load.image("potWater", "assets/Pot_with_Water.png");
  // this.load.image("potWaterNoodles", "assets/Pot_with_Water_and_Raw_Noods.png");
  // this.load.image("potBoilingWater", "assets/Pot_with_Boiling_Water.png");

  // this.load.image("clover", "assets/clover.png")

  // this.load.image("", "assets/");

}

create () {

  let self = this;

  let kitchenTop = this.add.image(0, 0, "kitchenTop").setScale(0.47, 0.4).setOrigin(0, 0);    
  // let kitchenSink =this.add.image(0, 0, "kitchenSink").setScale(0.47, 0.4).setOrigin(0, 0);
  // let buttonDone = this.add.image(200, 200, "buttonDone").setScale(0.4, 0.4).setInteractive({draggable: true});
  // let buttonExit = this.add.image(200, 200, "buttonExit").setScale(0.4, 0.4).setInteractive({draggable: true});
  // let buttonCabinet = this.add.image(200, 200, "buttonCabinet").setScale(0.4, 0.4).setInteractive({draggable: true});

  // testing fridge overlay
  let buttonFridge = this.add.image(200, 500, "buttonFridge").setScale(0.4, 0.4).setInteractive({draggable: false});

  // let pan = this.add.image(200, 225, "pan").setScale(0.4, 0.4).setInteractive({draggable: true});
  let pot = this.add.image(200, 200, "pot").setScale(0.8, 0.8).setInteractive({draggable: true});
  // let potBoilingWater = this.add.image(200, 200, "potBoilingWater").setScale(0.4, 0.4).setInteractive({draggable: true});
  // let potWater = this.add.image(200, 200, "potWater").setScale(0.4, 0.4).setInteractive({draggable: true});

  // let butter = this.add.image(200, 200, "butterIngredient").setScale(0.4, 0.4).setInteractive({draggable: true});
  let saltShaker = this.add.image(200, 200, "saltShaker").setScale(0.4, 0.4).setInteractive({draggable: true});
  // let pepperShaker = this.add.image(200, 200, "pepperShaker").setScale(0.4, 0.4).setInteractive({draggable: true})
  // let pastaIngredient = this.add.image(200, 200, "pastaIngredient").setScale(0.4, 0.4).setInteractive({draggable: true});
  // let pastaCooked = this.add.image(200, 200, "pastaCooked").setScale(0.4, 0.4).setInteractive({draggable: true});

  // let clover = this.add.image(700, 320, "clover").setInteractive({draggable: true})


  let cookZoneTopLeft = this.add.zone(500, 220, 100, 100).setRectangleDropZone(100, 100); //zone(x, y, width, height);
  let cookZoneTopRight = this.add.zone(700, 220, 100, 100).setRectangleDropZone(100, 100); //zone(x, y, width, height);
  let cookZoneBottomLeft = this.add.zone(500, 420, 100, 100).setRectangleDropZone(100, 100); //zone(x, y, width, height);
  let cookZoneBottomRight = this.add.zone(700, 420, 100, 100).setRectangleDropZone(100, 100); //zone(x, y, width, height);
 

  // cookZoneTopRight.input.dropZone = false;
  // cookZoneBottomLeft.input.dropZone = false;
  // cookZoneBottomRight.input.dropZone = false;

// This is just some ugly code that makes the yellow square
  var graphics = this.add.graphics();
  graphics.lineStyle(6, 0xffff00);
  graphics.strokeRect(cookZoneTopLeft.x - cookZoneTopLeft.input.hitArea.width / 2, cookZoneTopLeft.y - cookZoneTopLeft.input.hitArea.height / 2, cookZoneBottomLeft.input.hitArea.width, cookZoneBottomLeft.input.hitArea.height);
  
 
  // Scene1
 

 // Scene2
 

  let x = 0;
  buttonFridge.on('pointerdown', function(pointer, localX, localY, event){
    // ...
    console.log("howdy partner");
    // this.scene.start('FridgeScene');
    // this.events.emit('myEvent', x);
    // var emitter = new Phaser.Events.EventEmitter();
    // this.scene.events.emit('playerData', x);

    x++;
    console.log(x);

    // // how data is passed
    // // this.emitter= EventsCenter.getInstance();
    // // this.emitter.emit("MY_EVENT","String_Data")
    // this.events.emit('KITCHEN_INGREDIENT_EVENT', x + " Passed Data From Kitchen To Fridge");

        //event emitter listener 
        this.scene.get('FridgeScene').events.on('KITCHEN_INGREDIENT_EVENT', function (object) {
          updateCount(object)
        });

        function updateCount(object) {
          console.log("updateCount function reached! " + object);
        }

    console.log(this.scene.isVisible('FridgeScene'));
    if (!this.scene.isVisible('FridgeScene')) {
      this.scene.setVisible(true, 'FridgeScene');
      this.scene.pause();
    }

  }, this);
    
  // onResume
  // Data might be passed here, try putting it in the function?
  this.scene.get(this).events.on('resume', (data) => {
    // this.textObj.setText(data.someMath.toString());
    console.log(data);
  });
  //currently does not seem to pass data


// });

  // Object Dragging Logic
  this.input.on('dragstart', function (pointer, gameObject) {
      gameObject.setTint(0xff0000);
      self.children.bringToTop(gameObject);
  });

  this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
      // Smooth movement
      // console.log (`X: ${dragX} | Y: ${dragY}`);
      gameObject.x = dragX;
      gameObject.y = dragY;
  });

  this.input.on('dragend', function (pointer, gameObject) {
      gameObject.clearTint();
  });

  this.input.on('dragenter', function (pointer, gameObject, dropZone) {
      console.log("drag enter");
      graphics.clear();
      graphics.lineStyle(6, 0x00ffff);
      graphics.strokeRect(cookZoneTopLeft.x - cookZoneTopLeft.input.hitArea.width / 2, cookZoneTopLeft.y - cookZoneTopLeft.input.hitArea.height / 2, cookZoneBottomLeft.input.hitArea.width, cookZoneBottomLeft.input.hitArea.height);
  });


  this.input.on('dragleave', function (pointer, gameObject, dropZone) {
      console.log("drag leave");
      console.log(this.x);
      
      graphics.clear();
      graphics.lineStyle(6, 0xffff00);
      graphics.strokeRect(cookZoneTopLeft.x - cookZoneTopLeft.input.hitArea.width / 2, cookZoneTopLeft.y - cookZoneTopLeft.input.hitArea.height / 2, cookZoneBottomLeft.input.hitArea.width, cookZoneBottomLeft.input.hitArea.height);
  });

  //handles if item is "dropped in dropzone"
  this.input.on('drop', function (pointer, gameObject, dropZone) {
      console.log("Item Dropped into DropZone");
      gameObject.x = dropZone.x
      gameObject.y = dropZone.y;
      
      //makes the object 'stuck'
      // gameObject.input.enabled = false;
});

this.input.on('dragend', function (pointer, gameObject, dropped) {

  // Moves the object back if it was not put into drop zone
  // if (!dropped)
  // {
  //     gameObject.x = gameObject.input.dragStartX;
  //     gameObject.y = gameObject.input.dragStartY;
  // }

  graphics.clear();
  graphics.lineStyle(6, 0xffff00);
  graphics.strokeRect(cookZoneTopLeft.x - cookZoneTopLeft.input.hitArea.width / 2, cookZoneTopLeft.y - cookZoneTopLeft.input.hitArea.height / 2, cookZoneBottomLeft.input.hitArea.width, cookZoneBottomLeft.input.hitArea.height);
});

}

update ()
{

}
}
import Phaser, { GameObjects } from "phaser";

import pastaIngredientImport from "../assets/MeltingPotNoodles.png";
import kitchenTopImage from "../assets/MeltingPotStove_1.png";
import saltShakerImage from "../assets/MeltingPotSalt.png";
import buttonFridge from "../assets/Fridge_Button.png";
import pot from "../assets/Pot.png";
import burnerFlame from "../assets/MeltingPotBurnerFlame.png";
import buttonSink from "../assets/Sink_Button.png";



export default class KitchenScene extends Phaser.Scene {

  constructor() {
    super('KitchenScene');
  }

  init () {
  
  }

  preload() {

    this.load.image("kitchenTop", kitchenTopImage);
    // this.load.image("kitchenSink", "assets/MeltingPotSinkScreen.png");
    this.load.image("burnerFlame", burnerFlame);

    // this.load.image("buttonCabinet", "assets/Cabinet_Button.png");
    this.load.image("buttonFridge", buttonFridge);
    this.load.image("buttonSink", buttonSink);
    // this.load.image("buttonBackToStove", "assets/BackToStoveTop_Button.png");
    // this.load.image("buttonDone", "assets/Done_Button.png");
    // this.load.image("buttonExit", "assets/Exit_Button.png");

    // this.load.image("butterIngredient", "assets/MeltingPotButter.png");
    this.load.image("saltShaker", saltShakerImage);
    // this.load.image("pepperShaker", "assets/MeltingPotPepper.png");
    this.load.image("pastaIngredient", pastaIngredientImport);
    // this.load.image("pastaCooked", "assets/MeltingPotNoodlesCooked.png");
    // this.load.image("pan", "assets/Pot.png");
    this.load.image("pot", pot);
    // this.load.image("potWater", "assets/Pot_with_Water.png");
    // this.load.image("potWaterNoodles", "assets/Pot_with_Water_and_Raw_Noods.png");
    // this.load.image("potBoilingWater", "assets/Pot_with_Boiling_Water.png");
  }

  create() {
    this.cameras.main.fadeIn(1000, 0, 0, 0);

    let kitchenTop = this.add.image(0, 0, "kitchenTop").setOrigin(0, 0);
    let burnerFlame = this.add.image(400, 428, "burnerFlame").setScale(0.4, 0.4).setVisible(false);
    // let kitchenSink =this.add.image(0, 0, "kitchenSink").setScale(0.47, 0.4).setOrigin(0, 0);
    // let buttonDone = this.add.image(200, 200, "buttonDone").setScale(0.4, 0.4).setInteractive({draggable: true});
    // let buttonExit = this.add.image(200, 200, "buttonExit").setScale(0.4, 0.4).setInteractive({draggable: true});
    // let buttonCabinet = this.add.image(200, 200, "buttonCabinet").setScale(0.4, 0.4).setInteractive({draggable: true});

    // testing fridge overlay
    let buttonFridge = this.add.image(200, 500, "buttonFridge").setScale(0.4, 0.4).setInteractive({
      draggable: false
    });

    let buttonSink = this.add.image(700, 500, "buttonSink").setScale(0.4, 0.4).setInteractive({
      draggable: false
    });
    // let pan = this.add.image(200, 225, "pan").setScale(0.4, 0.4).setInteractive({draggable: true});
    let pot = this.add.image(200, 200, "pot").setScale(0.8, 0.8).setInteractive({draggable: true});
    // let potBoilingWater = this.add.image(200, 200, "potBoilingWater").setScale(0.4, 0.4).setInteractive({draggable: true});
    // let potWater = this.add.image(200, 200, "potWater").setScale(0.4, 0.4).setInteractive({draggable: true});

    // let butter = this.add.image(200, 200, "butterIngredient").setScale(0.4, 0.4).setInteractive({draggable: true});
    let saltShaker = this.add.image(200, 200, "saltShaker").setScale(0.4, 0.4).setInteractive({
      draggable: true}).setVisible(false);
    // let pepperShaker = this.add.image(200, 200, "pepperShaker").setScale(0.4, 0.4).setInteractive({draggable: true})
    let pastaIngredient = this.add.image(200, 400, "pastaIngredient").setScale(0.4, 0.4).setInteractive({
      draggable: true}).setVisible(false);
    // let pastaCooked = this.add.image(200, 200, "pastaCooked").setScale(0.4, 0.4).setInteractive({draggable: true});

    let stoveButtonBottomLeft = this.add.image(730, 200, "startButton").setScale(.2, .3).setInteractive();

    let cookZoneTopLeft = this.add.zone(405, 228, 120, 130).setRectangleDropZone(120, 130); //zone(x, y, width, height);
    let cookZoneBottomLeft = this.add.zone(406, 430, 120, 130).setRectangleDropZone(120, 130); //zone(x, y, width, height);
    let cookZoneTopRight = this.add.zone(570, 228, 120, 130).setRectangleDropZone(120, 130); //zone(x, y, width, height);
    let cookZoneBottomRight = this.add.zone(572, 430, 120, 130).setRectangleDropZone(120, 130); //zone(x, y, width, height);
    this.input.enableDebug(cookZoneBottomLeft);
    this.input.enableDebug(cookZoneBottomRight);
    this.input.enableDebug(cookZoneTopLeft);
    this.input.enableDebug(cookZoneTopRight);
    this.input.enableDebug(pastaIngredient);

    cookZoneTopLeft.isActive = false;
    cookZoneBottomLeft.isActive = false;
    cookZoneTopRight.isActive = false;
    cookZoneBottomRight.isActive = false;

    let self = this;

    // EVENT LISTENERS ++++++++++++++

    stoveButtonBottomLeft.on('pointerdown', function () {
      cookZoneBottomLeft.isActive = !cookZoneBottomLeft.isActive;
      console.log("Event: stoveButtonBottomLeft: isActive: " + cookZoneBottomLeft.isActive);

      if (cookZoneBottomLeft.isActive === true) {
        stoveButtonBottomLeft.setTint(0xff0001);
        burnerFlame.setVisible(true);
      } else {
        stoveButtonBottomLeft.clearTint();
        burnerFlame.setVisible(false);
      }
      // TODO fire animation
    }, this);


    // event listener for sent data from FridgeScene
    this.scene.get('FridgeScene').events.on('FRIDGE_DATA', function (data) {
      console.log("data sucessfully retrieved from: FRIDGE_DATA");
      console.log(data);

      // begging to be but inside a function
      if (data != null || data.length >= 0) {
      data.forEach(objectKey => {
        console.log(objectKey);
        if (pastaIngredient.texture.key === objectKey) {
          pastaIngredient.setVisible(true);
        } 
        if (saltShaker.texture.key === objectKey) {
          saltShaker.setVisible(true);
        }
      });
    }
    
    });

    // event listener for sent data fron SinkScene
    this.scene.get('SinkScene').events.on('SINK_DATA', function (data) {
      console.log("data sucessfully retrieved from: SINK_DATA");
      console.log(data);
    });

    console.log(this.scene.isSleeping('SinkScene'));
    // possible way to interate through for the fridge scene so that you don't 
    // have to specify a bunch of hard-coded if statements for making them visible.
    // console.log(self.children);
   
    // resume event listener
    this.scene.get(this).events.on('resume', function () {
      console.log("Event: onResume");
    });

    // When the fridge is clicked, switch to that scene.
    buttonFridge.on('pointerdown', function (pointer, localX, localY, event) {
      console.log("Event: buttonFridge: clicked");
      switchToFridgeScene();
    }, this);

    // When the fridge is clicked, switch to that scene.
    buttonSink.on('pointerdown', function (pointer, localX, localY, event) {
      console.log("Event: buttonSink: clicked");
      switchToSinkScene();
    }, this);

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

     // event listener if the object enters a area while being dragged
    this.input.on('dragenter', function (pointer, gameObject, dropZone) {
      // console.log("Event: dragenter");
    });


    // event listener if the object leaves a area while being dragged
    this.input.on('dragleave', function (pointer, gameObject, dropZone) {
      // console.log("Event: dragleave");
    });

    //event listener if item is dropped into dropzone
    this.input.on('drop', function (pointer, gameObject, dropZone) {
      gameObject.x = dropZone.x
      gameObject.y = dropZone.y;
    });


    // FUNCTIONS / METHODS +++++++++++++++

    // setTimer(5000);

    // Read into callback functions, probably what is needed here.
    function setTimer(timeAmount) {
      setTimeout(function() { 
        console.log("hello, you put timer for: " + timeAmount + "ms"); }, timeAmount);
    }



    // will switch to FridgeScene and pause the kitchen.
    // sceneName: String
    const switchToFridgeScene = () => {
      this.scene.launch('FridgeScene');
      // this.scene.resume('FridgeScene');
      // this.scene.setVisible(true, 'FridgeScene');
      this.scene.pause();
    }

    const switchToSinkScene = () => {
      
      console.log(this.scene.isSleeping('SinkScene'));
      if (this.scene.isSleeping('SinkScene') === true) {
        this.scene.wake('SinkScene');
      } else {
        this.scene.launch('SinkScene');
      }
      // this.scene.setVisible(true, 'SinkScene');
      // this.scene.pause();
    }
  }

  update() {

  }
}




// this.input.on('dragend', function (pointer, gameObject, dropped) {

  // Moves the object back if it was not put into drop zone
  // if (!dropped)
  // {
  //     gameObject.x = gameObject.input.dragStartX;
  //     gameObject.y = gameObject.input.dragStartY;
  // }


        //makes the object 'stuck'
      // gameObject.input.enabled = false;

          // onResume
    // Data might be passed here, try putting it in the function?
    // What's probably happening here is that the other scene is not on the same js file. so when the on resume is started up
  //  it's not catching that data because it's in ANOTHER js file.
    // this.scene.get(this).events.on('resume', (data) => {
      // this.textObj.setText(data.someMath.toString());
      // console.log(data);
    // });

    // resume event listener
        // this.scene.get(this).events.on('resume', () => {
//          }

 // This is just some ugly code that makes the yellow square
// var graphics = this.add.graphics();
// graphics.lineStyle(6, 0xffff00);
// graphics.strokeRect(cookZoneTopLeft.x - cookZoneTopLeft.input.hitArea.width / 2, cookZoneTopLeft.y - cookZoneTopLeft.input.hitArea.height / 2, cookZoneBottomLeft.input.hitArea.width, cookZoneBottomLeft.input.hitArea.height);

// graphics.clear();
// graphics.lineStyle(6, 0xffff00);
// graphics.strokeRect(cookZoneTopLeft.x - cookZoneTopLeft.input.hitArea.width / 2, cookZoneTopLeft.y - cookZoneTopLeft.input.hitArea.height / 2, cookZoneBottomLeft.input.hitArea.width, cookZoneBottomLeft.input.hitArea.height);


    // cookZoneTopRight.input.dropZone = false;
    // cookZoneBottomLeft.input.dropZone = false;
    // cookZoneBottomRight.input.dropZone = false;


        // in progress, need a way to use this data
    // ensure that the sendData uses the same emitterName. cAse sEnsiTivE
    // param: emitterName : String
    // const receiveData = (emitterName) => {
    //   this.scene.get('FridgeScene').events.once(emitterName, function (data) {
    //     console.log("data sucessfully retrieved from: " + emitterName);
    //     console.log(data);
    //     return data;
    //   });

    //   }
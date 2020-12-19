import Phaser, { GameObjects } from "phaser";

import pastaIngredientImport from "../assets/MeltingPotNoodles.png";
import kitchenTopImage from "../assets/MeltingPotStove_1.png";
import saltShakerImage from "../assets/MeltingPotSalt.png";
import buttonFridge from "../assets/Fridge_Button.png";
import pot from "../assets/Pot.png";
import burnerFlame from "../assets/MeltingPotBurnerFlame.png";
import buttonSink from "../assets/Sink_Button.png";
import potWater from "../assets/Pot_with_Water.png";
import pepperShaker from "../assets/MeltingPotPepper.png";
import butterIngredient from "../assets/MeltingPotButter.png";
import potWaterNoodles from "../assets/Pot_with_Water_and_Raw_Noods.png";
import potBoilingWater from "../assets/Pot_with_Boiling_Water.png";
import cabinetButton from "../assets/Cabinet_Button.png";
import pastaCooked from "../assets/MeltingPotNoodlesCooked.png";
import potBoilingWaterPasta from "../assets/boilingnnnodles.png"
import plate from "../assets/Plate1.png"



export default class KitchenScene extends Phaser.Scene {

  constructor() {
    super('KitchenScene');
  }

  init () {
  
  }

  preload() {

    this.load.image("kitchenTop", kitchenTopImage);
    this.load.image("burnerFlame", burnerFlame);

    this.load.image("buttonFridge", buttonFridge);
    this.load.image("buttonSink", buttonSink);
    this.load.image("buttonCabinet", cabinetButton);

    this.load.image("plate", plate);
    this.load.image("pot", pot);
    this.load.image("potWater", potWater);
    this.load.image("potWaterNoodles", potWaterNoodles);
    this.load.image("potBoilingWater", potBoilingWater);
    this.load.image("potBoilingWaterPasta", potBoilingWaterPasta);

    this.load.image("saltShaker", saltShakerImage);
    this.load.image("pepperShaker", pepperShaker);
    this.load.image("butterIngredient", butterIngredient);
    this.load.image("pastaIngredient", pastaIngredientImport);

    this.load.image("pastaCooked", pastaCooked);
  }

  create() {
    this.cameras.main.fadeIn(1000, 0, 0, 0);

    let kitchenTop = this.add.image(0, 0, "kitchenTop").setOrigin(0, 0);
    let buttonFridge = this.add.image(90, 80, "buttonCabinet").setScale(0.3, 0.3).setInteractive({draggable: false});
    let buttonSink = this.add.image(500, 570, "buttonSink").setScale(0.4, 0.4).setInteractive({draggable: false});
    
    let plate = this.add.image(200, 200, "plate").setScale(0.5, 0.5).setInteractive({draggable: true}).setVisible(false);
    let pot = this.add.image(200, 200, "pot").setScale(0.8, 0.8).setInteractive({draggable: true});
    let potWater = this.add.image(200, 200, "potWater").setScale(0.8, 0.8).setInteractive({draggable: true}).setVisible(false);
    let potBoilingWater = this.add.image(200, 200, "potBoilingWater").setScale(0.8, 0.8).setInteractive({draggable: true}).setVisible(false);
    let potBoilingWaterPasta = this.add.image(200, 200, "potBoilingWaterPasta").setScale(0.8, 0.8).setInteractive({draggable: true}).setVisible(false);
    
    let butter = this.add.image(150, 400, "butterIngredient").setScale(0.4, 0.4).setInteractive({draggable: true}).setVisible(false);
    let pepperShaker = this.add.image(150, 450, "pepperShaker").setScale(0.4, 0.4).setInteractive({draggable: true}).setVisible(false);
    let saltShaker = this.add.image(260, 400, "saltShaker").setScale(0.4, 0.4).setInteractive({draggable: true}).setVisible(false);
    let pastaIngredient = this.add.image(250, 450, "pastaIngredient").setScale(0.4, 0.4).setInteractive({draggable: true}).setVisible(false);
    
    let pastaCooked = this.add.image(200, 400, "pastaCooked").setScale(0.4, 0.4).setInteractive({draggable: true}).setVisible(false);
    
    let stoveButtonBottomLeft = this.add.image(670, 210, "startButton").setScale(.2, .3).setOrigin(0, 0).setInteractive();
    // let stoveButtonTopLeft = this.add.image(670, 150, "startButton").setScale(.2, .3).setOrigin(0, 0).setInteractive();
    // let stoveButtonTopRight = this.add.image(740, 150, "startButton").setScale(.2, .3).setOrigin(0, 0).setInteractive();
    // let stoveButtonBottomRight = this.add.image(740, 210, "startButton").setScale(.2, .3).setOrigin(0, 0).setInteractive();
    
    let cookZoneBottomLeft = this.add.zone(406, 430, 120, 130).setRectangleDropZone(120, 130); //zone(x, y, width, height);
    // let cookZoneTopLeft = this.add.zone(405, 228, 120, 130).setRectangleDropZone(120, 130); //zone(x, y, width, height);
    // let cookZoneTopRight = this.add.zone(570, 228, 120, 130).setRectangleDropZone(120, 130); //zone(x, y, width, height);
    // let cookZoneBottomRight = this.add.zone(572, 430, 120, 130).setRectangleDropZone(120, 130); //zone(x, y, width, height);
    
    let burnerFlameBottomLeft = this.add.image(400, 428, "burnerFlame").setScale(0.4, 0.4).setVisible(false);
    // let burnerFlameTopLeft = this.add.image(400, 428, "burnerFlame").setScale(0.4, 0.4).setVisible(false);
    // let burnerFlameTopRight = this.add.image(400, 428, "burnerFlame").setScale(0.4, 0.4).setVisible(false);
    // let burnerFlameBottomRight = this.add.image(400, 428, "burnerFlame").setScale(0.4, 0.4).setVisible(false);

    cookZoneBottomLeft.isActive = false;
    // cookZoneTopLeft.isActive = false;
    // cookZoneTopRight.isActive = false;
    // cookZoneBottomRight.isActive = false;

    this.input.enableDebug(cookZoneBottomLeft);
    // this.input.enableDebug(cookZoneBottomRight);
    // this.input.enableDebug(cookZoneTopLeft);
    // this.input.enableDebug(cookZoneTopRight);
    
    let self = this;
    let inDropZone = false;

    let isWaterPotAvailable = false;
    let isWaterBoilingPotAvailable = false;

    let isWaterBoiling = false;
    let isWaterBoilingPasta = false;

    
    // EVENT LISTENERS ++++++++++++++

    stoveButtonBottomLeft.on('pointerdown', function () {
      cookZoneBottomLeft.isActive = !cookZoneBottomLeft.isActive;
      console.log("Event: stoveButtonBottomLeft: isActive: " + cookZoneBottomLeft.isActive);

      if (cookZoneBottomLeft.isActive === true) {
        stoveButtonBottomLeft.setTint(0xff0001);
        burnerFlameBottomLeft.setVisible(true);
        boilWater();
        // TODO fire animation
      } else {
        stoveButtonBottomLeft.clearTint();
        burnerFlameBottomLeft.setVisible(false);
      }

      
    }, this);


    // event listener for sent data from FridgeScene
    this.scene.get('FridgeScene').events.on('FRIDGE_DATA', function (data) {
      console.log("data sucessfully retrieved from: FRIDGE_DATA");
      console.log(data);
      makeSelectedItemsVisible(data);
    });

    // event listener for sent data fron SinkScene
    this.scene.get('SinkScene').events.on('SINK_DATA', function (data) {
      console.log("data sucessfully retrieved from: SINK_DATA");
      if (data === true && data != null) {
        replacePotWithWaterPot();
      }
    });

    // HHHHEEE
    //HAWEWHRUIHAUWHAUHWDu
    // HEAAIWUBHIAUDH+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    this.scene.get('SinkScene').events.on('PASTA_IS_DRAINED', function (data) {
      console.log("data sucessfully retrieved from: PASTA_IS_DRAINED");
      console.log(data);
      if (data === true) {
        // LOGIC HERE FOR DRAINED PASTA
      }
    });


   
    // resume event listener
    this.scene.get(this).events.on('resume', function () {
      console.log("Event: onResume");
      boilWater();
    });

    // When the fridge is clicked, switch to that scene.
    buttonFridge.on('pointerdown', function (pointer, localX, localY, event) {
      switchToFridgeScene();
    }, this);

    // When the fridge is clicked, switch to that scene.
    buttonSink.on('pointerdown', function (pointer, localX, localY, event) {
      switchToSinkScene();
    }, this);

    // event listener when dragging begins
    this.input.on('dragstart', function (pointer, gameObject) {
      gameObject.setTint(0xff0000);
      self.children.bringToTop(gameObject);
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

     // event listener if the object enters a area while being dragged
    this.input.on('dragenter', function (pointer, gameObject, dropZone) {
      // console.log("Event: dragenter");
    });


    // event listener if the object leaves a area while being dragged
    this.input.on('dragleave', function (pointer, gameObject, dropZone) {
      // console.log("Event: dragleave");
      inDropZone = false;
    });

    //event listener if item is dropped into dropzone
    this.input.on('drop', function (pointer, gameObject, dropZone) {
      gameObject.x = dropZone.x
      gameObject.y = dropZone.y;

      if (gameObject.texture.key === "pot" || gameObject.texture.key === "potBoilingWater") {
        inDropZone = true;
      }


      
      if (gameObject.texture.key === "potWater") {
        inDropZone = true;
        boilWater();
      }

      if (gameObject.texture.key === "pastaIngredient") {
        // inDropZone = true;
        if (isWaterBoiling === true && inDropZone === true) {
          boilWaterPasta();
        }
      }
    });


    // FUNCTIONS / METHODS +++++++++++++++


    // Read into callback functions, probably what is needed here.
    function setTimer(timeAmount) {
      setTimeout(function() { 
        console.log("hello, you put timer for: " + timeAmount + "ms"); }, timeAmount);
    }

    const replacePotWithWaterPot = () => {
      pot.setVisible(false);
      potWater.setVisible(true);
      potWater.x = pot.x;
      potWater.y = pot.y;
      pot.removeInteractive();
      self.children.bringToTop(potWater);
      isWaterPotAvailable = true;
    }

    const replaceWaterPotWithBoilingWater = () => {
      potWater.setVisible(false);
      potBoilingWater.setVisible(true);
      potBoilingWater.x = potWater.x;
      potBoilingWater.y = potWater.y;
      potWater.removeInteractive();
      self.children.bringToTop(potBoilingWater);
      isWaterBoilingPotAvailable = true;
    }

    const addPastaToBoilingWater = () => {
      potBoilingWater.setVisible(false);
      pastaIngredient.destroy();
      potBoilingWaterPasta.setVisible(true);
      potBoilingWaterPasta.x = potWater.x;
      potBoilingWaterPasta.y = potWater.y;
      potBoilingWater.removeInteractive();
      self.children.bringToTop(potBoilingWaterPasta);
    }

    const boilWater = () => {

      if (cookZoneBottomLeft.isActive === true && isWaterBoiling === false && isWaterPotAvailable === true && inDropZone === true) {
        console.log("boilWater");
        isWaterBoiling = true;
        sendData("DELETE_WATER_POT_SINK", true);
        replaceWaterPotWithBoilingWater();
      }
      else {
        console.log("cannot boil water");
      }
    }

    const boilWaterPasta = () => {
      isWaterBoilingPasta = true;
      addPastaToBoilingWater();
      sendData("KITCHEN_TO_SINK_DATA", 1);
    }


    // This is for the cabinet. When items are selected and that array is passed back, this function will make those items visible.
    // currently those values are hardcoded, but using self.children is a good idea to use to overcome that.
    const makeSelectedItemsVisible = (data) => {
      if (data != null || data.length >= 0) {
        data.forEach(objectKey => {
          if (saltShaker.texture.key === objectKey) {
            saltShaker.setVisible(true);
          }
          else if (pepperShaker.texture.key === objectKey) {
            pepperShaker.setVisible(true);
          }
          else if (butter.texture.key === objectKey) {
            butter.setVisible(true);
          }
          else if (pastaIngredient.texture.key === objectKey) {
            pastaIngredient.setVisible(true);
          }
          else if (plate.texture.key === objectKey) {
            plate.setVisible(true);
          }
        });
      }
    }

    const switchToFridgeScene = () => {
      if (this.scene.isSleeping('FridgeScene') === true) {
        this.scene.wake('FridgeScene');
        this.scene.pause();
      } else {
        this.scene.launch('FridgeScene');
        this.scene.pause();
      }
    }

    const switchToSinkScene = () => {

      if (this.scene.isSleeping('SinkScene') === true) {
        this.scene.wake('SinkScene');
        this.scene.pause();
      } else {
        this.scene.launch('SinkScene');
        this.scene.pause();
      }
    }

    // send data across files in real time.
    // params: emitterName is the unique name you give to the emitter, you will use the same name with the data receiver
    // params: data to be passed
    const sendData = (emitterName, data) => {
      this.events.emit(emitterName, data);
    }

  }

  
  update() {

  }
}


    // possible way to interate through for the fridge scene so that you don't 
    // have to specify a bunch of hard-coded if statements for making them visible.
    // console.log(self.children);


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
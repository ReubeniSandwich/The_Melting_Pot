import Phaser from "phaser";

import pastaIngredientImport from "../assets/MeltingPotNoodles.png";
import saltShakerImage from "../assets/MeltingPotSalt.png";
import kitchenSink from "../assets/MeltingPotSinkScreen.png";


export default class FridgeScene extends Phaser.Scene {
  constructor() {
    super('FridgeScene');
  }

  init() {
    this.scene.setVisible(false);
  }

  preload() {
    this.load.image("kitchenSink", kitchenSink);
    this.load.image("pastaIngredient", pastaIngredientImport);
    this.load.image("saltShaker", saltShakerImage);

  }

  create() {
    //  let kitchenSink =this.add.image(0, 0, "kitchenSink").setScale(0.47, 0.4).setOrigin(0, 0);

    let pastaIngredient = this.add.image(100, 100, "pastaIngredient").setScale(0.4, 0.4).setInteractive({
      draggable: true
    });
    let saltShaker = this.add.image(200, 100, "saltShaker").setScale(0.4, 0.4).setInteractive({
      draggable: true
    });

    let words = this.add.text(20, 20, 'Count: 0', {
      fontSize: 32,
      fill: "#000000"
    });

    // how data is passed
    // this.emitter= EventsCenter.getInstance();
    


    // //event emitter listener 
    // this.scene.get('KitchenScene').events.on('KITCHEN_INGREDIENT_EVENT', function (object) {
    //   updateCount(object)
    // });


    // pastaIngredient.on('pointerdown', function () {
    //   console.log("pasta");
    //   pastaIngredient.setTint(0xff0000);

    // });

    this.input.on('dragstart', function (pointer, gameObject) {
      gameObject.setTint(0xff0000);
    });

    this.input.on('dragend', function (pointer, gameObject) {
      gameObject.clearTint();

      // how data is passed
      // this.emitter= EventsCenter.getInstance();
      console.log("Hello hello freud");
      // this.events.emit('KITCHEN_INGREDIENT_EVENT', 5 + " Passed Data From Fridge to Kitchen");
      // this.scene.pause();
      switchScene();


    });

    function updateCount(object) {
      console.log("updateCount function reached!");
      words.setText(`Count: ${object}`)
    }

    // is currently not being passed


    const switchScene = () => {
      console.log("switch switch?");
      const passedData = {moo: "BUF"};
      this.events.emit('KITCHEN_INGREDIENT_EVENT', passedData);
      this.scene.resume('KitchenScene', passedData);
      this.scene.pause();


      // console.log(this.scene.isPaused('KitchenScene'));
      // console.log(this.scene.isPaused('FridgeScene'));
    }

  }



  update() {

  }
}

// EventsCenter.on('update-count', this.updateCount, this);


// this.scene.get('Scene1').events.on('myEvent', updateCount(x));

//                 this.mainScene = this.scene.get("KitchenScene");
// this.mainScene.events.on('playerData', (data) => {
//     console.log("dah fridge: " + data);
//     updateCount(data);
// your code
// });


// this.emitter = EventsCenter.getInstance();
// this.emitter.on("MY_EVENT",this.updateCount.bind(this));
// this.scene.get('KitchenScene').events.on('upPoints', function (num) {
//   updateCount(num);
//   console.log("got here at this point")
// });
// EventsCenter.on('update-count', this.updateCount, this);


// clean up when Scene is shutdown
//   this.events.on(Phaser.Scenes.Events.SHUTDOWN, () => {
//       eventsCenter.off('update-count', this.updateCount, this)
//   });
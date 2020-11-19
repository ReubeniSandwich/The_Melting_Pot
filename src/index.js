  
import Phaser from "phaser";
import LoadingScene from "./scenes/LoadingScene";
import MainMenuScene from "./scenes/MainMenuScene";
import KitchenScene from "./scenes/KitchenScene";
import SinkScene from "./scenes/SinkScene";
import SettingsScene from "./scenes/SettingsScene";

new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [MainMenuScene, LoadingScene, SettingsScene, KitchenScene, SinkScene]
  // scale: {
  //   mode: Phaser.Scale.RESIZE
  // }
});

//Code to create a timer to be activated when the player puts food on the stove top.
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 60 * 5,
      display = document.querySelector('#time');
  startTimer(fiveMinutes, display);
};

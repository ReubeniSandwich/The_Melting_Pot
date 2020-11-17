  
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

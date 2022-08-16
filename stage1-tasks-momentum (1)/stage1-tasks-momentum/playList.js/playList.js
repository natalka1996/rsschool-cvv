import playList from './playList.js';
console.log(playList);
const audio = new Audio();

function playAudio() {
  audio.src = '../assets/sounds/Aqua Caelestis.mp3'
  audio.currentTime = 0;
  audio.play();
}
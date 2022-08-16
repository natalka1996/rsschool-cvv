import playList from ""
const audio = new Audio();
let track = 0;
const playerList = document.querySelector('.audio-player');
const play = document.querySelector('.play');

function playTrack() {
    audio.src = playList[track].src;
    audio.currentTime = 0;
    audio.play();
}
function pauseTrack() {
    audio.pause();
}
audio.addEventListener('ended', () => {
    console.log('next treck');
    playNext();

})
export function renderPlayList() {
    playerList.innerHTML = '';
    for (let i = 0; i < playList.length; i++){
        if (i === track) {
            playerList.innerHTML += <li class='trackNun$(i)curent'>${playList(i).title}</li>
        }
    }
}
const playList = [
    {
      title: 'River Flows In You',
      src: '../assets/sounds/Aqua Caelestis.mp3',
      duration: '01:37'
    },
    {
      title: 'Ennio Morricone',
      src: '../assets/sounds/Ennio Morricone.ogg',
      duration: '01:37'
    },
    {
      title: 'Summer Wind',
      src: '../assets/sounds/Summer Wind.og',
      duration: '03:50'
    },
    {
      title: 'Ambient',
      src: '../assets/sounds/Music Ambient.ogg',
      duration: '00:14'
    }
  ]
  export default playList;

import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const saveTime = (data) => {
    localStorage.setItem("videoplayer-current-time", data.seconds);
};

player.on('timeupdate', throttle(saveTime, 1000));

const currentTime = localStorage.getItem("videoplayer-current-time");

if (currentTime) {
    player.setCurrentTime(currentTime);
};

let video = document.getElementById("video1");

function retroceder(){
    video.currentTime -= 10;
}

function avançar(){
    video.currentTime += 10;
}

function diminuir_vel(){
    video.playbackRate -= 0.1;
}

function aumentar_vel(){
    video.playbackRate += 0.1;
}

function play(){
    video.play();
}

function stop(){
    video.pause();
    video.currentTime = 0;
}
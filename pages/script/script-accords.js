function playAudio(source) {
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = source;
    audioPlayer.play();
}

function openImg() {
    playAudio("../audio/magic.mp3");
}

function openImg1() {
    playAudio("../audio/magic2.mp3");
}

function openImg2() {
    playAudio("../audio/magic3.mp3");
}

function openImg3() {
    playAudio("../audio/magic4.mp3"); // 
}

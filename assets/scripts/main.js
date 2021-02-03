// main.js

//VOLUME SLIDER, NUMBER, and ICON
let volumeBar = document.getElementById('volume-slider');
let volumeBox = document.getElementById('volume-number');
let volumeImage = document.getElementById('volume-image');

//HONK BUTTON AND SOUND
let honkButton = document.getElementById('honk-btn');
let honkSound = document.getElementById('horn-sound');

//HORNS (INPUT)
let airHorn = document.getElementById('radio-air-horn');
let carHorn = document.getElementById('radio-car-horn');
let partyHorn = document.getElementById('radio-party-horn');

//IMAGE BASED ON SOUND
let soundImage = document.getElementById('sound-image');

function updateVolumeImage(volumeLevel, volumeImage) {
    if(volumeLevel == 0) {
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
    } else if(volumeLevel > 0 && volumeLevel <= 33) {
        volumeImage.src = "./assets/media/icons/volume-level-1.svg";
    } else if(volumeLevel > 33 && volumeLevel <= 66) {
        volumeImage.src = "./assets/media/icons/volume-level-2.svg";
    } else {
        volumeImage.src = "./assets/media/icons/volume-level-3.svg";
    }
}

volumeBox.addEventListener('input', function() {
    volumeBar.value = volumeBox.value;
    honkSound.volume = volumeBox.value / 100;
    if(volumeBox.value == 0) {
        honkButton.disabled = true
    } else {
        honkButton.disabled = false
    }
    updateVolumeImage(volumeBox.value, volumeImage);
});

volumeBar.addEventListener('change', function() {
    volumeBox.value = volumeBar.value;
    honkSound.volume = volumeBar.value / 100;
    if(volumeBar.value == 0) {
        honkButton.disabled = true
    } else {
        honkButton.disabled = false
    }
    updateVolumeImage(volumeBar.value, volumeImage);
});

airHorn.addEventListener('click', function() {
    soundImage.src = './assets/media/images/air-horn.svg'
    honkSound.src = './assets/media/audio/air-horn.mp3'
})

carHorn.addEventListener('click', function() {
    soundImage.src = './assets/media/images/car.svg'
    honkSound.src = './assets/media/audio/car-horn.mp3'
})

partyHorn.addEventListener('click', function() {
    soundImage.src = './assets/media/images/party-horn.svg'
    honkSound.src = './assets/media/audio/party-horn.mp3'
})

let pageForm = document.getElementById('party-horn-form');
pageForm.addEventListener('submit', playSound);

function playSound(event) {
  honkSound.play();
  event.preventDefault();
}
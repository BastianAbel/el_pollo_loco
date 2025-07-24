let audioInfList = {
    music : {
        'src' : 'sounds/guitar-mexican-vibes-230195.mp3',
        'volume' : 0.1,
        'autoplay' : true,
        'loop' : true
    },
    sandStep : {
        'src' : 'sounds/sand-step.mp3',
        'volume' : 1,
        'autoplay' : false,
        'loop' : false
    }
};

let loadedAudios = {};

function loadAllSounds() {
    const keys = Object.keys(audioInfList)
    for (let i = 0; i < keys.length; i++) {
        loadedAudios[keys[i]] = new Audio();
        audio = loadedAudios[keys[i]];
        audio.src = audioInfList[keys[i]]['src'];
        audio.volume = audioInfList[keys[i]]['volume'];
        audio.preload = 'auto';
        audio.autoplay = audioInfList[keys[i]]['autoplay'];
        audio.loop = audioInfList[keys[i]]['loop'];
    }
}







loadAllSounds()



function playAudio(audioref) {
    const audioClone = loadedAudios[audioref].cloneNode(true);
    audioClone.play();
}
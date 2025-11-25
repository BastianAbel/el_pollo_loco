let muted = true;

let audioInfList = {
    music : {
        'src' : 'sounds/guitar-mexican-vibes-230195.mp3',
        'volume' : 0.1,
        'autoplay' : false,
        'loop' : true
    },
    sandStep : {
        'src' : 'sounds/sand-step.mp3',
        'volume' : 0.1,
        'autoplay' : false,
        'loop' : false
    },
    angryChicken : {
        'src' : 'sounds/angry-chicken-imitation-89241.mp3',
        'volume' : 0.05,
        'autoplay' : false,
        'loop' : false
    },
    chickChirp : {
        'src' : 'sounds/chick-chirping-75543.mp3',
        'volume' : 0.1,
        'autoplay' : false,
        'loop' : false
    },
    chickenClucking : {
        'src' : 'sounds/chicken-cluking-type-3-293320.mp3',
        'volume' : 0.05,
        'autoplay' : false,
        'loop' : false
    },
    chickenHurt : {
        'src' : 'sounds/chicken-squawk-72188.mp3',
        'volume' : 0.1,
        'autoplay' : false,
        'loop' : false
    },
    snoring : {
        'src' : 'sounds/snoring.mp3',
        'volume' : 0.3,
        'autoplay' : false,
        'loop' : true
    },
    throw : {
        'src' : 'sounds/throw.mp3',
        'volume' : 0.05,
        'autoplay' : false,
        'loop' : false
    },
    coinPickup : {
        'src' : 'sounds/coin-pickup.mp3',
        'volume' : 0.05,
        'autoplay' : false,
        'loop' : false
    },
    bottlePickup : {
        'src' : 'sounds/bottle-pickup.mp3',
        'volume' : 0.2,
        'autoplay' : false,
        'loop' : false
    },
    hurt : {
        'src' : 'sounds/hurt.mp3',
        'volume' : 0.2,
        'autoplay' : false,
        'loop' : false
    },
    death : {
        'src' : 'sounds/death.mp3',
        'volume' : 0.6,
        'autoplay' : false,
        'loop' : false
    },
    jump : {
        'src' : 'sounds/jump.mp3',
        'volume' : 0.6,
        'autoplay' : false,
        'loop' : false
    }
};

let loadedAudios = {};

const userInteractionEvents = [
    "click",
    "mousedown",
    "mouseup",
    "keydown",
    "keyup",
    "touchstart",
    "touchend",
    "pointerdown",
    "pointerup"
];

function addEventlistenerForFirstInteraction() {
    userInteractionEvents.forEach((interaction) => {
        document.addEventListener(interaction, enableAudio)
    })
}

function removeEventlistenerForFirstInteraction() {
    userInteractionEvents.forEach((interaction) => {
        document.removeEventListener(interaction, enableAudio)
    })
}

function enableAudio() {
    loadedAudios.music.play().then(() => {
        removeEventlistenerForFirstInteraction();
    });
}

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
        audio.muted = muted;
    }
}

function toggleVolume() {
    if(!muted) {
        changeMuteStatusTo(true)
        changeMuteIcon()
    } else{
        changeMuteStatusTo(false)
        changeMuteIcon()
    }
}

function changeMuteIcon() {
    volumeButton = document.getElementById('volume');
    let status;
    if(muted) {
        status = "off";
    }else {
        status = "on";
    }
    volumeButton.src = "img/controls/volume-" + status + ".svg";
}

function changeMuteStatusTo(muteStatus) {
    muted = muteStatus;
    for(x in loadedAudios) {
        audio = loadedAudios[x];
        audio.muted = muteStatus;
    };
    localStorage.setItem("muteStatus", muted);
}

function checkForMuteSave() {
    let localStorageSave = localStorage.getItem("muteStatus");
    if(localStorageSave !== null) {
        muted = (localStorageSave === "true");
        changeMuteStatusTo(muted);
    }
    changeMuteIcon();
}

loadAllSounds()
checkForMuteSave();
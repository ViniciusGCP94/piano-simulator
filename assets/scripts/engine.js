const pianoKeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector('.volume-slider input');
const keysCheck = document.querySelector('.keys-check input');

let mapedKeys = [];

let audio = new Audio("assets/tunes/a.wav")

const playTune = (key) => {
    audio.src = `assets/tunes/${key}.wav`;
    audio.play();

    const clikedKey = document.querySelector(`[data-key="${key}"]`);
    clikedKey.classList.add("active")
    setTimeout(() => {
        clikedKey.classList.remove("active")
    }, 150)
};

pianoKeys.forEach((key) =>{
    console.log(key.dataset.key);
    key.addEventListener('click', ()=> playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
})

document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)){
            playTune(e.key)
    }
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

volumeSlider.addEventListener("input", handleVolume)

const showHideKeys = ()=>{
    pianoKeys.forEach(key => key.classList.toggle('hide'))
}

keysCheck.addEventListener("click", showHideKeys)


const popup = document.getElementById("orientation-popup");
const popupBtn = document.getElementById("popup-ok");

const isMobileOrTablet = () => {
  return window.matchMedia("(max-width: 1024px)").matches;
};

const checkOrientation = () => {
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;

  if (isPortrait && isMobileOrTablet()) {
    popup.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  } else {
    popup.classList.add("hidden");
    document.body.style.overflow = "";
  }
};

window.addEventListener("orientationchange", checkOrientation);
window.addEventListener("load", checkOrientation);
popupBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
  document.body.style.overflow = "";
});
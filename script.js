window.addEventListener('keydown', event => {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    console.log(event)
    if (!audio) return;
    audio.volume = 0.4;
    audio.currentTime = 0;
    audio.play();

    const keyDisplay = document.querySelector('.keyDisplay');
    keyDisplay.classList.remove('keyDisplay-before');
    keyDisplay.classList.add('keyDisplay-after');
    keyDisplay.innerText = event.key;
})
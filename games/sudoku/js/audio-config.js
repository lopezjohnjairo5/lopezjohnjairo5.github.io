const configVolumeSounds = () => {
    let backgroundMusicControlValue = parseFloat(document.getElementById('background-music-control').value),
    errorMusicControlValue = parseFloat(document.getElementById('error-music-control').value),
    correctMusicControlValue = parseFloat(document.getElementById('correct-music-control').value),
    winMusicControlValue = parseFloat(document.getElementById('win-music-control').value),
    loseMusicControlValue = parseFloat(document.getElementById('lose-music-control').value),
    clockMusicControlValue = parseFloat(document.getElementById('clock-music-control').value);

    volumeSounds(backGSound,backgroundMusicControlValue); // audio de fondo
    volumeSounds(correctSound,correctMusicControlValue); // audo de # correcto
    volumeSounds(errorSound,errorMusicControlValue); // audio de error
    volumeSounds(winSound,winMusicControlValue);
    volumeSounds(loseSound,loseMusicControlValue);
    volumeSounds(clickBtnSound);
    volumeSounds(clockSound,clockMusicControlValue);
};

let saveAudioConfig = document.getElementById('save-audio-config');

saveAudioConfig.addEventListener('click', () => {
    replaySound(clickBtnSound); // sonido de click en btn
    configVolumeSounds();
});
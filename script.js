// Listener for key down and play sound
window.addEventListener("keydown", function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
    if (!audio) {
        return;
    }else{
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    }
// Add key down transition
function removeTransition(e) {
    if (e.propertyName !== "transform") {
        this.classList.remove('playing');
    }
}
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
});
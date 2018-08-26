/*
 *
*/


function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
        key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  // Stop function execution all together
  if (!audio) return;

  // Rewind to the start
  audio.currentTime = 0;

  audio.play()
  key.classList.toggle('playing');
}


// We could use timer to remove the class setTimeout(function() { key.classList.remove('playing'); }, 0.2)
// But better to use a transitionend event on each element of array (NodeList!)
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
  // Skip it if it's not a transform
  if (e.propertyName !== 'transform') return;

  this.classList.remove('playing');
}


window.addEventListener('keydown', playSound);

// Found out how to make on a mouse click
// window.addEventListener('mouseup', playSound);

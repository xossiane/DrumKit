import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello :) </h1>`

document.querySelector('#div').innerHTML = ` <h1>this is our DrumKit </h1>`
window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  
 console.log(audio)
 if (!audio) return;
 audio.currentTime = 0; //não espera o áudio chegar até o final
 
 audio.play();
 key.classList.add('playing');
 
 function removeTransition(e){
   key.classList.remove('playing');
 }
 
 const keys = document.querySelectorAll('.key');
 keys.forEach(key => key.addEventListener('transitionend', removeTransition));
 
 
 
 })
   
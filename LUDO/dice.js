"use strict";
const dice = document.querySelector('.purple');
const img1 = document.querySelector('.pink');
const img2 = document.querySelector('.blue');
const result = document.querySelector('.result');
const button = document.querySelector('button');
let text = document.querySelector('span');
let nanaScore = document.querySelector('.n-score');
let score1 = 1;
let score2 = 1;
let zainabScore = document.querySelector('.z-score');
const names = document.querySelector('#firstname').value;
const name2 = document.querySelector('.name');
let rounds = 0;
let audioSound = new Audio("./audio/dice.mp3")
let audioSound1 = new Audio("./audio/dice.mp3")
let audioStartTime = 31;
let winner = () => {

   // Stop audio after 5 seconds
   setTimeout(() => {
    audioSound.pause();
    audioSound.currentTime = 0;
  }, 1000);
  audioSound.play();
  name2.innerHTML = `${names}`
  
  if (rounds < 20) {
    let player1 = Math.ceil(Math.random() * 6);
    let player2 = Math.ceil(Math.random() * 6);
    let resultText = '';

    if(player1 < player2){
      resultText = `${player2} : ${player1}`;
      text.innerHTML = `${names} Won😒😎`;
      zainabScore.innerHTML = score1++
    }else if (player1 > player2){
      resultText = `${player2} : ${player1}`
      text.innerHTML = 'Nana Won😊😋';
      nanaScore.innerHTML = score2++
    }else{
      resultText = `${player1} : ${player2}`
      text.innerHTML = "There's a draw😍😉 "
    }
    result.innerHTML = resultText
  
    img1.setAttribute("src", `images/dice${player1}.png`)
    img2.setAttribute("src", `images/dice${player2}.png`)
  
    dice.classList.add('rotate');
    img1.classList.add('rotate');
    img2.classList.add('rotate');
    setTimeout( () => {
      dice.classList.remove('rotate');
      img1.classList.remove('rotate');
      img2.classList.remove('rotate');
  
    }, 1000);

     // Check if the audio is already playing
     if (audioSound1.paused) {
      // Set the playback time to the stored starting time
      audioSound1.currentTime = audioStartTime;
      audioSound1.play();
    }
  
    rounds++
  }else {
    // Final winner declaration
    if (score1 > score2) {
      text.innerHTML = `${names} is the Final Winner! 😎`;
    } else if (score2 > score1) {
      text.innerHTML = 'Nana is the Final Winner! 😋';
    } else {
      text.innerHTML = "It's a Final Draw! 😍😉 ";
    }
  }
}

button.addEventListener('click', winner)

function showName(e){
  let firstName= document.querySelector("#firstname").value;
  document.querySelector(".name").innerText = firstName;        
}
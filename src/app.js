/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function cardGenerate() {
  let suits = ['♦', '♥', '♠', '♣'];
  let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  let indexSuits = Math.floor(Math.random() * suits.length)
  let indexNumbers = Math.floor(Math.random() * numbers.length)

  document.querySelector('#top').innerHTML = suits[indexSuits];
  document.querySelector('#button').innerHTML = suits[indexSuits];
  document.querySelector('#number').innerHTML = numbers[indexNumbers];

  if (suits[indexSuits] == '♦' || suits[indexSuits] == '♥') {
    document.querySelector('#top').className = 'text-danger'
    document.querySelector('#button').className = 'text-danger'
  }
}



window.onload = function() {
  cardGenerate()
  document.querySelector('btnNewCard').addEventListener('click', cardGenerate);
};
 setInterval(cardGenerate, 1000)

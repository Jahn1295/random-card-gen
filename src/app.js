/* eslint-disable */
import "bootstrap";
import "./style.css";

const suits = [
  ["♦", "diamond"], //0,1
  ["♥", "heart"], //0,1
  ["♠", "spades"], //0,1
  ["♣", "clovers"] //0,1
];

const faceNumber = [
  "2", //0
  "3", //1
  "4", //2
  "5", //3
  "6", //4
  "7", //5
  "8", //6
  "9", //7
  "10", //8
  "J", //9
  "Q", //10
  "K", //11
  "A" //12
];

window.onload = function() {
  //write your code here
  const suitIndex = Math.ceil(Math.random() * (suits.length - 1));
  const suitIcon = suits[suitIndex][0];
  const suitClassName = suits[suitIndex][1];

  const topLeftRandomSuit = document.querySelector(".top-left-suit");
  topLeftRandomSuit.innerText = suitIcon;
  topLeftRandomSuit.classList.add(suitClassName);
  if (!topLeftRandomSuit) {
    console.log("Not found");
    return;
  }
  const bottomRightRandomSuit = document.querySelector(".bottom-right-suit");
  bottomRightRandomSuit.innerText = suitIcon;
  bottomRightRandomSuit.classList.add(suitClassName);

  const faceNumberIndex = Math.ceil(Math.random() * (faceNumber.length - 1));
  const centerRandomNumber = document.querySelector(".center-number");
  centerRandomNumber.innerText = faceNumberIndex;
};

setTimeout(function() {
  window.location.reload();
}, 10000);

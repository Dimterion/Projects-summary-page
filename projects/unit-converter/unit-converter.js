/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputForm = document.querySelector("input");
const btn = document.getElementById("btn");
const lengthBlock = document.getElementById("length-text");
const volumeBlock = document.getElementById("volume-text");
const massBlock = document.getElementById("mass-text");

function convertLength() {
  const feets = (inputForm.value * 3.28).toFixed(2);
  const meters = (inputForm.value / 3.28).toFixed(2);

  lengthBlock.textContent = `${inputForm.value} meter(s) = ${feets} feet | ${inputForm.value} feet = ${meters} meter(s)`;
}

function convertVolume() {
  const liters = (inputForm.value / 0.27).toFixed(2);
  const gallons = (inputForm.value * 0.27).toFixed(2);

  volumeBlock.textContent = `${inputForm.value} liter(s) = ${gallons} gallon(s) | ${inputForm.value} gallon(s) = ${liters} liter(s)`;
}

function convertMass() {
  const kilos = (inputForm.value / 2.2).toFixed(2);
  const pounds = (inputForm.value * 2.2).toFixed(2);

  massBlock.textContent = `${inputForm.value} kilo(s) = ${pounds} pound(s) | ${inputForm.value} pound(s) = ${kilos} kilo(s)`;
}

function convert() {
  if (inputForm.value > 0) {
    convertLength();
    convertVolume();
    convertMass();
  } else {
    alert("Please enter a number more than 0 to make a conversion.");
  }
}

btn.addEventListener("click", convert);

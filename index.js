/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

I updated them to be more precise in my code
*/

const inputBox = document.getElementById('input-box');
const convertBtn = document.getElementById('convert-btn');
const lengthBox = document.getElementById('length-output');
const volumeBox = document.getElementById('volume-output');
const massBox = document.getElementById('mass-output');


// this makes the inputbox wider if we put more than 2 numbers
inputBox.addEventListener('input', function() {
    this.style.width = (this.value.length + 1) + 'ch';
});

convertBtn.addEventListener('click', function() {
    let inputValue = Number(inputBox.value); 
    
    const metersToFeet = inputValue * 3.28084;
    const feetToMeters = inputValue * 0.3048;

    const litersToGallons = inputValue * 0.264172;
    const gallonsToLiters = inputValue * 3.78541;

    const kilosToPounds = inputValue * 2.20462;
    const poundsToKilos = inputValue * 0.453592;
    
    lengthBox.textContent = `${inputValue} meters = ${metersToFeet.toFixed(3)} feet | ${inputValue} feet = ${feetToMeters.toFixed(3)} meters`
    volumeBox.textContent = `${inputValue} liters = ${litersToGallons.toFixed(3)} gallons | ${inputValue} gallons = ${gallonsToLiters.toFixed(3)} liters`
    massBox.textContent = `${inputValue} kilos = ${kilosToPounds.toFixed(3)} pounds | ${inputValue} pound = ${poundsToKilos.toFixed(3)} kilos`
})

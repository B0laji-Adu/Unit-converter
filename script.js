/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputNum = document.getElementById("inputnum")
const button = document.getElementById("addnumber")
const group1 = document.getElementById("length")
const group2 = document.getElementById("volume")
const group3 = document.getElementById("mass")

button.addEventListener("click" , function(){
    let baseValue = inputNum.valueAsNumber
    const meterToFeet =  (3.281 * baseValue).toFixed(3)
    const literToGallon = ( 0.264 * baseValue).toFixed(3)
    const gallonToLiter =( 4.54609 * baseValue).toFixed(3)
    const kiloToPound =  (2.204 * baseValue).toFixed(3)
    const feetToMeter = (0.3048 * baseValue).toFixed(3)
    const poundToKilo = ( 0.453592 * baseValue).toFixed(3)
    group1.textContent= `${baseValue} meter = ${meterToFeet} feet  |  ${baseValue} feet  = ${feetToMeter}`
    group2.textContent = `${baseValue} liters = ${literToGallon} gallons | ${baseValue} gallons = ${gallonToLiter} liters `
    group3.textContent = `${baseValue} kilos = ${kiloToPound} pounds | ${baseValue} pounds = ${poundToKilo} kilos `
})
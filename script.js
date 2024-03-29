let seconds = 0;
const timerElement = document.getElementById('timer');
const birthCounterElement = document.getElementById('birthCounter');
const deathCounterElement = document.getElementById('deathCounter');
const marriageCounterElement = document.getElementById('marriageCounter');
const devorceCounterElement = document.getElementById('divorceCounter');
const videosuploadelement = document.getElementById('videosUploaded');
const co2CounterElement = document.getElementById('co2Counter');
const clothingPerSecondElement = document.getElementById('clothingPerSecond');
const foodwastedPerSecondElement = document.getElementById('foodWastedPerSecond');
const birthsPerSecond = 4.5;
const deathsPerSecond = 1.8;
const hoursofvideouploadedpersecond = 8.3333333333333;
const marriagesPerSecond = 1.74;
const devorcePerSecond = 1.4;
const co2PerSecond = 1337;
const clothingPerSecond = 2.916;
const foodwastedPerSecond = 66;


function updateTime() {
    seconds += 0.1; // Update every 100 milliseconds

    timerElement.textContent = "You have been on this page for " + seconds.toFixed(1) + " seconds"; 

    const numberOfBirths = Math.floor(seconds * birthsPerSecond);
    const numberOfDeaths = Math.floor(seconds * deathsPerSecond);
    const numberOfVideos = Math.floor(seconds * hoursofvideouploadedpersecond);
    const numberOfMarriages = Math.floor(seconds * marriagesPerSecond);
    const numberOfDevorces = Math.floor(seconds * devorcePerSecond);
    const co2 = Math.floor(seconds * co2PerSecond);
    const foodwaste = Math.floor(seconds * foodwastedPerSecond);


    // Batch DOM updates
    const fragment = document.createDocumentFragment();
    birthCounterElement.textContent = "Number of people born during your visit: " + numberOfBirths;
    deathCounterElement.textContent = "Number of people died during your visit: " + numberOfDeaths;
    videosuploadelement.textContent = "Number of hours of video uploaded during your visit: " + numberOfVideos;
    marriageCounterElement.textContent = "Number of marriages during your visit: " + numberOfMarriages;
    devorceCounterElement.textContent = "Number of devorces during your visit: " + numberOfDevorces;
    co2CounterElement.textContent = "Amount of CO2 emitted during your visit: " + co2 + " tonnes";
    clothingPerSecondElement.textContent = "The amount of clothing thrown out during your visit: " + Math.floor(seconds * clothingPerSecond) + " Tonnes";
    foodwastedPerSecondElement.textContent = "The amount of food wasted during your visit: " + foodwaste + " Tonnes";
    
}

setInterval(updateTime, 100); // Update every 100 milliseconds

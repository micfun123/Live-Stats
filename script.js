let seconds = 0;
const timerElement = document.getElementById('timer');
const birthCounterElement = document.getElementById('birthCounter');
const deathCounterElement = document.getElementById('deathCounter');
const marriageCounterElement = document.getElementById('marriageCounter');
const devorceCounterElement = document.getElementById('devorceCounter');
const videosuploadelement = document.getElementById('videosuploaded');
const birthsPerSecond = 4.5;
const deathsPerSecond = 1.8;
const hoursofvideouploadedpersecond = 8.3333333333333;
const marriagesPerSecond = 1.74;
const devorcePerSecond = 1.4;



function updateTime() {
    seconds += 0.1; // Update every 100 milliseconds

    timerElement.textContent = "You have been on this page for " + seconds.toFixed(1) + " seconds"; 

    const numberOfBirths = Math.floor(seconds * birthsPerSecond);
    const numberOfDeaths = Math.floor(seconds * deathsPerSecond);
    const numberOfVideos = Math.floor(seconds * hoursofvideouploadedpersecond);
    const numberOfMarriages = Math.floor(seconds * marriagesPerSecond);
    const numberOfDevorces = Math.floor(seconds * devorcePerSecond);

    // Batch DOM updates
    const fragment = document.createDocumentFragment();
    birthCounterElement.textContent = "Number of people born during your visit: " + numberOfBirths;
    deathCounterElement.textContent = "Number of people died during your visit: " + numberOfDeaths;
    videosuploadelement.textContent = "Number of hours of video uploaded during your visit: " + numberOfVideos;
    marriageCounterElement.textContent = "Number of marriages during your visit: " + numberOfMarriages;
    devorceCounterElement.textContent = "Number of devorces during your visit: " + numberOfDevorces;
}

setInterval(updateTime, 100); // Update every 100 milliseconds

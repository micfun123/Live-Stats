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
const hoursOfVideoPerSecond = 8.3333333333333;
const marriagesPerSecond = 1.74;
const devorcePerSecond = 1.4;
const co2PerSecond = 1337;
const clothingPerSecond = 2.916;
const foodWastedPerSecond = 66;


function updateTime() {
    seconds += 0.1; // Update every 100 milliseconds

    timerElement.innerText = seconds.toFixed(1)

    birthCounterElement.innerText = Math.floor(seconds * birthsPerSecond);
    deathCounterElement.textContent = Math.floor(seconds * deathsPerSecond);
    videosuploadelement.textContent = Math.floor(seconds * hoursOfVideoPerSecond);
    marriageCounterElement.textContent = Math.floor(seconds * marriagesPerSecond);
    devorceCounterElement.textContent = Math.floor(seconds * devorcePerSecond);
    co2CounterElement.textContent = Math.floor(seconds * co2PerSecond);
    clothingPerSecondElement.textContent = Math.floor(seconds * clothingPerSecond);
    foodwastedPerSecondElement.textContent = Math.floor(seconds * foodWastedPerSecond);
}

setInterval(updateTime, 100); // Update every 100 milliseconds
const now = new Date();

let currentHour = now.getHours();
let currentMinute = now.getMinutes();
let currentSecond = now.getSeconds();

console.log('Hour: ', currentHour);
console.log('Minute: ', currentMinute);
console.log('Second: ', currentSecond);

const hour = document.querySelector('.hour-container');
const minute = document.querySelector('.minute-container');
const second = document.querySelector('.second-container');

hour.style.transition = "transform 2s ease-out";
minute.style.transition = "transform 2s ease-out";
second.style.transition = "transform 2s ease-out";

hour.style.transform = `rotate(${currentHour*30}deg)`;
minute.style.transform = `rotate(${currentMinute*6}deg)`;
second.style.transform = `rotate(${currentSecond*6}deg)`;

setInterval(() => {
    currentSecond++;
    second.style.transform = `rotate(${currentSecond*6}deg)`;
    
    currentMinute = currentMinute + 1/60;
    minute.style.transform = `rotate(${currentMinute*6}deg)`;

    currentHour = currentHour + 1/60/60;
    hour.style.transform = `rotate(${currentHour*30}deg)`;
}, 1000)
'use-strict'

let date = new Date();
let year = date.getFullYear();
let christmas = new Date(`12/25/${year}`);
let newYear = new Date(`01/01/${year + 1}`);

let christmasCount = (() => {
    let calc = christmas.getTime() - date.getTime();
    let result = Math.ceil(calc / (1000 * 3600 * 24));
    let message = `${result} days till christmas`
    if (result <= 1 && result != 0) message = 'Tomorrow is Christmas 🤩';
    if (result <= 0) message = 'Merry Christmas! 🎄 🎉 🎁';
    if (result == -1) message = 'Happy Boxing Day! 🎄 🎉 🎁';
    if (result <= -2) message = '🎄 🎉 🎁'; // Because calculating days after Christmas in same year returns (-number)
    return message;
})

let newYearCount = (() => {
    let calc = newYear.getTime() - date.getTime();
    let result = Math.ceil(calc / (1000 * 3600 * 24));
    let message = `${result} days till Next Year`;
    if (result <= 1 && result != 0) message = 'Tomorrow is the NewYear 🤩';
    if (newYear.getDay() == 1 || 0 && newYear.getMonth() == 0 || 1 && result - 365 === 0 || result === 366) message = 'Happy NewYear! 🎇 🎉';
    return message;
})

let timeDisplay = (() => {
    let d = new Date(); // New Date was set so autochange function at line 33 can work.
    let hours = d.getHours();
    let hoursCopy = d.getHours() % 12;
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    let time = `${hoursCopy}:${minutes}:${seconds}`;
    if (hours > 11) {
        time += 'PM';
    } else {
        time += 'AM';
    }
    document.querySelector('.time-container').innerText = time;
    setInterval(timeDisplay, 1000);
})
timeDisplay()
document.querySelector('.date-container').innerText = date.toDateString();
document.querySelector('.christmascount-container').innerText = christmasCount();
document.querySelector('.newyearcount-container').innerText = newYearCount();

console.log(christmas === date);
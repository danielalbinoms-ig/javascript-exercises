const button = document.createElement('button');
const meter = document.createElement('meter');

button.textContent = 'Click';
meter.max = 3;
meter.optimum = 0;
meter.low = 1.5;
meter.high = 2.5;

let counter = 0;
function onlyThreeTimes() {
    if (counter < 3) {
        meter.value++;
        counter++;
    }
}

button.addEventListener('click', onlyThreeTimes);

document.body.appendChild(button)
document.body.appendChild(meter);

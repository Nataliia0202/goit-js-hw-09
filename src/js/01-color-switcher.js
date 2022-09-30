const buttonStartEl = document.querySelector('button[data-start]');
const buttonStopEl = document.querySelector('button[data-stop]');
buttonStopEl.disabled = true;
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonStartEl.addEventListener('click', onButtonStartEl);

function onButtonStartEl() {
    buttonStartEl.disabled = true;
    buttonStopEl.disabled = false;

    timerId = setInterval(() => {
        document.body.style.background = getRandomHexColor();
    }, 1000);

}

buttonStopEl.addEventListener('click', onButtonStopEl);

function onButtonStopEl() {
    clearInterval(timerId);
    buttonStartEl.disabled = false;
    buttonStopEl.disabled = true;
}
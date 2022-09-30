import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const textEl = document.querySelector('#datetime-picker');
const btnStartEl = document.querySelector('button[data-start]');
const timerEl = document.queryCommandIndeterm('.timer');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

btnStartEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0] < new Date()) {
        Notiflix.Notify.failure('Please choose a date in the future');
        btnStartEl.disabled = true;
      } else {
        btnStartEl.disabled = false;
      }
  },
};

flatpickr(textEl, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return value.toString().padStart(2, "0");
}
btnStartEl.addEventListener('click', onBtnStartEl);

function onBtnStartEl() {
    let timerId = setInterval(() => {
        let countDown = new Date(textEl.value) - new Date();
        // console.log(countDown);
        btnStartEl.disabled = true;
        if (countDown >= 0) {
            let timeObject = convertMs(countDown);
            // console.log(timeObject);
            days.textContent = addLeadingZero(timeObject.days);
            hours.textContent = addLeadingZero(timeObject.hours);
            minutes.textContent = addLeadingZero(timeObject.minutes);
            seconds.textContent = addLeadingZero(timeObject.seconds);
            if (countDown <= 10000) {
                timerEl.style.color = "red";
            }
        } else {
            Notiflix.Notify.success('countDown finished');
            timerEl.style.color = 'black';
            clearInterval(timerId);
        }
    }, 1000)
}
import Notiflix from 'notiflix';

const delayEl = document.querySelector('input[name="delay"]');
const stepEl = document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]'); 
const btnPromise = document.querySelector('button[type="submit"]');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
  
}

btnPromise.addEventListener("click", onBtnPromise);

function onBtnPromise(e) {
  e.preventDefault();
  let firstDelay = Number(delayEl.value)
  let delayStep = Number(stepEl.value);
  for (i = 0; i < amountEl.value; i += 1) {
    createPromise(1 + i, firstDelay + i * delayStep)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `💹 Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `⛔ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}
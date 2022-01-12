import Notiflix from 'notiflix';

const form = document.querySelector(".form");
const delay = document.querySelector('[name = "delay"]');
const step = document.querySelector('[name ="step"]');
const amount = document.querySelector('[name ="amount"]');



form.addEventListener('submit', (e) => {
  e.preventDefault();
  let newDelay = + delay.value;
  let newStep = + step.value;
  let newAmount = + amount.value;
  for (let position = 1; position <= newAmount; position += 1) {

  createPromise(position, newDelay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });

    newDelay += newStep;

  }

});



  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
        if (shouldResolve) {
          // Fulfill
          resolve({ position, delay });
        } else {
          // Reject
          reject({ position, delay });
        }
      }, delay);
    });

  }


import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';

const inputEL = document.querySelector("#datetime-picker");
const buttonEl = document.querySelector("[data-start]");


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      
        if (selectedDates[0] < new Date) {

          Notiflix.Report.failure(`Please choose a date in the future`)
            buttonEl.setAttribute("disabled", "disabled")   
        } else {
            
          buttonEl.removeAttribute("disabled")  
        
        }
        
        buttonEl.addEventListener("click", () => {
            let result = selectedDates[0] - new Date;
            const timerId = setInterval(() => {
                result -= 1000;

                if (result >= 0) {
                   
                    addLeadingZero(convertMs(result)) 
                }
                  
              
                console.log(convertMs(result))
            }, 1000);
            
});

  
  },
};




const daysEl = document.querySelector("[data-days]");
const hourEl = document.querySelector("[data-hours]");
const minuteEl = document.querySelector("[data-minutes]");
const secondEl = document.querySelector("[data-seconds]");



flatpickr(inputEL, options);  

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

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero({ days, hours, minutes, seconds }) {
     
    daysEl.textContent = String(days).padStart(2, 0);
    hourEl.textContent = String(hours).padStart(2, 0);
    minuteEl.textContent = String(minutes).padStart(2, 0);
    secondEl.textContent = String(seconds).padStart(2, 0);
    
}
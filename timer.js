

function startTimer() {
    const timerElement = document.getElementById('counter');
    setInterval(() => {
      sessionStorage.setItem('timerValue', seconds);
      seconds++;
      timerElement.textContent = ` Tempo passato nella sessione attuale: ${seconds} secondi`;
    }, 1000);
  }


  let seconds = sessionStorage.getItem('timerValue') 
  startTimer();
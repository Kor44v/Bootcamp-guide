function timer() {
    let secondsInput = document.getElementById('seconds');
    let seconds = parseInt(secondsInput.value);

    if (isNaN(seconds) || seconds <= 0) {
        alert('Por favor, ingresa un número válido de segundos.');
        return;
    }

    let timerDiv = document.getElementById('numbers');
    timerDiv.innerHTML = seconds;

    let cuenta = setInterval(function() {
        seconds--;
        timerDiv.innerHTML = seconds;

    if (seconds <= 0) {
        clearInterval(cuenta);
        timerDiv.innerHTML = '¡Tiempo terminado!';
    }
    }, 1000);
}

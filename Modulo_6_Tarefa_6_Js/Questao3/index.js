let minutes ,seconds , button, contMin , contSec, result ;
let totalTime, hurryTime ;

button = document.querySelector('#button');

button.addEventListener('click', alarm);

function alarm() {
    minutes = document.querySelector('option[name="minutes"]:checked').value
    seconds = document.querySelector('option[name="seconds"]:checked').value
    
    let alarmAudio = new Audio('alarm_sound.wav');

    button.textContent = 'DESARMAR ALARME'
    button.removeEventListener('click', alarm);
    contMin = parseInt(minutes);
    contSec = parseInt(seconds);
    totalTime = (contMin * 60) + contSec
    hurryTime = (totalTime * 5)/ 100

    result = document.querySelector('#result');

    function alarmTime(){
        if (contSec > -1) {
            result.textContent = contMin + ' : '+ contSec
        contSec = contSec - 1
        totalTime -= 1 
        if (totalTime < hurryTime) {
            result.style.color = 'rgba(255,0,0,1)';
            result.style.fontSize = '100px';
        }
    } else if (contSec == -1) {
        contSec = 59
        contMin = contMin -1
        if (contMin < 0) {
            clearInterval(interval);
            alarmAudio.play()
        }
    }
    }

    let interval = setInterval(alarmTime, 1000);
    
    let button2 = document.querySelector('#button');
    button2.addEventListener('click', stopAlarm);

    function stopAlarm() {
        clearInterval(interval);
        alarmAudio.pause();
        button.textContent = 'ATIVAR ALARME'
        result.textContent = 'Alarme parado!'
        result.style.fontSize = '20px'
        result.style.color = 'rgba(0,0,0,1)'
        button.addEventListener('click', alarm);
        button2.removeEventListener('click', stopAlarm);
    }
}

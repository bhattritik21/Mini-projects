console.log("This is tutorial 54");
const alarmSubmit = document.getElementById('alarmSubmit');
let mess = document.getElementById('alert');

// Add an event listener to the submit button
alarmSubmit.addEventListener('click', setAlarm);

var audio = new Audio('ss.mp3');

// function to play the alarm ring tone
function ringBell() {
    audio.play();
}

// This function will run whenever alarm is set from the UI
function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    str = new Date(alarm.value);
    now = new Date();
    let regex = /([0-9]){4}.([0-9]){2}.([0-9]){2}/;
    if (regex.test(str)) {
        let timeToAlarm = str - now;
        console.log(timeToAlarm);
        if (timeToAlarm >= 0) {
            setTimeout(() => {
                console.log("Ringing now")
                ringBell();
            }, timeToAlarm);
            alarm.classList.remove('is-invalid');
            mess.innerHTML = `  <div  class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Success!</strong> you have entered time format correctly
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`
        }
        else {
            alarm.classList.add('is-invalid');
            mess.innerHTML = `  <div  class="alert alert-danger alert-dismissible fade show" role="alert">
<strong>Alert!</strong> The given time has been passed
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
        }
       
    }

    else {
        alarm.classList.add('is-invalid');
        mess.innerHTML = `  <div  class="alert alert-danger alert-dismissible fade show" role="alert">
<strong>Alert!</strong> Please enter the time format in " yyyy-mm-dd "
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
    }

}

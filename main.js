const secondHand = document.querySelector(".second-hand");          // select the second hand
const minuteHand = document.querySelector(".minute-hand");          // select the minute hand
const hourHand = document.querySelector(".hour-hand");              // select the hour hand
const clockFace = document.getElementById("clock-face");            // select the clock face

let soundOn = false;                                                // set soundOn to false
let timeOutID = null;                                               // set timeOutID to null
let ticking = new Audio('/assets/tick.wav');                        // create new audio object

ticking.load();                                                     // load the audio file

function rotateSecondHandSixDegrees() {                             // create a function that rotates the second hand 6 degrees
  const date = new Date();                                          // create a new date object
  let secHandRotAng = date.getSeconds() * 6;                        // set secHandRotAng to the seconds * 6
  secHandRotAng += 6;                                               // add 6 to the secHandRotAng
  secondHand.style.transform = `rotate(${secHandRotAng}deg)`;       // rotate the second hand by the secHandRotAng
  if (soundOn) {                                                    // if soundOn is true
    ticking.play();                                                 // play the ticking sound          
  }
}

function rotateMinuteHandSixDegrees() {                             // create a function that rotates the minute hand 6 degrees
  const date = new Date();                                          // create a new date object
  let minHandRotAng = date.getMinutes() * 6;                        // set minHandRotAng to the minutes * 6
  minHandRotAng += date.getSeconds() / 10;                          // add the seconds / 10 to the minHandRotAng
  minuteHand.style.transform = `rotate(${minHandRotAng}deg)`;       // rotate the minute hand by the minHandRotAng
}

function rotateHourHandThirtyDegrees() {                            // create a function that rotates the hour hand 30 degrees
  const date = new Date();                                          // create a new date object         
  let hrsHandRotAng = date.getHours() * 30;                         // set hrsHandRotAng to the hours * 30
  hrsHandRotAng += date.getMinutes() / 2;                           // add the minutes / 2 to the hrsHandRotAng
  hourHand.style.transform = `rotate(${hrsHandRotAng}deg)`;         // rotate the hour hand by the hrsHandRotAng
}

clockFace.addEventListener('click', function() {                    // add an event listener to the clock face
  soundOn = !soundOn;                                               // toggle soundOn

  if (soundOn) {                                                    // if soundOn is true         
    const date = new Date();                                        // create a new date object
    const timeRemaining = 1000 - date.getMilliseconds();            // set timeRemaining to 1000 - the milliseconds
    timeOutID = setTimeout(function() {                             // set timeOutID to a setTimeout function
      ticking.play();                                               // play the ticking sound
    }, timeRemaining);                                              // set the timeRemaining to the timeRemaining
  } else {                                                          // if soundOn is false
    clearTimeout(timeOutID);                                        // clear the timeOutID
    ticking.pause();                                                // pause the ticking sound            
  }
})

setInterval(rotateSecondHandSixDegrees, 1000);                      // set the second hand to rotate every 1000ms
setInterval(rotateMinuteHandSixDegrees, 1000);                      // set the minute hand to rotate every 1000ms
setInterval(rotateHourHandThirtyDegrees, 1000);                     // set the hour hand to rotate every 1000ms
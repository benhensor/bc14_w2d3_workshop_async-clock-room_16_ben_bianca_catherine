// We need the second hand of the clock to rotate 6 degrees every second.
   // 'rotate(6deg)
   // function rotateHand()
   // hand.style.transform = `rotate(6
   // setInterval(rotateHand(), 1000); for 1000ms
   // 



// variable for the hand
const hand = document.querySelector(".hand");

// variable for minute
const minute = document.querySelector(".minute");

 // function rotating the hand 6deg
let degrees = 0;
function rotateSecondHand() {
    degrees+=6;
    hand.style.transform = `rotate(${degrees}deg)`;
    // console.log('inside function');
};

 // function 
function rotateMinuteHand() {
    degrees+=6;
    minute.style.transform = `rotate(${degrees}deg)`;
    // console.log('inside function');
};

// call js date object to get realtime seconds get.seconds()

const d = new Date();
let seconds = d.getSeconds();




setInterval(rotateSecondHand, 1000);
// console.log('outside');
//
setInterval(rotateMinuteHand, 60000);

console.log(seconds);
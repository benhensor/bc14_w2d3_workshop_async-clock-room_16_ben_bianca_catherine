// We need the second hand of the clock to rotate 6 degrees every second.
   // 'rotate(6deg)
   // function rotateHand()
   // hand.style.transform = `rotate(6
   // setInterval(rotateHand(), 1000); for 1000ms
   // 



// variable for the hand
const hand = document.querySelector(".hand");
 // function rotating the hand 6deg
function rotateHand() {
    hand.style.transform = `rotate(6deg)`;
    // console.log('inside function');
};

setInterval(rotateHand, 1000);
// console.log('outside');
//
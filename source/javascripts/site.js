// This is where it all goes :)
//


// Set the date we're counting down to
var countDownDate = new Date("Oct 2, 2017 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  console.log(minutes);
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = '<header><h1>' + days + '</h1></header><h2>Days</h2>'
  document.getElementById("hours").innerHTML = '<header><h1>' + hours + '</h1></header><h2>Hours</h2>'
  document.getElementById("minutes").innerHTML = '<header><h1>' + minutes + '</h1></header><h2>Minutes</h2>'


  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "ITS LIVE!";
  }
}, 1000);
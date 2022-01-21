// Business Logic

function beepBoop(num) {
  if (num === 0) {
    console.log('Code ran')
    return "0";
  }
}

// UI Logic
$(document).ready(function() {
  console.log('ready')
  $("#neighborCheck").submit(function(event) {
    event.preventDefault();
    console.log('button');
    let result = beepBoop(0);

    $("#resultSpan").text(result);
    console.log(result);
  });
});
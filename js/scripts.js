// Business Logic

function beepBoop(num) {
  if (num === 0) {
    return num;
  } else if (num === 1) {
    return "Beep!";
  } else if (num === 2) {
    return "Boop!";
  } else if (num === 3) {
    return "Will you be my neighbor?";
  } else {
    return num;
  }
}

// UI Logic
$(document).ready(function() {
  $("#neighborCheck").submit(function(event) {
    event.preventDefault();
    let result = beepBoop(2);

    $("#resultSpan").text(result);
  });
});
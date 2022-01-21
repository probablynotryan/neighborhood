// Business Logic

function beepBoop(inputArray) {
  responseArray = [];
  inputArray.forEach(function(element) {
    if (element === 0) {
      return responseArray.push(0);
    } else if (element === 1) {
      responseArray.push("Beep!");
    } else if (element === 2) {
      responseArray.push("Boop!");
    } else if (element === 3) {
      responseArray.push("Will you be my neighbor?");
    } else {
    }
  });
  return responseArray;
}

// UI Logic
$(document).ready(function() {
  $("#neighborCheck").submit(function(event) {
    event.preventDefault();

    let userInput = [1, 1];
    let result = beepBoop(userInput);

    $("#resultSpan").text(result);
  });
});
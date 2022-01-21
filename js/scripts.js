// Business Logic

function beepBoop(inputNumber) {
  let responseArray = [];
  for (let i = 0; i <= inputNumber; i++){
      if (i === 3) {
      responseArray.push("Will you be my neighbor?");
    } else if (i === 2) {
      responseArray.push("Boop!");
    } else if (i === 1) {
      responseArray.push("Beep!");
    } else if (i == inputNumber) {
      responseArray.push(i + ".");
    } else if (i < 10) {
      responseArray.push(i + ",");
    } else if (i > 9) {
      let bigNumber = i.toString().split('');
      if (bigNumber.includes('3')) {
        responseArray.push("Will you be my neighbor?");
      } else if (bigNumber.includes('2')) {
        responseArray.push("Boop!");
      } else if (bigNumber.includes('1')) {
        responseArray.push("Beep!");
      } else {
        if (i == inputNumber){
          responseArray.push(i + ".");
        } else {
          responseArray.push(i + ",");
        }
      }
    } else {
      if (i == inputNumber){
        responseArray.push(i + ".");
      } else {
        responseArray.push(i + ",");
      }
    }
  };
  return responseArray.join(" ");
}

// UI Logic

$(document).ready(function() {
  $("#neighborCheck").submit(function(event) {
    event.preventDefault();
    let userInput = $("#userInputForm").val();
    let result = beepBoop(userInput);
    $("#results").text(result);
    $("#resultsWindow").show();
  });
});
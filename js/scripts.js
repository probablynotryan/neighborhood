// Business Logic

function beepBoop(inputNumber) {
  let responseArray = [];
  for (let i = 0; i <= inputNumber; i++){
    let num = i.toString().split('');
    if (num.includes('3')) {
      responseArray.push("Will you be my neighbor?");
    } else if (num.includes('2')) {
      responseArray.push("Boop!");
    } else if (num.includes('1')) {
      responseArray.push("Beep!");
    } else {
      if (i == inputNumber){
        responseArray.push(i + ".");
      } else {
        responseArray.push(i + ",");
      }
    }
  }
  return responseArray.join(" ");
};

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

# Won't You Be My Neigh-bot? 

#### By Ryan Bass (theryanbass@gmail.com)

### This is our third project with Epicodus, demonstrating loops, TDD, Javascript, and some new methods.

## Technologies Used

* HTML 5
* CSS 3
* Javascript
* Bootstrap CSS
* jQuery

## Description
This webpage takes a number given by the user and returns a range of numbers ascending to the user's number, replacing any number containing "1", "2", or "3" with a message. Starting with highest priority is "Will you be my neighbor?" when "3" is found in the number, "Boop!" when "2" is found, and "Beep!" when a "1" is found.


### Setup/Installation Requirements
* Git clone this repository to your computer and run "index.html" in a supported browser.
* Enter a number between 0 and 999 the box indicating a number input and press "Submit".
* Below your submission, a window will populate with a range counting up to your number, with specified numbers substituted with messages.
* Enter another number to see a different output!

 #### Tests 
 
 Describe: beepBoop()

Test: "It should return a string ending with period if the count ends on a number."

let userInput = 54;

Code: beepBoop(userInput);

Expected Output: "..., 50, Beep! Boop! Will you be my neighbor? 54."

---
Test: "It should return a string within an array of "Will you be my neighbor?" when the returned range has a "3" in it."

let userInput = 14;

Code: beepBoop(userInput);

Expected Output: "..., 8, 9, "Beep!", "Beep!", "Boop!", "Will you be my neighbor", "Beep!"

---

Test: "It should return an array of "0", "Beep!", "Boop!", "Will you be my neighbor?", "4" when the number 4 is submitted."

let userInput = 4;

Code: beepBoop(userInput);

Expected Output: "0, Beep!, Boop!, Will you be my neighbor?, 4"

---

Test: "It should return an array with a 'Will you be my neighbor?' if the number '3' is submitted."

Code: beepBoop(3);

Expected Output: "Will you be my neighbor?"

---

Test: "It should return an array with a 0 if the number 0 is submitted".

Code: beepBoop(0);

Expected Output: "0"

---

## Known Bugs

None reported.
  

## License

MIT

  

Copyright 2022 (c) Ryan Bass (github.com/probablynotryan)
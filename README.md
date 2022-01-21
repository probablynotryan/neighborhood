
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



### Setup/Installation Requirements


 ##### Tests

 Describe: beepBoop()

Test: "It should return a string of aforementioned substituted strings and at the end, should it end on a number, end with a period."

let userInput = 54;

Code: beepBoop(userInput);

Expected Output: "..., 50, Beep! Boop! Will you be my neighbor? 54."

---
Test: "It should return a string of "Will you be my neighbor" when the returned range has a "3" in it."

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

## Notes

None to report.
  

## License

MIT

  

Copyright 2022 (c) Ryan Bass (github.com/probablynotryan)
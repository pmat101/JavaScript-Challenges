/*    1 typeof
var dstr = "THIS IS A DEMO!";
var dbool = false;
var und;
var dnl = null;

console.log("Variable " + dstr + " is of type " + typeof dstr);
console.log("Variable " + dbool + " is of type " + typeof dbool);
console.log("Variable " + und + " is of type " + typeof und);
console.log("Variable " + dnl + " is of type " + typeof dnl);
*/

/*    2 interpolation
var fname = "PRANAV";
var lname = "MATHUR";
var married = false;
var country = "INDIA";
var age = 31;

console.log(
  `Hi, my name is ${fname} ${lname}. My martial status is ${married}, I belong to ${country} and am ${age} years old`
);
*/

/*    3 toUpperCase
var lstr =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
console.log(lstr.toUpperCase());
*/

/*    4 includes
var str4 = "I love JavaScript, the best programming language!";
console.log(str4.includes("Script"));
*/

/*    5 split
console.log(str4.split(" "));
*/

/*    6 split
var silicon = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
silicon = silicon.split(", ");
console.log(silicon);
*/

/*    7 lastIndexOf
var str7 =
  "Betty Botter bought some butter But she said the butter's bitter If I put it in my batter, it will make my batter bitter But a bit of better butter will make my batter better So `twas better Betty Botter bought a bit of better butter";
console.log(str7.lastIndexOf("butter"));
*/

/*    8 search
var str8 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(str8.search("because"));
*/

/*    9 trim
var str9 = "       Hello World!       ";
console.log(str9.trim());
*/

/*    10 truthy-falsy
console.log(1 == "1");
console.log(1 === 1);
console.log(1 >= 0);

console.log(1 === "1");
console.log(1 == 2);
console.log(1 <= 0);
*/

/*    11 comparison
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");
console.log("python".length != "jargon".length);
*/

/*    12 date
var d = new Date();
console.log(d.getFullYear());
console.log(d.getMonth() + 1);
console.log(d.getDate());
console.log(d.getDay() + 1);
console.log(d.getHours());
console.log(d.getMinutes());
console.log(Math.round(Date.now() / 1000));
*/

/*    13 prompt
var b = prompt("ENTER BASE LENGTH OF TRIANGLE");
var h = prompt("ENTER HEIGHT OF TRIANGLE");
var area = 0.5 * b * h;
*/

/*    14
var x1 = 2;
var x2 = 6;
var y1 = 2;
var y2 = 10;
var m = (y2 - y1) / (x2 - x1);
console.log(m);
*/

/*    15
var x = prompt("INPUT BASE LENGTH OF SLOPE:");
var y = 2 * x - 2;
*/

/*    16
var pi = 3.14;
var r = prompt("ENTER RADIUS OF CIRCLE:");
var area = pi * r * r;
var c = 2 * pi * r;
*/

/*    17 date
var d = new Date();
var year = d.getFullYear();
var month = d.getMonth() + 1;
var date = d.getDate();
var hour = d.getHours();
var min = d.getMinutes();
if (month < 10) month = "0" + month;
if (date < 10) date = "0" + date;
if (hour < 10) hour = "0" + hour;
if (min < 10) min = "0" + min;
console.log(`${year}-${month}-${date} ${hour}:${min}`);
console.log(`${date}-${month}-${year} ${hour}:${min}`);
console.log(`${date}/${month}/${year} ${hour}:${min}`);
*/

/*    18 if-else
var age = prompt("Enter your age:");
if (age >= 18) {
  alert("You are old enough to drive");
} else {
  var diff = 18 - age;
  alert(`wait for ${diff} years to turn 18`);
}
*/

/*    19
function even(n) {
  if (n % 2 == 0) return "Even";
  else return "Odd";
}
console.log(even(123));
*/

/*    20
var score = prompt("ENTER YOUR SCORE:");
var grade;
switch (score) {
  case score <= 100 || score >= 80:
    grade = "A";
    break;
  case score <= 79 || score >= 70:
    grade = "B";
    break;
  case score <= 69 || score >= 60:
    grade = "C";
    break;
  case score <= 59 || score >= 50:
    grade = "D";
    break;
  case score <= 49 || score >= 0:
    grade = "F";
    break;
  default:
    grade = "";
}
*/

/*    21
var month = prompt("ENTER CURRENT MONTH:");
var season;
if (month == "Septemer" || month == "October" || month == "November")
  season = "Autumn";
else if (month == "December" || month == "January" || month == "February")
  season = "Winter";
else if (month == "March" || month == "April" || month == "May")
  season = "Spring";
else if (month == "June" || month == "July" || month == "August")
  season = "Summer";
*/

/*    22
var input = prompt("ENTER MONTH:");
input = input.toLowerCase();
var nd;
switch (input) {
  case "january":
    nd = 31;
    break;
  case "february":
    nd = 28;
    break;
  case "march":
    nd = 31;
    break;
  case "april":
    nd = 30;
    break;
  case "may":
    nd = 31;
    break;
  case "june":
    nd = 30;
    break;
  case "july":
    nd = 31;
    break;
  case "august":
    nd = 31;
    break;
  case "september":
    nd = 30;
    break;
  case "october":
    nd = 31;
    break;
  case "november":
    nd = 30;
    break;
  case "december":
    nd = 31;
    break;
  default:
    alert("ENTER VALID MONTH");
}
*/

/*    23
var month = prompt("ENTER MONTH:");
month = month.toLowerCase();
var year = prompt("ENTER YEAR:");
var nd;
switch (month) {
  case "january":
    nd = 31;
    break;
  case "february":
    if (year % 4 == 0) nd = 29;
    else nd = 28;
    break;
  case "march":
    nd = 31;
    break;
  case "april":
    nd = 30;
    break;
  case "may":
    nd = 31;
    break;
  case "june":
    nd = 30;
    break;
  case "july":
    nd = 31;
    break;
  case "august":
    nd = 31;
    break;
  case "september":
    nd = 30;
    break;
  case "october":
    nd = 31;
    break;
  case "november":
    nd = 30;
    break;
  case "december":
    nd = 31;
    break;
  default:
    alert("ENTER VALID MONTH");
}
*/
/*    24 access external data
var countries = require("./countries");
var webTech = require("./web_techs");
*/

/*    25 edit array
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat"); // Add element to beginning of array
shoppingCart.push("Sugar"); // Add element to end of array
shoppingCart.splice(4, 1); // Remove '1' element from position '4' of array
shoppingCart[3] = "Green Tea";
console.log(shoppingCart);
*/

/*    26 includes
var countries = require("./countries");
if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
  console.log(countries);
}
*/

/*    27 sort, min, max, abs
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(
  ages.sort(function (a, b) {
    return a - b;
  })
); // Sorting the array
console.log(Math.min(...ages)); // Min age
console.log(Math.max(...ages)); // Max age
if (ages.length % 2 == 0) {
  var m1 = ages.length / 2;
  var m2 = m1 + 1;
  console.log(ages[m1] + " " + ages[m2]); // Median age if array length is even
} else {
  var m = Math.ceil(ages.length / 2);
  console.log(ages[m]); // Median age if array length is odd
}
var sum = 0;
for (var i = 0; i < ages.length; i++) {
  sum = sum + ages[i];
}
var avg = sum / ages.length; // Average age
console.log(Math.max(...ages) - Math.min(...ages)); // Range of the ages
console.log(
  Math.abs(Math.max(...ages) - avg) - Math.abs(Math.min(...ages) - avg)
);  // Comparing 2 absolute values
*/

/*    28 prime numbers under 100
for (var i = 0; i <= 100; i++) {
  var flag = 0;
  for (var j = 2; j < i; j++) {
    if (i % j == 0) flag = 1;
  }
  if (flag == 0) console.log(i);
}
*/

/*    29
var odd = 0;
var even = 0;
for (var i = 0; i <= 100; i++) {
  if (i % 2 == 0) even = even + i;
  else odd = odd + i;
}
console.log(`SUM OF ALL EVEN NUMBERS: ${even}`);
console.log(`SUM OF ALL ODD NUMBERS: ${odd}`);
*/

/*    30 random hexadecimal number
console.log(Math.round(Math.random() * 100).toString(16));
*/

/*    31
var countries = require("./countries");
var webTech = require("./web_techs");
console.log(countries.sort());
console.log(webTech.sort());
*/

/*  32
const newArr = [];
for (var i = 0; i < countries.length; i++) {
  if (countries[i].includes("land")) newArr.push(countries[i]);
} // Grab countries containing "land"
var highChar = countries[0];
for (var i = 0; i < countries.length; i++) {
  if (countries[i].length > highChar.length) highChar = countries[i];
} // finding country with max characters
const newArr2 = [];
for (var i = 0; i < countries.length; i++) {
  if (countries[i].length == 4) newArr2.push(countries[i]);
}
const newArr3 = [];
for (var i = 0; i < countries.length; i++) {
  if (countries[i].includes(" ")) newArr3.push(countries[i]);
}
const newArr4 = countries.reverse();
for (var i = 0; i < newArr4.length; i++) {
  newArr4[i] = newArr4[i].toUpperCase();
}
*/

/*    33 function calling
function bmiCalc(weight, height) {
  bmi = weight / (height * height);
  if (bmi < 18.5) console.log("YOU ARE UNDERWEIGHT");
  else if (bmi >= 18.5 && bmi <= 24.9)
    console.log("CONGRATS! YOUR WEIGHT IS NORMAL");
  else if (bmi >= 25 && bmi <= 29.9) console.log("YOU ARE OVERWEIGHT");
  else console.log("WARNING! YOU ARE OBESE");
}
bmiCalc(60, 1.8);
*/

/*    35
const arr = [764, 445, 45, 457, 465, 83, 23, 128, 374, 745, 674, 398, 920, 10];
let flag = 0;
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] == arr[i]) flag++;
  }
  if (flag != 1) {
    console.log("Array items not unique");
    break;
  }
  flag = 0;
}
*/

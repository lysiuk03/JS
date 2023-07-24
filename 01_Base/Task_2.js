let number = +prompt("Enter the number 0-9:");
let symbol;
switch (number) {
  case 0:
    symbol = ")";
    break;
  case 1:
    symbol = "!";
    break;
  case 2:
    symbol = "@";
    break;
  case 3:
    symbol = "#";
    break;
  case 4:
    symbol = "$";
    break;
  case 5:
    symbol = "%";
    break;
  case 6:
    symbol = "^";
    break;
  case 7:
    symbol = "&";
    break;
  case 8:
    symbol = "*";
    break;
  case 9:
    symbol = "(";
    break;
  default:
    symbol = "Eror data!";
}
console.log(symbol);


let y = +prompt("Enter year:");

let isYearLeap = y  % 400 ==  0 || (y  % 4 ==  0 && y  % 100 !=  0);

console.log(isYearLeap ? "yep" : "no");


let day =  +prompt("Enter day:");
let month = +prompt("Enter month:");
let year =+prompt("Enter year:");

let nextDay = day;
let nextMonth = month;
let nextYear = year;

if (month == 2) {
  if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    if (day === 29) {
      nextDay = 1;
      nextMonth = 3;
    } else {
      nextDay++;
    }
  } else {
    if (day === 28) {
      nextDay = 1;
      nextMonth = 3;
    } else {
      nextDay++;
    }
  }
} else if (month === 12) {
  if (day === 31) {
    nextDay = 1;
    nextMonth = 1;
    nextYear++;
  } else {
    nextDay++;
  }
} else if (day === 31 || (day === 30 && (month === 4 || month === 6 || month === 9 || month === 11))) {
  nextDay = 1;
  nextMonth++;
} else {
  nextDay++;
}

console.log(`Next date: ${nextDay}.${nextMonth}.${nextYear}`);
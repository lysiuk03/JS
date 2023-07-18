let start = +prompt("Start number:");
let end = +prompt("End number:");

let sum = 0;

for (let i = start; i <= end; i++) {
  sum =sum+ i;
}

console.log("Sum:", sum);


let numbers = prompt("Enter number:");
let count = 0;

do {
  numbers = Math.floor(numbers / 10);
  count++;
} while (numbers > 0);

console.log("Count:", count);


let positive = 0;
let negative = 0;
let zero = 0;
let even = 0;
let odd = 0;

for (let i = 0; i < 10; i++) {
  let number = parseInt(prompt(`Enter number ${i + 1}:`));
  if (number > 0) {
    positive++;
  } else if (number < 0) {
    negative++;
  } else {
    zero++;
  }
  if (number % 2 === 0) {
    even++;
  } else {
    odd++;
  }
}

console.log("Positive:", positive);
console.log("Negative:", negative);
console.log(" Zero:", zero);
console.log("Even:", even);
console.log("Odd:", odd);


let dayOfWeek = +1;
let continuewhile;

do {
  let dayName;

  switch (dayOfWeek) {
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    case 7:
      dayName = "Sunday";
      break;
    default:
      dayName = "Eror day";
      break;
  }

  continuewhile = confirm(`${dayName}. Next day?`);

  dayOfWeek = dayOfWeek === 7 ? 1 : dayOfWeek + 1;
} while (continuewhile);


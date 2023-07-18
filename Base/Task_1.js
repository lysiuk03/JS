const current_year = 2023;
let birth_year = +prompt("Enter your year of birth:");
let Age= current_year - birth_year;
alert(`You are ${Age} years old.`);

let volume_GB = +prompt("Enter the volume of the flash in GB:");
const files_number = Math.floor(volume_GB * 1024 / 820);
alert(` ${files_number} files`);
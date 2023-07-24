//1----------------------------------------------------------------------------
var array = new Array(20).fill().map(() => Math.floor(Math.random() * 100) + 1);
//2----------------------------------------------------------------------------
array.forEach((element, index) => console.log(`[${index + 1}] - ${element}`));
//3----------------------------------------------------------------------------
const isMultiple7 = array.some((el) => el % 7 == 0);
console.log(`Is the number a multiple of 7: ${isMultiple7}`);
//4----------------------------------------------------------------------------
array.sort((a, b) => b - a);
//5----------------------------------------------------------------------------
const halfLength = Math.floor(array.length / 2);
array.fill(0, halfLength);
//6----------------------------------------------------------------------------
array.splice(0, 3);
//7----------------------------------------------------------------------------
function haveEqualElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return true;
            }
        }
    }
    return false;
}
console.log(`Have equal elements: ${haveEqualElements(array)}`);
//8----------------------------------------------------------------------------
var array2 = array.slice(halfLength);
console.log("Array 2 :", array2);
//9
const countEvenNum = array.reduce((count, element) => count + (element % 2 === 0 ? 1 : 0), 0);
console.log(`The number of even numbers in the array: ${countEvenNum}`);
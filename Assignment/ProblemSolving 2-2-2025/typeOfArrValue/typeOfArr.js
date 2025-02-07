let arr = [];
function typeOfArray(array) {
for (i = 0; i < array.length; i++) {
      arr[i] = typeof array[i];
    }
    console.log(`The type of each value in array is : ==> ${arr}`);
    return `The type of each value in array is : ==> ${arr}`;

}
document.write(typeOfArray([1, "karim", null, true, undefined]));
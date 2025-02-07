let sum = 0;
function sumOfArray(array) {
for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(`The sum of all numbers in array is : ==> ${sum}`);
    return `The sum of all numbers in array is : ==> ${sum}`;

}
document.write(sumOfArray([1, 2, 3, 4, 5]));
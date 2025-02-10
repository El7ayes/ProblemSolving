let SumOfArray = ([...arr]) => {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
document.write( `The Sum of all numbers in array IS ===> ${SumOfArray([1, 2, 3, 4, 5, 6])}`);
console.log( `The Sum of all numbers in array IS ===> ${SumOfArray([1, 2, 3, 4, 5, 6])}`);
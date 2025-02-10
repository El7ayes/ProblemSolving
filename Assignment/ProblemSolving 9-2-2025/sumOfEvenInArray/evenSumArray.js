let EvenSumArray = ([...arr]) => {
    let EvenSum = 0;
    for (let num of arr) {
        if (num % 2 == 0) {
            EvenSum += num;
        }
    }
    return EvenSum;
}
document.write(` The Sum of all even numbers in array IS ===> ${EvenSumArray([1, 2, 3, 4, 5, 6])}`)
console.log(` The Sum of all even numbers in array IS ===> ${EvenSumArray([1, 2, 3, 4, 5, 6])}`);

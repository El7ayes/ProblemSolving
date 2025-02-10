let secondlargestNumberOfArray = ([...arr]) => {
    let SecondLargest = Math.max(...arr) - 1;
    return SecondLargest;
}
document.write( `The second largest number in array IS ===> ${secondlargestNumberOfArray([1, 2, 3, 4, 9, 5, 6, 7])}`);
console.log( `The second largest number in array IS ===> ${secondlargestNumberOfArray([1, 2, 3, 9, 4, 5, 6])}`);
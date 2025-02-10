let FromOdd2EvenArray = ([...arr]) => {
    let arrange = [];
    for (let num of arr) {
        if (num % 2 == 1) {
            arrange.push(num);
        }
    }
    for (let num of arr) {
        if (num % 2 == 0) {
            arrange.push(num);
        }
    }
    return arrange;
}
document.write(`The Rearranged array Started from Odd to Even IS ===> ${FromOdd2EvenArray([1, 2, 3, 4, 5, 6])}`);
console.log("The Rearranged array Started from Odd to Even IS ===>" , FromOdd2EvenArray([1, 2, 3, 4, 5, 6]));
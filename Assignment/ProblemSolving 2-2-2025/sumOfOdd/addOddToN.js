function sumOddNumbers(n) {
    return ((n + 1) / 2) ** 2;
}
function addOddToN(n) {
    const sum = (((n+1) /2)**2);
    console.log(`The sum of odd numbers from 1 to ${n} is ==> ${sum}`);
    return `The sum of odd numbers from 1 to ${n} is ==> ${sum}`;
}

document.write(addOddToN(5));
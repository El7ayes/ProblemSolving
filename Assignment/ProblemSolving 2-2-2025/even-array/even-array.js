var arrLength = +prompt("Enter Array Length...")
var contentArr = []
for (var i = 0; i < arrLength; i++){
    var item = +prompt(`Enter Array Content  ${i + 1}`);
    contentArr[i] = item;
    // even number
    if (contentArr[i] % 2 == 0) {
        console.log(contentArr[i]);
    }
    
}

const x = [1, 2, 3, 4, 5];

const y = [6, 7, 8, 9, 10];

const z = [...x, ...y];

console.log(z);

// console.log(contentArr);

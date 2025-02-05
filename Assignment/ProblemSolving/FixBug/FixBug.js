function printArray(number) {
    var newArray = [];
  
    for(var i = 1; i <= number; i++) {
      newArray.push(i);
    }
    console.log(`The array from 1 to ${number} is ===>  [ ${newArray} ]`);
    return ` The array from 1 to ${number} is ===>  [ ${newArray} ]`; 
  }

document.write(printArray(6));
document.write(" Fixed ;)");
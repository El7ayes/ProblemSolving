let uppercaseArray = (arr) => {
  let StringUppercaseArray = [];
  for (let words of arr) {
    StringUppercaseArray.push(words.toUpperCase());
  }
  return StringUppercaseArray;
};

document.write(`This is the Uppercase array ===> ${uppercaseArray(["kareem","yousef","mohamed","ali","ahmed","amr"])}`);
console.log(uppercaseArray(["kareem", "yousef", "mohamed", "ali", "ahmed", "amr"]));

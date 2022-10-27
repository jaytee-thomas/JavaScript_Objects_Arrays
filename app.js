document.write(
  "TrueCoders Node-10 (JavaCrip) Gangstas!\n==========\n <br></br>"
);
document.write(`<br></br>`);

// Exercise 1 Section
document.write("Exercise 1: The Sum of an Array\n==========\n<br></br>");

const numbers = [2, 22, 12, 17, 18, 39, 129];

let sum = 0;
const sumArray = (arr) => {
  arr.forEach((number) => {
    sum += number;
    return sum;
  });
  return sum;
};

document.write(`The sum of this Array is: ${sumArray(numbers)}<br></br>`);
document.write(`<br></br>`);

// Exercise 2 Section
document.write("Exercise 2: Favorite Book:\n==========\n <br></br>");

const book = {
  title: "The Age of Reason",
  pages: 220,
  readCount: "countless",
  info: function () {
    return `${this.title} by: Thomas Paine, <br></br> \n (${this.pages}) pages, <br></br>\n read count: ${this.readCount}.`;
  },
};

document.write(book.info());
document.write(`<br></br>`);
document.write(`<br></br>`);

//Exercise 3 Section
document.write("Exercise 3: Reverse a String: \n==========\n <br></br>");

let sentence = "The quick brown fox jumps over the lazy dog";

const reverseString = (str) => {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
};

document.write(`Foward: ${sentence} <br></br>`);
document.write(`Reverse: ${reverseString(sentence)}`);

document.write(`<br></br>`);
document.write(`<br></br>`);

//Exercise 4 Section
document.write("Exercise 4: Parse a CSV: \n==========\n <br></br>");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

const parseCSV = (str) => {
  let splitString = str.split("\n");
  let headers = splitString[0].split(",");
  let result = [];
  for (let i = 1; i < splitString.length; i++) {
    let obj = {};
    let currentLine = splitString[i].split(",");
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentLine[j];
    }
    result.push(obj);
  }
  return result;
};

document.write(parseCSV(csvData));

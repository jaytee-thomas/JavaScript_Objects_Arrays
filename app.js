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
  let splitString = str.split("").reverse().join("");
  return splitString;
};

let jasonSolution = "";
sentence.split(" ").forEach((word) => {
  jasonSolution += reverseString(word) + " ";
});

document.write(`Foward: ${sentence} <br></br>`);
document.write(`Reverse: ${jasonSolution}`);

document.write(`<br></br>`);
document.write(`<br></br>`);

//Exercise 4 Section
document.write("Exercise 4: Parse a CSV: \n==========\n <br></br>");

//Start with the following code:

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function parseCSV(csvData) {
  let splitData = csvData.split("\n");
  let headers = splitData[0].split(",");
  let data = splitData.slice(1);
  let parsedData = [];
  data.forEach((row) => {
    let rowData = row.split(",");
    let obj = { name: rowData[0], age: rowData[1] };
    for (let i = 0; i < headers.length; i++) {
      obj[headers[i]] = rowData[i];
    }
    parsedData.push(obj);
  });
  return parsedData;
}

document.write(JSON.stringify(parseCSV(csvData), null, 2));

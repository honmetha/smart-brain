// Ex 1
let array1 = [1, 2, 30, 400];
let array2 = array1.map(element => {
  return element * 2;
});

// Ex 2
let array1 = [1, 2, 3, 4];
let array2 = array1.map(element => {
  return element.toString();
});

// Ex 3
let array1 = [1, "1", 2, {}];
let array2 = array1.map(element => {
  return typeof element;
});

// Ex 4
let array1 = ["apple", "banana", "orange"];
let array2 = array1.map(element => {
  return element.toUpperCase();
});
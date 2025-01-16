// 
// Basic Operators
//
console.log("Hello World!")

let name = "John";
let surname = "Doe";
console.log(name);
console.log(surname);

let age = 11;
console.log(age); // outputs 11 to the console
age = 54;
 console.log(age); // what will be output now?

const pi = 3.14;
console.log(pi); // What will be output?

console.log("(3 + 2) - 76 * (1 + 1)");
console.log((3 + 2) - 76 * (1 + 1));
console.log(23+97);
const sum = 1+2+3+4+5+6;
console.log("sum " + sum);
const arithmetic = (4 + 6 + 9) / 77 ;
console.log("(4 + 6 + 9) / 77"+arithmetic);
console.log((arithmetic-0.24675)<0.001);
let m = 10;
let a = 3;
console.log(a);
console.log(9*a);
let n = 7 * m;
console.log(n);


// 
// Basic DOM manipulation
// 

const body = document.querySelector("body");

let redP = document.createElement("p");
redP.textContent = "Hey I'm red!";
redP.style.color = "red";
body.appendChild(redP);

let h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style["color"] = "blue";
body.appendChild(h3);

let div = document.createElement("div");
div.style.borderStyle = "solid";
div.style.borderColor = "black";
div.style.backgroundColor = "pink";
let h1 = document.createElement("h1");
h1.textContent = "I’m in a div";
div.appendChild(h1);
let divP = document.createElement("p");
divP.textContent = "ME TOO!";
div.appendChild(divP);
body.appendChild(div);

//
// Basic Array Functions
//


function sumOfTripledEvens(array){
  return array
    .filter((x) => {return x % 2 == 0;})
    .map((x) => {return x * 3;})
    .reduce((sum, current) => {
      return sum + current;
    });
}


//
// Basic Objects
//

let user = {};
user['name'] = 'John';
user['surname'] = 'Smith';
user['name'] = 'Pete';
delete user['name'];

function isEmpty(obj) {
  return Object.keys(obj).length == 0;
}

function sumSalaries(salaries) {
  let sum = 0;
  for (key in obj) {
    sum += salaries[key];
  }
  return sum;
}

function multiplyNumeric(obj) {
  for (key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}
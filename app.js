console.log("hello");

let celsius = 10;

function cToF() {
  return celsius * 1.8 + 32;
}

console.log(cToF());

let cash = 80;
let price = 60;
const difference = cash - price;

// if else if else

if (cash > price) {
  console.log(`Thank you! Here's ${difference} as your change`);
} else if (cash === price) {
  console.log(`Thank you! Have a nice day!`);
} else {
  console.log(`Not enough money you owe ${difference * -1}`);
}

let isStoreOpen = true;

let str = isStoreOpen && cash >= price ? "give reciept" : "do not give reciept";
console.log(str);

let count = 1;

// Loops

while (count <= 100) {
  count = count + 1;
  console.log("this ran");
}

for (let i = 1; i <= 20; ++i) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} -> Frontend Simplified`);
  } else if (i % 3 === 0) {
    console.log(`${i} -> Frontend`);
  } else if (i % 5 === 0) {
    console.log(`${i} -> Simplified`);
  } else {
    console.log(`${i}`);
  }
}

let str2 = "Frontend Simplified";

for (let i = 0; i < str2.length; ++i) {
  console.log(str2[i]);
}

// First way of defining function

function conCToF(celc) {
  return celc * 1.8 + 32;
}

console.log(conCToF(10));

// Second way

const conCToF2 = (celc) => {
  return celc * 1.8 + 32;
};

console.log(conCToF2(10));

// Arrays

let arr = [20, 30, 40, 50, 100];

console.log(arr[arr.length - 1]);
console.log(arr[0]);

// adding elements on array

arr.push(200);

console.log(arr);

// Filter Method - Callback Function

let newArr = arr.filter((elem) => {
  console.log(elem);
});

console.log(newArr);

// at this point line 98 is only going to give an empty array
// That is bc the old array is only going to add an elem ont the newArr if the function returns true
// meaning the arr filter is gooing through each elem and asking is this true?
// If this is true then throw it onto the new array, if its not true leave out of newArr

let newArr2 = arr.filter((elem) => {
  console.log(elem);
  return true;
});

console.log(newArr2);

// filter out items that are less than 50

let newArr3 = arr.filter((elem) => {
  if (elem <= 50) {
    return true;
  }
});

console.log(newArr3);

// That was the long method: short method follows

let newArr4 = arr.filter((elem) => elem <= 50);

console.log(newArr4);

// Filter out bad grades

let grades = ["A+", "A", "FAIL"];

let newGrades = grades.filter((elem) => {
  if (elem !== "FAIL") {
    return true;
  }
});

console.log(newGrades);

// Short method

newGrades2 = grades.filter((elem) => elem !== "FAIL");

console.log(newGrades2);

// looping over every element in an array

for (let i = 0; i < grades.length; ++i) {
  console.log(grades[i]);
}

// Filter out bad grades without the filter method - Use Loops

let grades2 = ["A+", "A", "B-", "FAIL", "FAIL"];
let newGrades3 = [];

for (let i = 0; i < grades2.length; ++i) {
  if (grades2[i] !== "FAIL") {
    newGrades3.push(grades2[i]);
  }
}

console.log(newGrades3);

// Map Method - Callback Function

// turn dollars into cents

let dollars = [1, 5, 10, 3];

let cents = dollars.map((elem) => {
  return elem * 100;
});

console.log(cents);

// short way

let cents2 = dollars.map((elem) => elem * 100);

console.log(cents2);

// same Q, no Map Method - Must for loop

let dollars2 = [1, 5, 10, 3];
let cents4 = [];

for (let i = 0; i < dollars2.length; ++i) {
  cents4.push(dollars2[i] * 100);
}

console.log(cents4);

// Objects

// let userFirstName = 'Chase'
// let userLastName = 'Mitchem'
// let userSubscriptionStatus = 'VIP'
// let userDiscordId = '#000'

let users = [
  {
    firstName: "Chase",
    lastName: "Mitchem",
    password: "test123",
    subscriptionStatus: "VIP",
    discordId: "#000",
    lessonsCompleted: [0, 1],
  },
  {
    firstName: "Mitri",
    lastName: "lens",
    password: "teast321",
    subscriptionStatus: "regular",
    discordId: "#001",
    lessonsCompleted: [0, 1, 3, 4],
  },
  {
    firstName: "zen",
    lastName: "table",
    subscriptionStatus: "sub",
    discordId: "#002",
    lessonsCompleted: [0, 1, 3, 4, 8, 9],
  },
];

console.log(users[0].firstName[0]);

function loginUser(firstName, password) {
  for (let i = 0; i < users.length; ++i) {
    if (users[i].firstName === firstName && users[i].password === password) {
      console.log("Successfully Signed in!");
    }
  }
}

loginUser("Mitri", "teast321")

// resgitser a new user, and push that user onto existing array

function registerUser (user) {
    users.push(user)
}

registerUser({
    firstName: "me",
    lastName: "me2",
    password: "testing",
    subscriptionStatus: "VIP",
    discordId: "#003",
    lessonsCompleted: [0, 3, 8]
});

console.log(users)

// DOM - Document Object Modifier - Lets you access HTML elements in JavaS

// 1) This is going to the class of title in the HTML, id of title would be #title
console.log(document.querySelector('.title'))

// 2)
console.log(document.getElementById('subheader'))

// Changing inner HTML
document.querySelector('.title').innerHTML = "Hey there"

// Change Css of element on the DOM
document.querySelector(".title").style.color = "blue"
document.querySelector(".title").style.fontSize = "48px"

// Click Listener

function changeTitleToRed () {
    document.querySelector(".title").style.color = "green"
}
// Show Rating 

function showRating(num) {
    let ratings = ""
for (let i = 0; i < num; ++i) {
    if (i === num) {
        ratings = ratings + "*"
    }
    else {
        ratings = ratings + "* "
    }
}
return ratings
}

console.log(showRating(8))

// sorting low to high

function sortLowToHigh(numbers) {
    return numbers.sort((a, b) => b - a)
}

console.log(sortLowToHigh([1, 5, 0, 203, 235, 645, 1]))

function sortHighToLow () {
    return numbers.sort((a, b) => b.price - a.price)
}

console.log(
    sortHighToLow([
        { id: 1, price: 50},
        { id: 2, price: 0},
        { id: 3, price: -500},
    ])
)

async function firstSixIncomplete(usersId) {
    const promise = await fetch("https://jasonplaceholder.typicode.com/todos")
    const result = await promise.json()
    const incomleteTasks = result.filter(elem => elem.completed)
}

console.log(firstSixImcomplete(6))

function showRating(rating) {
    let rating = ""
    for (let i = 0; i < Math.floor(rating); ++i) {
        ratings += "*"
        if (i !== Math.floor(rating) - 1) {
            ratings =+ " "
        }
    }
    if (!Number.isInteger(rating)) {
        ratings += " ."
    }
    return ratings;
}

console.log(showRating(3.5))

function sortHighToLow(numbers) {
    return numbers.sort((a, b) => {
        return b.price - a.price
    })
}

console.log(
    sortHighToLow([
        { id: 1, price: 50}
        { id: 2, price: 0}
        { id: 3, price: -500}
    ])
)

async function postsByUser(userId) {
    const promise = await fetch("https://jsonplacehol.typicode.com/posts")

    const result = await promise.json()

    const posts = result.filter(elem => elem.userId === userId)

    console.log(posts)
}

postsByUser(6)

const reversedString = (str) => {
    return str.split("").reverse().join("")
}

const reverseInteger = (int) => {
    const reversed = int.toString().split("").reverse().join("");

    return parseInt(reversed) * Math.sign(int);
}

module.exports = reverseInteger

const stringifyId = (arr) => {
    const idArray = arr.map(obj => obj.id);

    const uniqueIdArray = [...new Set(idArray)];

    return uniqueIdArray.join(", ")
}

const str = "Simplified !";
const charMap = new Map();

for (const char of str) {
    char = 1;
    const count = charMap.get(char);
    charMap.setg(char, count + 1 || 1);
}

for (const [char, count] of charMap) {
    console.log(char, count)
}
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

const arrayChunk = (array, size) => {
    const chunkedArray = [];

    for (let i = 0; i < array.length; i += size) {
        const subaray = array.sclice(i, i + size);
        chucnkedArray.push(subarray);
    }
}

const palindrome = (str) => {
    const middle = Math.floor(str.length / 2);
    for (let i =0; i < middle; ++i) {
        const oppositeIndex = str.length - 1 - i;
        if (str[i] !== str[oppositeIndex]) {
            return false;
        }
    }
    return true
}

module.exports = palindrome

const pyramid = (n) => {
    const columnWidth = 2 * n - 1;
    const middle = Math.floor(columnWidth / 2);

    for (let row = 0; row < n; ++row) {
        let step = "";

        for (let column = 0; column < columnWidth; ++column) {
            if (column >= middle - row && column <= middle + row) {
                step += "#"
            }
            else {
                sttep += " "
            }
        }
        console.log(step)
    }
}

const steps = (n) => {
    for (let row = 0; row < n; ++row) {
        let step = "";
        for (let column = 0; column < n; ++column) {
            if (column <= row) {
                step += "#"
            }
            else {
                step += " ";
            }
        }
        console.log(step)
    }
}

const maxCharacter = (str) => {
    const charMap = {};
    let max = 0;
    let maxChar = "";

    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char
        }
    }

    return maxChar
}

maxCharacter()
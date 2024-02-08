function calcRemainder (num1, num2) {
    return num1 % num2
}

console.log(calcRemainder(9, 8))

//

function isOdd(num3) {
    if (num3 % 2 !== 0) {
        return true
    }
    else {
        return false
    }
}

console.log(isOdd(3))

const isOdd2 = (elem) => {return elem % 2 !== 0}

console.log(isOdd2(20))

//

function booleanInteger(num4) {
    if (num4 % 2 === 0) {
        return 1
    }
    else {
        return -1
    } 
}

console.log(booleanInteger(10))

// short hand

const booleanInteger2 = (elem) => {return elem % 2 === 0 ? 1 : -1}

console.log(booleanInteger2(1))

// 

function isLogAndSub(login, subscribed) {
    if (login === "login" && subscribed === "subscribed") {
        return true
    }
    return false
}

console.log(isLogAndSub("login", "subscribed"))

function filterOutFalsy(thing1, thing2) {
    if (!thing1) {
        return thing1
    }
    return thing2
}

console.log(filterOutFalsy(true, "DOF"))

function arrLength (arr) {
    return arr.length
}

console.log(arrLength([1]))

function arrSum (arr3) {
    let sum = 0
    for (let i = 0; i < arr3.length; ++i) {
        sum = sum + arr3[i]
    }
    return sum
}

console.log(arrSum([2, 3, 4, 100]))

function progressiveSum (num) {
    let sum1 = 0
    for (let i = 1; i <= num; ++i) {
        sum1 = sum1 + i
    }
    return sum1
}

console.log(progressiveSum(5))

function calcTime (seconds) {
    let timerMinutes = Math.floor(seconds / 60)
    let timerSeconds = seconds % 60

    if (timerMinutes.toString().length === 1) {
        timerMinutes = '0' + timerMinutes
    }

    return timerMinutes + ':' + timerSeconds
}

console.log(calcTime(500))

function getMax (arr5) {
    let max = arr5[0]

    for (let i = 0; i < arr5.length; ++i) {
        if (arr5[i] > max) {
            max = arr5[i]
        }
    }
    return max
}

console.log(getMax([1, 3, 800, 900, 7, 18]))

function reverseString(str3) {
    let reversedString = ''
    for (let i = 0; i < str3.length; ++i) {
        reversedString = str3[i] + reversedString
    }
    return reversedString
} 

console.log(reverseString('Chase'))


function reverseString2(str4) {
    str4.split('').reverse().join('')
}

console.log(reverseString("Chase Mitchem"))

// split turns a string into array, then you can use reverse function, then you join the array to 
// turn it back into a string

function convertToZeros(arr5) {
    let arr6 = []
    for (let i = 0; i < arr5.length; ++i) {
        arr6[i] = 0
    }
    return arr6
}

console.log(convertToZeros([5, 100, 1]))

// or 

function convertToZeros1(arr6) {
    return new Array(5).fill(0)
}

console.log(convertToZeros1([9, 3, 1, 5, 1]))

// or

let arr7 = [1, 4, 7, 34, 65]

let arr8 = arr7.map(elem => elem * 0)

console.log(arr8)

//


function removeApples(arr9) {
    let arr10 = []

    for (let i = 0; i < arr9.length; ++i) {
        if (arr9[i] !== "Apple") {
            arr10.push(arr9[i])
        }
    }
    return arr10
}

console.log(removeApples(["Banana", "Apple", "Tangerine"]))

// or

function removeApples2(arr11) {
    return arr11.filter(elem => elem !== "Apple")
}

console.log(removeApples2(["Banana", "Apple", "Tangerine", "Squash", "Apple"]))

//

function filterOutFalsy(arr12) {
    let arr13 = []
    for (let i = 0; i < arr12.length; ++i) {
        if (!!arr12[i] === true) {
            arr13.push(arr12[i])
        }
    }
    return arr13
}

console.log(filterOutFalsy(['', 0, null, undefined, "0", [], false, "Tomato"]))

//

function filterOutFalsy2(arr14) {
    let arr15 = arr14.filter(elem => !!elem === true)
    return arr15
}

console.log(filterOutFalsy2(['', 0, null, undefined, "0", [], false, "Tomato"]))

//

function convertToBoolean(arr16) {
    return arr16.map(elem => !!elem)
}

console.log(convertToBoolean([500, 0, "Chase", "", []]))
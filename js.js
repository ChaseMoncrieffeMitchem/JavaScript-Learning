function filterOutFalsy (elem1, elem2) {
    if (!!elem1 === false) {
        return elem1
    }
    else {
        return elem2
    }
}

console.log(filterOutFalsy(true, "Dog"))

// or 

function filterOutFalsyShort(elem1, elem2) {
    return !!elem1 === false ? elem1 : elem2 
}

console.log(filterOutFalsyShort(true, "dog"))

// Return array length

function arrLength(arr) {
    return arr.length
}

console.log(arrLength([1, 2, 3, 5]))

// Find Sum of array

function arrSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; ++i) {
        sum = sum + arr[i]
    }
    return sum
}

console.log(arrSum([2, 3, 4]))

// Progressive Sum

function progressiveSum (num) {
    let sum = 0
    for (let i = 1; i <= num; ++i) {
        sum = sum + i
    }
    return sum
}

console.log(progressiveSum(7))

// Calculate Time 

function calcTime(num) {
    let seconds = num % 60
    let minutes = num / 60

    if (minutes.toString().length === 1) {
        minutes = "0" + minutes
    }

    return Math.floor(minutes) + ":" + seconds
}

console.log(calcTime(500))

// Find the largest number

function getMax (arr) {
    let max = arr[0]
    
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

console.log(getMax([5, 100, 0]))

// Reverse a String - decrementing loop

function stringReverse(str) {
    let stringReverse = ""
    for (let i = str.length; i >= 0; --i) {
        stringReverse = stringReverse + str[i]
    }
    return stringReverse
}

console.log(stringReverse("Chase Mitchem"))

// Reverse a String - incrementing loop

function stringReverse2(str) {
    let reversedString = ""
    for (let i = 0; i < str.length; ++i) {
        reversedString = str[i] + reversedString
    }
    return reversedString
}

console.log(stringReverse2("Chase Moncrieffe"))

// Reverse a string - array reverse property - split turns string into array, reverse it, then join turns array into string

function reverseString3(arr) {
    return arr.split("").reverse().join("")
}

console.log(reverseString3("Chase Da Dude"))

// Turn every elem in array into 0 - For loop

function convertToZeros(arr) {
    for (let i = 0; i < arr.length; ++i) {
        arr[i] = 0
    }
    return arr
}

console.log(convertToZeros([5, 100, 0, 6]))

// Same Q - Fill Method

function convertToZeros2(arr) {
    return new Array(arr.length).fill(0)
}

console.log(convertToZeros2([0, 500, 2, 5]))

// Same Q - Array Map

function convertToZeros3(arr) {
    return arr.map(elem => elem * 0)
}

console.log(convertToZeros3([0, 80, 23, 41, 4]))

// Filter out the Apples - For loop

function removeApples(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== "Apples") {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(removeApples(["Apples", "Banana", "Orange"]))

// Filter out Apples - Array Filter

function removeApples2(arr) {
    return arr.filter(elem => elem !== "Apples")
}

console.log(removeApples2(["Apples", "Banana", "Orange"]))

// Filter out Falsy Values - For loop

function filterOutFalsy(arr) {
    newArr = []
    for (let i = 0; i < arr.length; ++i) {
        if (!!arr[i] === true)
        newArr.push(arr[i])
    }
    return newArr
}

console.log(filterOutFalsy(["", [], 0, null, undefined, "0"]))

// Filter out Falsy - Array filter 

function filterOutFalsy2(arr) {
    return arr.filter(elem => !!elem === true )
}

console.log(filterOutFalsy2(["", [], 0, null, undefined, "0"]))

// Truthy to True; Falsy to False

function convertToBoolean(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; ++i) {
        if (!!arr[i] === true) {
            newArr.push(!!arr[i])
        }
        else if (!!arr[i] === false) {
            newArr.push(!!arr[i])
        }
    }
    return newArr
}

console.log(convertToBoolean([500, 0, "Chase", "", []]))

// Same Q - Much Shorter

function convertToBoolean2(arr) {
    return arr.map(elem => !!elem)
}

console.log(convertToBoolean2([500, 0, "Chase", "", []]))
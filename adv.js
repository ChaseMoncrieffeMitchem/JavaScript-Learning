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
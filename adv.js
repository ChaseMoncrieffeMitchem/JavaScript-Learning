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
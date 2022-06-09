//Find the smallest integer in the array
class SmallestIntegerFinder {
    findSmallestInt(args) {return Math.min.apply(null, args)}
}

//Reversed Strings
const solution=(str)=>str.split("").reverse().join("")

//Name on billboard
const billboard = (name, price = 30) => {
    let a = 0
    for (let i = 0; i < name.length; i++) {
        a = a + price
    }
    return a
}

//I love you, a little , a lot, passionately ... not at all
const howMuchILoveYou = (nbPetals) => {
    let arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
    if (nbPetals <= 6) {
        return arr[nbPetals - 1]
    } else if (nbPetals % 6 === 0) {
        return arr[5]
    }
    return arr[nbPetals % 6 - 1]
}

//Remove First and Last Character
const removeChar = (str) => str.slice(1, str.length - 1)

//Return Negative
const makeNegative = (num) => num > 0 ? num * (-1) : num

// Opposite number
const opposite = (number) => number * (-1)

// Convert boolean values to strings 'Yes' or 'No'.
const boolToWord = (bool) => bool ? 'Yes' : 'No'

// Multiply
const multiply = (a, b) => a * b

// Convert a Number to a String!
const numberToString = (num) => num.toString();

// Filter out the geese
const gooseFilter = (birds) => {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(x => !geese.includes(x))
}

// Even or Odd
const even_or_odd = (number) => number % 2 == 0 ? 'Even' : 'Odd'

// Convert a string to an array
const stringToArray = (string) => string.trim().split(" ")

// If you can't sleep, just count sheep!!
const countSheep = (num) => {
    let result = '';
    for (let i = 1; i <= num; i++) {
        result += i.toString() + ' sheep...';
    }
    return result;
}

// String repeat
const repeatStr = (n, s) => s.repeat(n)

// Merge two sorted arrays into one
const mergeArrays = (arr1, arr2) => {
    let arr = arr1.concat(arr2)

    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    }

    let arr3 = arr.sort(compareNumeric);
    let arr4 = Array.from(new Set(arr3));
    return arr4;
}

// Beginner - Lost Without a Map
const maps = (x) => x.map(i => i * 2)

// Hello, Name or World!
const hello = (name) => `Hello, ${name ? (name[0].toUpperCase() + name.slice(1).toLowerCase()) : 'World'}!`

// Area or Perimeter
const areaOrPerimeter = (l, w) => l === w ? l * w : (l + w) * 2

// Sum of positive
const positiveSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}

// Sum The Strings
const sumStr = (a, b) => (Number(a) + Number(b)).toString()

// Sentence Smash
const smash = (words) => words.join(" ")

// Reverse List Order
const reverseList = (list) => list.reverse()

// Opposites Attract
const lovefunc = (flower1, flower2) => flower1 % 2 !== flower2 % 2

// USD => CNY
const usdcny = (usd) => (usd * 6.75).toFixed(2) + " Chinese Yuan"

// Function 3 - multiplying two numbers
const multiply = (a, b) => a * b

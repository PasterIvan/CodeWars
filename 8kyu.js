//Remove First and Last Character
const removeChar=(str)=>str.slice(1, str.length-1)

//Return Negative
const makeNegative=(num)=> num>0 ? num*(-1):num

// Opposite number
const opposite = (number) => number*(-1)

// Convert boolean values to strings 'Yes' or 'No'.
const boolToWord=(bool)=>bool?'Yes':'No'

// Multiply
const multiply = (a, b) => a * b

// Convert a Number to a String!
const numberToString=(num)=>num.toString();

// Filter out the geese
const gooseFilter = (birds) => {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
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
    var arr3 = arr.sort(compareNumeric);
    let arr4 = Array.from(new Set(arr3));
    return arr4;
}

// Beginner - Lost Without a Map
const maps = (x) => x.map(i => i*2)

// Hello, Name or World!
const hello = (name) => `Hello, ${name ? (name[0].toUpperCase() + name.slice(1).toLowerCase()) : 'World'}!`

// Area or Perimeter
const areaOrPerimeter = (l , w) => l === w ? l*w : (l+w)*2

// Sum of positive
const positiveSum = (arr) => {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}

// Sum The Strings
const sumStr = (a,b) => (Number(a) + Number(b)).toString()

// Sentence Smash
const smash = (words) => words.join(" ")

// Reverse List Order
const reverseList = (list) => list.reverse()

// Opposites Attract
const lovefunc = (flower1, flower2) => flower1 % 2 !== flower2 % 2

// USD => CNY
const usdcny = (usd) => (usd * 6.75).toFixed(2) + " Chinese Yuan"

// Function 3 - multiplying two numbers
const multiply = (a,b) => a * b

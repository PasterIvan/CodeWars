//Beginner Series #3 Sum of Numbers
const getSum = (a,b) => {
    let c = 0
    if (a<b) {
        for (; a <= b; a++){
            c += a;
        } return c
    } else if (a>b){
        for (; b <= a; b++){
            c += b;
        } return c
    }
    else {
        return a
    }
}

//Beginner Series #3 Sum of Numbers
const getSum=(a,b)=> a!==b ? a+b : a

//Sum of two lowest positive integers
const sumTwoSmallestNumbers= (numbers) => {
    let arr = numbers.sort((a,b)=>a-b)
    return arr[0]+arr[1]
}

//Complementary DNA
const DNAStrand=(dna)=>dna.split('').map(a=>{
        if (a==='A'){return 'T'}
        if (a==='T'){return 'A'}
        if (a==='C'){return 'G'}
        if (a==='G'){return 'C'}
    }).join('')

//Shortest Word
const findShort=(s)=>s.split(" ").sort((a,b)=>a.length<b.length?-1:+1)[0].length

//Mumbling
const accum=(s)=> s.split('').map((x, i) => (x.toUpperCase() + x.toLowerCase().repeat(i))).join('-')

//Jaden Casing Strings
String.prototype.toJadenCase = function () {
    return this.split(' ').map(x=>x[0].toUpperCase() + x.slice(1)).join(' ')
};

//Descending Order
const descendingOrder=(n)=> Number(n.toString(10).split('').map(int => parseInt(int, 10)).sort(( a, b ) =>  b - a).join(''))

// You're a square!
const isSquare=(n)=>Number.isInteger(Math.sqrt(n))

// Get the Middle Character
const getMiddle = (s) => s.length%2==0 ? s.slice(Math.floor(s.length/2-1), Math.ceil(s.length/2+1)) : s[Math.floor(s.length/2)]

// Highest and Lowest
const highAndLow = (numbers)=>`${Math.max(...numbers.split(' '))} ${Math.min(...numbers.split(' '))}`

// Square Every Digit
const squareDigits = (num) => Number(('' + num).split('').map(e => e*e).join(""))

// You Got Change?
const giveChange = (amount) => {
    let arr = [0, 0, 0, 0, 0, 0];
    arr[5] = Math.floor(amount / 100)
    amount -= arr[5]*100
    arr[4] = Math.floor(amount / 50)
    amount -= arr[4]*50
    arr[3] = Math.floor(amount / 20)
    amount -= arr[3]*20
    arr[2] = Math.floor(amount / 10)
    amount -= arr[2]*10
    arr[1] = Math.floor(amount / 5)
    amount -= arr[1]*5
    arr[0] = Math.floor(amount / 1)
    return  arr;
}

// Sort Numbers
const solution = (nums) => nums !== null ? nums.sort(( a, b ) =>  a - b) : []

// Filter the number
const FilterString = (value) => Number(value.split('').filter(x => x=(Number(x)|| x==0 )).join(''))

// Filter Coffee
const search = (budget, prices) => prices.filter(x=>x<=budget).sort((a, b) => a - b).join()

// filterEvenLengthWords
const filterEvenLengthWords = (words) => words.filter(x=>x.length%2===0)

// Train to remove duplicates from an array with filter()
const unique = (arr) => arr.filter((x, index)=>arr.indexOf(x)===index)

// Training JS #27: methods of arrayObject---filter()
const countGrade =(scores)=>{
    let s = scores.filter(z => z === 100).length;
    let a = scores.filter(z => z < 100 && z >= 90).length;
    let b = scores.filter(z => z < 90 && z >= 80).length;
    let c = scores.filter(z => z < 80 && z >= 60).length;
    let d = scores.filter(z => z < 60 && z >= 0).length;
    let x = scores.filter(z => z < 0).length;
    return {S:s, A:a, B:b, C:c, D:d, X:x}
}

// Filter the array into unique values in 38 chars
const makeUnique=a=>[...new Set(a)]

// Multiply array values and filter non-numeric
const multiplyAndFilter = (array, multiplier) => array.filter(x => typeof x == 'number').map(a=>a*multiplier)

// JavaScript Array Filter
const getEvenNumbers = (numbersArray) => numbersArray.filter(x => x%2==0)

// List Filtering
const filter_list = (l) =>  l.filter(x => typeof x == 'number')

// Filter Long Words
const filterLongWords = (sentence, n) =>  arr = sentence.split(" ").filter(a => a.length>n)

// Disemvowel Trolls
const disemvowel = (str) => str.replace(/[aeiou]/gi, '')

// Vowel Count
const getCount = (str) => (str.match(/[aeiou]/gi) || []).length

// Case Swapping
const swap = (str) => {
    let newLetters = '';
    for (let i = 0; i < str.length; i++) {
        str[i] == str[i].toUpperCase() ? newLetters += str[i].toLowerCase() : newLetters += str[i].toUpperCase()
    }
    return newLetters;
}
//Replace With Alphabet Position
const alphabetPosition=(text)=> text.toLowerCase().split('')
    .filter( c => c >= 'a' & c <= 'z' )
    .map( c => c.charCodeAt(0) - 'a'.charCodeAt(0) + 1)
    .join(' ');

//Persistent Bugger.
const persistence=(num) => {
    let x = 0;
    while (num.toString().length !== 1){
        num = num.toString().split('').reduce((acc, d) =>  acc * d)
        x ++
    } return x
}

// Sum of Digits / Digital Root
const digital_root = (n) => n < 10 ? n : digital_root(n.toString().split('').reduce((acc, d) =>  acc + +d, 0))

// Array.diff
const arrayDiff = (a, b) => {
    for (let i=0; i<b.length; i++){
        a = a.filter(x=>x!=b[i])
    } return a
}

// Find The Parity Outlier
const findOutlier = (integers) => {
    let arrEven = integers.filter(x=> x%2==0)
    let arrOdd = integers.filter(x=> x%2!==0)
    arrEven.length > arrOdd.length ? Number(arrOdd) : Number(arrEven)
}

// Stop gninnipS My sdroW!
const spinWords = (string) => string.split(" ").map(x => (x.length > 4) ? x.split("").reverse().join(''): x).join(" ")

// Find the odd int
const findOdd = (numbers) => {
    let count = 0;
    for(let i = 0; i<numbers.length; i++){
        for(let j = 0; j<numbers.length; j++){
            if(numbers[i] == numbers[j]){
                count++;
            }}
        if(count % 2 != 0 ){
            return numbers[i];
        }}}

// Who likes it?
const likes = (names) => {
    let templates = [
        'no one likes this',
        '{name} likes this',
        '{name} and {name} like this',
        '{name}, {name} and {name} like this',
        '{name}, {name} and {n} others like this'
    ];
    let idx = Math.min(names.length, 4);
    return templates[idx].replace(/{name}|{n}/g, function (val) {
        return val === '{name}' ? names.shift() : names.length;
    });
}

// Create Phone Number
function createPhoneNumber(numbers){
    let format = "(xxx) xxx-xxxx";
    for(let i = 0; i < numbers.length; i++)
    {format = format.replace('x', numbers[i])}
    return format;
}

// Multiples of 3 or 5
const solution = (number) => {
    var sum = 0
    for (let i=0; i<number; i++) {
        if (i%3==0 || i%5==0){
            sum= sum+=i;
            continue;
        } else if( i%5==0) {
            sum= sum+=i;
            continue;      }
    }
    return sum;
}

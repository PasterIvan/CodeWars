//Human Readable Time
const humanReadable = (seconds) => {
    let hours =  Math.floor(seconds/3600)
    seconds -= hours * 3600;
    let minutes = Math.floor(seconds/60);
    seconds -= minutes * 60

    let temp = ((hours < 10) ? "0" : "") + hours;
    temp += ((minutes < 10) ? ":0" : ":") + minutes;
    temp += ((seconds < 10) ? ":0" : ":") + seconds;
    return temp;
}

// Moving Zeros To The End
const moveZeros = (arr) => arr.filter(y=>y!== 0).concat(arr.filter(y=>y === 0))

// Simple Pig Latin
const pigIt = (str) => ('' + str).split(' ').map(x=> x=="?" || x=="!" ? x : x.slice(1)+x[0]+'ay').join(' ')
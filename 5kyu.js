// Moving Zeros To The End
const moveZeros = (arr) => arr.filter(y=>y!== 0).concat(arr.filter(y=>y === 0))

// Simple Pig Latin
const pigIt = (str) => ('' + str).split(' ').map(x=> x=="?" || x=="!" ? x : x.slice(1)+x[0]+'ay').join(' ')
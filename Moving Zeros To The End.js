function moveZeros(arr) {
    return arr.filter(y=>y!== 0).concat(arr.filter(y=>y === 0))
}
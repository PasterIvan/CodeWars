function findOutlier(integers){
    let arrEven = integers.filter(x=> x%2==0)
    let arrOdd = integers.filter(x=> x%2!==0)
    if (arrEven.length > arrOdd.length){
        return Number(arrOdd);
    } return Number(arrEven);
}
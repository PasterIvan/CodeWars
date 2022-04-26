function pigIt(str){
    return ('' + str).split(' ')
        .map(x=> x=="?" || x=="!" ? x : x.slice(1)+x[0]+'ay').join(' ')
}
//Snail
const snail = (array) =>{
    let newArray = []
    while(array.length){
        newArray.push(...array.shift())
        for (var i = 0; i < array.length; i++){
            newArray.push(array[i].pop())
        }
        newArray.push(...(array.pop() || []).reverse())
        for (var i = array.length -1; i >= 0; i--){
            newArray.push(array[i].shift())
        }
    }
    return newArray
}

// Human readable duration format
function formatDuration (seconds) {
    let y = Math.floor(seconds / 31536000)
    seconds -= y*31536000
    let d = Math.floor(seconds / 86400)
    seconds -= d*86400
    let h = Math.floor(seconds / 3600)
    seconds -= h*3600
    let m = Math.floor(seconds / 60)
    seconds -= m*60
    let s = Math.floor(seconds / 1)

    y==1 ? y+=' year': y+=' years'
    d==1 ? d+=' day': d+=' days'
    h==1 ? h+=' hour': h+=' hours'
    m==1 ? m+=' minute': m+=' minutes'
    s==1 ? s+=' second': s+=' seconds'

    let arr = [y,d,h,m,s]

    let time = arr.filter(x=> x[0] != 0)

    if (time.length == 5) {
        return time[0] + ", " + time[1] + ", " + time[2] + ", "  + time[3] + " and " + time[4]
    } else if (time.length == 4) {
        return time[0] + ", " + time[1] + ", "  + time[2] + " and " + time[3]
    } else if (time.length == 3) {
        return time[0] + ", " + time[1] + " and "  + time[2];
    } else if (time.length == 2) {
        return time[0] + " and " + time[1]
    } else if (time.length == 1) {
        return time[0]
    } else if (time.length == 0)
        return 'now'

    return  time
}
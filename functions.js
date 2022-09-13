// DEFINE YOUR FUNCTIONS HERE BASED ON THE PROVIDED CRITERIA

function includes(item, array) {
    let returnBool = false
    for(let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            returnBool = true
        }
    }
    return returnBool
}

function indexOf(item, array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === item) {
            return i
        }
    }
    return -1
}

function reverse(array) {
    let reversedArray = []
    for(let i = array.length -1; i >= 0; i--) {
        reversedArray.push(array[i])
    }
    return reversedArray
}

function slice(start, stop, array) {
    let newArray = []
    for (let i = start; i < array.length; i++) {
        if(i < stop) {
            newArray.push(array[i])
        }
    } 
    return newArray
}

function concat(array1, array2) {
    for(let i = 0; i < array2.length; i++) {
        array1.push(array2[i])
    }
    return array1
}

function join(divider, array) {
    let outputString = array[0]
    for(let i = 1; i < array.length; i++) {
        outputString += `${divider}${array[i]}`
    }
    return outputString
}

function max(array) {
    let maxValue = array[0];
    for(let i = 1; i < array.length; i++) {
        if(parseInt(array[i]) > maxValue) {
            maxValue = array[i]
        }
    }
    return maxValue
}
const { parse } = require("path");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Input your array, separating each value with \",\" :", function(string) {
    let array = string.split(',')
    rl.question("What element do you want to look for ? :", function(element) {
        console.log(`\nThere is ${count(array,element)} times the element ${element} in the array [${array}]`);
        console.log(`\nThe average of the array [${array}] is ${average(array)}`)
        console.log(`\nThe minimal value in [${array}] is ${min(array)}`)
        console.log(`\nThe maximal value in [${array}] is ${max(array)}`)
        console.log(`\nThe shifted array of [${array}] is [${shift(array)}]`)
        let diffArray = diff(array)
        console.log(`\nThe largest difference in the array [${array}] is between ${diffArray[1]} and ${diffArray[2]} and is : ${diffArray[0]}`)


        rl.close();
    });
});

function count(array, element){
    let count = 0;
    for(let i = 0; i < array.length; i ++){
        if(array[i] == element) count ++
    }
    return count
}

function average(array){
    let somme =0
    for (let i = 0; i < array.length; i++){
        somme += parseInt(array[i],10)
    }
    return somme/array.length
}

function min(array){
    let min = parseInt(array[0])
    let parsed
    for (let i =1; i < array.length; i++){
        parsed = parseInt(array[i])
        if(array[i]<min) min = array[i]
    }
    return min
}
function max(array){
    let max = parseInt(array[0])
    let parsed
    for (let i =1; i < array.length; i++){
        parsed = parseInt(array[i])
        if( parsed > max) {
            max = array[i]
       }
    }
    return max
}

function shift(array){
    let resultArray = []
    for(let i = 0; i < array.length -1; i++){
        resultArray[i] = array[i+1]
    }
    resultArray[array.length] = array[0]
    return(resultArray)
}

function diff(array){
    let maxDiff = [0]
    let diff
    for (let i = 0; i < array.length; i ++){
        for (let j = i; j< array.length; j++){
            diff = Math.abs(array[i] -array[j])
            if (diff > maxDiff[0]){
                maxDiff[0] = diff
                maxDiff[1] = array[i]
                maxDiff[2] = array[j]
            }
        }
    }
    return maxDiff
}
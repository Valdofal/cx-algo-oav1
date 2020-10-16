function isUpperCase(code){
    if (code >= 65 && code <= 90){
        return true
    }
    else {
        return false
    }
 }
 function howManyCamelCase (string){
    let count = 1;
    for (let i =0; i <string.length; i++){
        const code = string.charCodeAt(i)
        if(isUpperCase(code) && i !== 0){
            count ++
        }
    

    }
    return count
}

console.log(howManyCamelCase('thisIsACamelCaseStringWithNineWords'))
console.log(howManyCamelCase('ThreeWordsString'))
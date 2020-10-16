const arr  = [19,16,6,15,0,4,7,17,1,8,14,9,3,2,18,12,5,10,11,13]
function bubblesort(arr){
    let temp
    for(let i = 0; i < arr.length; i++){
        var j = 0;
        while (j< arr.length){
            if(arr[j] > arr[j+1]){
                temp  = arr[j +1]
                arr[j +1] = arr[j]
                arr[j]= temp
            }
            j++
        }
    }
    return arr
}

console.log(`\n${(arr)} --> ${bubblesort(arr)}\n`)
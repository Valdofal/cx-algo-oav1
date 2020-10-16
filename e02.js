function isPangram (str =''){
    if (str.length < 26){
      return false
    }
    var countArray =[]
    for(var i = 0; i < 26; i++){
      countArray[i]=0  // We create an array with 26 values, one for each letter
    }
    for(var i = 0; i <=str.length; i++){
      var code = str.charCodeAt(i)
      if (code >= 65 && code <= 90 ){
        countArray[code - 65] = 1   //If we have an uppercase letter, we icrement the value corresponding to the according letter to 1
      }
      else if (code >= 97 && code <= 122){
        countArray[code - 97] = 1   //Same for a lowercase letter
      } 
    }
    if(countArray.includes(0)) return false //If the array stills contains a 0, it means one or more letter isnt in the string
    else return true //If don't have a 0, we have every letter
  }
console.log(isPangram("The quick brown fox jumps over the lazy dog"))
console.log(isPangram("Hello Efrei"))
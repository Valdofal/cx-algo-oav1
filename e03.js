function marsos(altered = ''){
    const original = 'SOSSOSSOSSOS' 
    let nbAlterations = 0;
    for (let i = 0; i <altered.length; i++){
        if(altered[i] !== original[i]) nbAlterations++ //Comparing every letter to the original, we increment for each alterations
    }
    return nbAlterations //Then we return the number of alterations detected
}
console.log(marsos('SOFSOSSISSOW'))
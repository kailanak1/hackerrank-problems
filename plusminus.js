function plusMinus(arr) {
    let denominator = arr.length 
    let pos = 0, neg = 0, zeroes = 0; 
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            pos++
        }
        if(arr[i] <  0){
            neg++
        }
        if(arr[i] === 0){
            zeroes++
        }
    }
    console.log((pos/denominator).toFixed(6))
    console.log((neg/denominator).toFixed(6))
    console.log((zeroes/denominator).toFixed(6))
}

//find the problem here: https://www.hackerrank.com/challenges/plus-minus/problem
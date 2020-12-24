function birthdayCakeCandles(candles) {
    let sort = candles.sort((a,b) => b - a)
    let count = 0;
    for(let i = 0; i < sort.length ; i++){
        if(sort[0] !== sort[i]){
            return count
        } 
        
        count++
    }
   return count
}

//problem here: https://www.hackerrank.com/challenges/birthday-cake-candles/problem
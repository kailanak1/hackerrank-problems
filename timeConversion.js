function timeConversion(s) {
      
    if(s.includes("P")){
      if(s[0] === "1" && s[1] === "0"){
        let newString = s.replace(s[0], "2")
        return newString.replace(s[1], "2").slice(0,8)
      } 
      else if(s[0] === s[1]){
        let newString = s.replace(s[0], "2")
        return newString.replace(s[1], "3").slice(0,8)
      } 
      else if (s[0] === "1" && s[1] === "2"){
          return s.slice(0, 8)
      }
      
      else {
        let hour = parseInt(s[1]) + 12
        return s.replace(s[1], hour.toString()).slice(1, 9)
      }
    }
  
    else if (s[0] === "1" && s[1] === "2" && s[8] === "A"){
      let newString = s.replace(s[0], "0")
      return newString.replace(s[1], "0").slice(0,8)
    }
  
    else {
      return s.slice(0,8)
    }
  }

  
  //find the problem here: https://www.hackerrank.com/challenges/time-conversion/problem
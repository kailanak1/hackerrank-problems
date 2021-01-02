 
 function gradingStudents(grades){
    let res = []
    for(let i=0; i < grades.length; i++){
      if (grades[i] >= 38){
        res.push(fiveCondition(grades[i]))
      } else {
        res.push(grades[i])
      }
    }
    return res
  }
  
  
  function fiveCondition(n){
    let num = Math.ceil(n/5) * 5
    let res = num - n
    if(res < 3){
      return num
    } else {
      return n
    }
  }
 
 //find the problem here:https://www.hackerrank.com/challenges/grading/problem
function diagonalDifference(arr) {
  let num = arr.length
  let leftTotal = 0;
  let rightTotal = 0; 

  for(let i = 0; i < num; i++){
    leftTotal += arr[i][i]
    rightTotal += arr[i][num - 1 -i ]
  }

  return Math.abs(leftTotal - rightTotal)
}

//find the problem here: https://www.hackerrank.com/challenges/diagonal-difference/problem
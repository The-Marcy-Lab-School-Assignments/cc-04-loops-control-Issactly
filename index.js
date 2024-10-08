//Write your solutions in this file, don't forget to test your functions.

//1
const countFromOne = (num) => {
  for (let i = 1; i <= num; i++) {
    return i;
  }
};
countFromOne(10)

//2
const countEveryOdd = (num)=> {
  for(let i= 1;i <= num; i++) {
    if(i % 2 !== 0){
      return i;
    }
  }
};
countEveryOdd(10)

//3
const isNegative = (num) => {
  if (num < 0) {
    return true
  } else if (num === 0) {
    return "neutral integer"
  }else {
    return false
  }
};
isNegative(10)

//4
const betweenFiveAndTwenty = (num) => {
  if (num > 5 || num < 20) {
    return true
  } else {
    return false
  }
};

//5
const sumOfThreeAndFive = (num) => {
  

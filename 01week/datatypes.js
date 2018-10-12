// Write a JavaScript program to display the current day and time.

const currentDayandTime =()=> {

const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();

const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

const time = currentDate.getUTCDate();

return(month + "/" + day + "/" + year + "   " + "Time:" + hours +":" + minutes +":" + seconds );
}

console.log(currentDayandTime());


// Write a JavaScript program to convert a number to a string.

const numbertoString = (num1) => {
  const s = num1.toString();

  return(s);
}

console.log(numbertoString(15));

// Write a JavaScript program to convert a string to the number.

const stringtoNumber = (s1) => {
  const s2 = parseInt(s1);

  return(s2);
}

console.log(stringtoNumber('44.hello'));

/*Write a JavaScript program that takes in different datatypes and prints out whether they are a:
Boolean
Null
Undefined
Number
NaN
String
*/

const dateTypes =() => { 
  const s = 'thisisstring';
  const b = true;
  const n = 15;
  const noValue = null;
  return(typeof b); 
}

console.log(dateTypes());


// Write a JavaScript program that adds 2 numbers together.

const sumOfTwoNumbers = (num1, num2) => {
    return num1 + num2;
  }
  
  console.log(sumOfTwoNumbers(7,9));

// Write a JavaScript program that runs only when 2 things are true.

const twoThingsareTrue = (num1, num2) => {
  if(num1 === num2) {
    return("Two things are equal");
  }
}

console.log(twoThingsareTrue(2,2));

// Write a JavaScript program that runs when 1 of 2 things are true

const oneof2thingsareTrue = (num1, num2) => {
  if(num1 || num2 != NaN) {
    return("One of two things are true");
  }
}

console.log(oneof2thingsareTrue(2,null));

// Write a JavaScript program that runs when both things are not true.

const twoThingsareNotTrue = (num1, num2) => {
  if(num1 != num2) {
    return("Two things are not equal");
  }
}

console.log(twoThingsareNotTrue(2,3));
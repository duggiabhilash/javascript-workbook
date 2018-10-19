'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  word = word.toLowerCase();
  let userInputSplit = word.split("");
  let newArrayStartingwithVowel = [];
  let newArrayBeforeVowel = [];
  if(checkifVowel(userInputSplit[0])) {
    userInputSplit.push('y');
    userInputSplit.push('a');
    userInputSplit.push('y');
    return console.log(userInputSplit.join(""));
  }
  else {
    for(let i = 0 ; i < userInputSplit.length; i++) {
      if(checkifVowel(userInputSplit[i])) {
        newArrayStartingwithVowel = userInputSplit.slice(i,(userInputSplit.length+1));
        break;
      }
      else {
        newArrayBeforeVowel.push(userInputSplit[i]);
      }
    }
    if(newArrayStartingwithVowel.length == 0)
    return console.log(word + " is not having any vowel");

    let finalarray = newArrayStartingwithVowel.concat(newArrayBeforeVowel);
    finalarray.push('a');
    finalarray.push('y');
    return console.log(finalarray.join(""));
  }
  
  //return console.log(userInputSplit);
  // Your code here
/*
User inputs a text.
Validate the input to see if the word has only letters- validateInput(userinput)
if not a valid input prompt user for a valid input.
checkifVowel() function compares the letter with a,e,i,o,u to see if the letter is vowel
if userinput is valid, check for the first letter in the word - checkFirstLetter(userinput)
  if first letter is a vowel  return true.
if checkFirstLetter returns true push 'yay' to the user input string at the end and return it.
else
in doPigLatin where we split the userinput using .split("") and loop through the array to find a vowel
join all the letters in a newarray newArrayBeforeVowel as we loop till we find the vowel and store in consonant.
if vowel found slice the array starting with vowel to the end of the array and store it in a new
array newArrayStartingwithVowel and break the for loop
if newArrayStartingwithVowel lenght is 0 that means we did not have any vowels in the userinput string.
concat newArrayStartingwithVowel with newArrayBeforeVowel
push letters a and y to pigLating array and join the array and return the string.
*/

}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

const checkifVowel =(letter) => {
  if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u')
  return true;
  else 
  return false;
}

// Tests


if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}

// TELEPHONE NUMBER VALIDATOR
// 
// remove parentheses, hyphens, and spaces
// 
// a valid number according to tests:
//     - has an area code so is at least 10 digits long
//     - if it's longer than 10 digits, it has a country code, which can only be usa 1, so is only valid if it has 11 digits
//     - so can be 10 digits long, or 11 if the first digit is 1
//     - last 4 chars are numbers
//     - has no more than 1 set of parentheses
//     - doesn't start with a hyphen
//
// Please note, I somewhat robotically wrote this according to FCC tests just to complete the challenge, somewhat ignoring real world context. If I were to write code that produced a phone number validator in the real world, I would write this differently, possibly being more restrictive in what characters were accepted in the input field.

const input = document.getElementById("user-input");
const result = document.getElementById("results-div");
let inputValue = '';
result.textContent = '';

const maxOfOneParenthesisSet = (str) => {
  const openParentheses = (str.match(/\(/g) || []).length;
  const closedParentheses = (str.match(/\)/g) || []).length;
  console.log("par values: ", openParentheses, closedParentheses);
  if ((openParentheses === 1 || openParentheses === 0) && (closedParentheses === openParentheses)) {
    return true;
  } else {
    return false;
  }
};

const startsWithoutHyphen = (str) => {
  if (str[0] === "-") {
    return false;
  } else {
    return true;
  }
};

const endsWith4Digits = (str) => {
  return /\d{4}$/.test(str);
};

const isValidNumbers = (str) => {
    let cleanNumber = str.replace(/\D/g, '');
    let firstDigit = cleanNumber.toString()[0];
    if (cleanNumber.length === 10) {
      console.log("Correct number of digits ", cleanNumber.length);
      return true;
    }
    if (cleanNumber.length === 11 && firstDigit == 1) {
      console.log("Country code ", firstDigit, " correct. Correct number of digits: ", cleanNumber.length);
      return true;  
    } else {
      console.log("Incorrect number of digits ", cleanNumber.length, " or incorrect country code: ", firstDigit);
      return false;
    }
};

const isValid = () => {
  console.log("maxOfOneParenthesisSet(): ", maxOfOneParenthesisSet(inputValue));
  if (isValidNumbers(inputValue) === true &&  endsWith4Digits(inputValue) && startsWithoutHyphen(inputValue) && maxOfOneParenthesisSet(inputValue)) {
    console.log("isvalid: ", endsWith4Digits(inputValue), " ", startsWithoutHyphen(inputValue), " ", maxOfOneParenthesisSet(inputValue));
    return true;
  } else {
    console.log("is not valid: 4dig ", endsWith4Digits(inputValue), " hyph ", startsWithoutHyphen(inputValue), " paren  ", maxOfOneParenthesisSet(inputValue));
    return false;
  }
};

const validatorX = () => {
    if (isValid() === true)  {
        result.textContent = "Valid US number: " + inputValue;
    } else {
        result.textContent = "Invalid US number: " + inputValue;   
    }
};

const check = () => {
  inputValue = input.value;
  inputValue === '' ?
    alert("Please provide a phone number") :
    // checkCountry();
    validatorX();
};

const clearing = () => {
    result.textContent = '';
}

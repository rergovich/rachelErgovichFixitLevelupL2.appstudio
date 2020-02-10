//Declare variables and create popups to gather user information
let firstName = prompt('What is your first name?');
let state = prompt('What is your state?');
let temperature = prompt('What is the temperature, in Fahrenheit?');

//converts first letter of name to capital letter
let firstLetter = firstName.charAt(0)
let upperCaseFirst = firstLetter.toUpperCase()
let stringWithoutFirst = firstName.slice(1)
let capName = upperCaseFirst.concat(stringWithoutFirst);

//converts state to all caps
let upperCaseState = state.toUpperCase();

//Create array for messages
let messages = ['wear a warm coat, hat, scarf and gloves.', 'wear a warm coat but you won\'t need a hat, scarf or gloves.', 'wear your warmest coat, a warm hat, a scarf, and warm gloves.', 'wear a warm coat, hat and gloves. Maybe a scarf too.'];

//checks to see if inputed user information meets requirements to satisfy one of the logical operators
//case 1
if (upperCaseState === 'NE' && temperature < 32) {
NSB.MsgBox(`${capName}, ${messages[0]}`)
//case 2
} else if (upperCaseState === 'NE' && (temperature >= 32 && temperature < 50)) {
  NSB.MsgBox(`${capName}, ${messages[1]}`)
//case 3
} else if (upperCaseState === 'FL' && (temperature >= 32 && temperature < 50)) {
  NSB.MsgBox(`${capName}, ${messages[2]}`)
//case 4
} else if (upperCaseState === 'FL' && (temperature >= 50 && temperature <= 70)) {
  NSB.MsgBox(`${capName}, ${messages[3]}`)
//case 5
} else {
  NSB.MsgBox(`We\'re sorry, ${capName}, we don\'t have any suggestions based on your information.`)
} 

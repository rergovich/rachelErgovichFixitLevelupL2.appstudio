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

//Insert messages into an array
let messages = ['wear a warm coat, hat, scarf and gloves.', 'wear a warm coat but you won\'t need a hat, scarf or gloves.', 'wear a less heavy coat.', 'wear a light jacket and smile!'];

//checks to see if inputed user information meets requirements to satisfy one of the logical operators
switch (true) {
//case 1
  case (upperCaseState == 'NE' && temperature < 32):
    NSB.MsgBox(`${capName}, ${messages[0]}`);
    break;
//case 2
  case (upperCaseState == 'NE' && (temperature >= 32 && temperature < 50)):
    NSB.MsgBox(`${capName}, ${messages[1]}`);
    break;
//case 3
  case (upperCaseState == 'FL' && (temperature >= 32 && temperature < 50)):
    NSB.MsgBox(`${capName}, ${messages[2]}`);
    break;
//case 4
  case (upperCaseState == 'FL' && (temperature >= 50 && temperature <= 70)):
    NSB.MsgBox(`${capName}, ${messages[3]}`);
    break;
//case 5
  default:
    NSB.MsgBox(`We\'re sorry, ${capName}, we don\'t have any suggestions based on your information.`);
} 

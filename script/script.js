// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  // Initialize empty password, empty array for characters that may go into password, and password length variable.
  var password = '';
  var characterArray = [];
  var passLength;

  // Ask user for types of characters to include in password.
  var lower = confirm("Would you like to include lowercase characters?");
  var upper = confirm("Would you like to include uppercase characters?");
  var numeric = confirm("Would you like to include numeric characters?");
  var special = confirm("Would you like to include special characters?");

  if (!lower && !upper && !numeric && !special) {
    alert("At least one character type must be selected!");
    return password;
  }
  
  // Prompt user for password length. Make sure input is a number of correct size.
  while (true) {
    passLength = prompt("How long would you like the password to be? Password must be between 8 and 128 characters. Type 'q' to exit this dialogue without setting a password.");
    if (passLength.toLowerCase() === 'q') {
      return password;
    }
    passLength = Number(passLength);
    if (isNaN(passLength)) {
      alert("Must enter number!");
      continue;
    }
    if (parseInt(passLength) - Number(passLength) !== 0) {
      alert("Only integers are accepted!");
      continue;
    }
    if (passLength < 8 || passLength > 128) {
      alert('Password length must be between 8 and 128 characters!');
      continue;
    }
    break;
  }

  // populate the character array with possible characters the user has chosen:
  // if lowercase characters are selected, add characters of ASCII values 97-122 to the array
  if (lower) {
    for (var i = 97; i <= 122; i++)
    characterArray.push(String.fromCharCode(i));
  }

  // Same process for upper, numeric, and special characters.
  // uppercase characters are ASCII 65-90
  if (upper) {
    for (var i = 65; i <= 90; i++) {
      characterArray.push(String.fromCharCode(i));
    }
  }

  // numeric characters are ASCII 48-57
  if (numeric) {
    for (var i = 48; i <= 57; i++) {
      characterArray.push(String.fromCharCode(i));
    }
  }

  // special characters are ASCII 33-47, 58-64, 91-96, and 123-126
  if (special) {
    for (var i = 33; i <= 47; i++) {
      characterArray.push(String.fromCharCode(i));
    }
    for (var i = 58; i <= 64; i++) {
      characterArray.push(String.fromCharCode(i));
    }
    for (var i = 91; i <= 96; i++) {
      characterArray.push(String.fromCharCode(i));
    }
    for (var i = 123; i <= 126; i++) {
      characterArray.push(String.fromCharCode(i));
    }
  }

  // Now characterArray is populated with characters that are candidates for the array.
  // select random characters from character array and add them to the generated password, one by one.
  for (var i = 0; i < passLength; i++) {
    // Generate a random number in the range of characterArray.length
    var randChar = (Math.floor(Math.random() * (characterArray.length)));
    password += characterArray[randChar];
  }

  return password;
}

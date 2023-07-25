function generatePassword(length) {
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const specialCharacters = '!@#$%^&*()-_=+[{]}|;:,<.>/?';

  const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

  let password = '';
  // Ensure at least one character from each category is included in the password
  password += getRandomCharacter(uppercaseLetters);
  password += getRandomCharacter(lowercaseLetters);
  password += getRandomCharacter(numbers);
  password += getRandomCharacter(specialCharacters);

  const remainingLength = length - 4;
  for (let i = 0; i < remainingLength; i++) {
    password += getRandomCharacter(allCharacters);
  }

  // Shuffle the password to make it more random
  password = shuffleString(password);

  return password;
}

function getRandomCharacter(characters) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

function shuffleString(str) {
  let arr = str.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join('');
}

// generate a password of length 12
const passwordLength = 12;
const password = generatePassword(passwordLength);
console.log("Generated Password:", password);

const pigLatin = (input) => {
// Create variables to be used
  let translatedWord = ''
  let regex = /[aeiou]/gi;

// Check if the input begins with a vowel. If so, add 'way' to the end.
for (i = 0; i < input.length; i++) {
  if (input[0].match(regex)) { // Checks if the input is a vowel
    return translatedWord = input + 'way'
  } else if (regex.test(input[i]) === false) { // Checks if input does not start with a vowel
      if (input.slice(i, i + 2) === "qu") {
        i += 2
        return translatedWord = input.slice(i) + input.slice(0, i) + 'ay'
      } else if (input[1] === "q") {
        i += 3
        return translatedWord = input.slice(i) + input.slice(0, 3) + 'ay'
      } else if (!/[aeiou]/.test(input[i])) { // Checks if the the word does not begin with a vowel
        var checkConso = input.indexOf(input.match(regex)[0]) // Find out how many consonants before first vowel
        // Take the string from the beginning of the word to the first vowel and
        // add them to the end of the word + "ay"
        return translatedWord = input.substring(checkConso) + input.substring(0, checkConso) + "ay"
      }
    }
  }
}
console.log(pigLatin("squeal"));

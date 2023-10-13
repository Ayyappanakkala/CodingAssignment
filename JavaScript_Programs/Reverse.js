function reverseWords(sentence) {
    const words = sentence.split(' ');
    const reversedWords = words.map(word => {
      const reversedWord = word.split(/([A-Za-z]+)/).map(part => {
        if (/[A-Za-z]/.test(part)) {
          return part.split('').reverse().join('');
        }
        return part;
      });
      return reversedWord.join('');
    });
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  
  const inputSentence = "This is a sunny day";
  const reversedSentence = reverseWords(inputSentence);
  console.log(reversedSentence);
  
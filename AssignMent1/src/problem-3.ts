{
  // Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.
  function countWordOccurrences(sent: string, wor: string): number {
    const sentence = sent.toLowerCase().split(" ");
    const word = wor.toLowerCase();

    const result = sentence.filter((a) => a == word);
    return result.length;
  }

  // console.log(countWordOccurrences("i love you love you", "you"));
}

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

var wordlist = ["test", "fun", "react", "coding", "present"];

const result = wordlist.filter(word => word.length > 6);

console.log(result);
// expected output: "present is the only word with more that 6 letters"

//using 2 stacks one for numbers and one for words.

function decodeString(s) {
    const numStack = [];
    const wordStack = [""];
    let num = 0;

    // ES6 addition "for of" loop
    for(const char of s) {
        if(/\d/.test(char)) {
            // in the case that 100 is the number
            num = 10 * num + parseInt(char);
        } else {
            if(char === "[") {
                // num stack will take the number.
                numStack.push(num);
                // word stack will take a empty string.
                wordStack.push("");
                // reset num to zero.
                num = 0;
            } else if(char === "]") {
                const repeater = numStack.pop();
                cosnt word = wordStack.pop();
                wordStack[wordStack.length -1] += word.repeat(repeater);
            } else {
                wordStack[wordStack.length - 1] += char;
            }
        }

    }



    return wordStack.pop();
}
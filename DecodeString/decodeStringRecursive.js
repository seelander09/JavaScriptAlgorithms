function decodeStringRecursive(s) {
    let msg = "";
    let num = 0;
    let depth = 0;


    // loop label, when we call outer it tells the program to return to this loop not to the loop it is invoked in.
    outer:
    // go through the string one character at a time
    for(let i = 0; i < s.length; i++) {

        const char = s[i];

        // is this character a digit?
        if(/\d/.test(char)) {
            // loop through single digits and construct a number out of it.
            num = 10 * num + parseInt(char);
            // if the next digit in the string is a bracket
            if(s[i + 1] ===  "[") {
                // find the end of the brackets
                depth++;

                for(let j = i + 2; j < s.length; j++) {
                    if( s[j] === "[") depth++;
                    if( s[j] === "]") depth--;
                    if( depth === 0 ) {
                        const next = s.slice(i + 2, j);

                        console.log(next);
                        // acutally do the recursion
                        // this will return a string then we will just repeat that string bc we will only get one instance without the repeat.
                        msg += decodeStringRecursive(next).repeat(num);

                        num = 0;
                        i = j;
                        continue outer;
                    }
                }
            }
        } else {
            msg += char;
        }
    }

    return msg;
}
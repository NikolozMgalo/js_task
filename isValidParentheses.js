/*
*  Given a string containing any number of nested paired parentheses. Write code that checks that the parentheses are placed correctly. 
*  So correct: 
*  '()()' 
*  So correct: 
*  '(())' 
*  This is incorrect, since the number of open parentheses does not coincide with the number of closed ones: 
*  '())' 
*  This is incorrect, because although the number of open parentheses coincides with the number of closed ones, they are in the wrong order: 
*  '))((' 
*/

const isValidParentheses = (str) => {
    let stack = [];
    for(let char of str) {
        if(char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0 ){
               return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
};

console.log(isValidParentheses('(()))'));

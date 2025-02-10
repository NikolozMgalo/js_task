// Given some string: 
const str = 'abcde abcde' 
// The variable stores the characters: 
const del = 'abe'; 
// Remove all characters specified in the variable from the string. In our case it should look like this: 
const expectedResult = 'cd cd' 


const removeCharacters = (str, del) => {
    return str.replace(new RegExp(`[${del}]`, 'g'), '');
}

console.log(removeCharacters(str, del)); 

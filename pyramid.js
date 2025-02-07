/*
*Display the following pyramid:  
*x 
*xx 
*xxx 
*xxxx 
*xxxxx 
*/

const pyramid = (n) => {
    for(let i = 1; i <= n; i++) {
        console.log("x".repeat(i))
    }
}
pyramid(5);

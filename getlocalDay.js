/* In European countries, the week begins on Monday (day number 1), then Tuesday (number 2) and so on until Sunday (number 7).
** Write a function getLocalDay(date) that returns the "European" day of the week for date. 
** let date = new Date(2012, 0, 3); 
** January 3, 2012 console.log( getLocalDay(date) ); 
** Tuesday, need to show 2
*/
const dayjs = require('dayjs');
const date = new Date(2012, 3, 3); 

const getLocalDay = (date) => {
    let day = dayjs(date).day();
    return day === 0 ? 7 : day;
}

console.log(getLocalDay(date));

/* Create date 
*  Create a Date object for the date: February 20, 2012, 3:12 am. Time zone – local. 
*/ 

const dayjs = require('dayjs');
const today = dayjs().format('MMMM, DD, YYYY, HH:mm');

console.log(today);

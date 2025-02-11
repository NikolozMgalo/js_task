// Show the day of the week Write a function getWeekDay(date) that shows the day of the week in short format: "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun". 
// For example: 

const date = new Date(2025, 2, 10); 

// January 3, 2012 console.log( getWeekDay(date) ); 
// need to output "Tue" 
const dayjs = require('dayjs');
const today = dayjs().format('MMMM, DD, YYYY, HH:mm');

const getWeekDay = (date) => {
    return dayjs(date).format('ddd');
};

console.log(getWeekDay(today));
console.log(getWeekDay(date));

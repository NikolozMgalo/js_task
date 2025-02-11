const dayjs = require('dayjs');
const isLeapYear = require('dayjs/plugin/isLeapYear');
const weekOfYear = require('dayjs/plugin/weekOfYear');

dayjs.extend(isLeapYear);
dayjs.extend(weekOfYear);

//print todays date
const today = dayjs().format('YYYY-MM-DD HH:mm:ss');
console.log('today is: ', today);

//print yesterdays date
const yesterday = dayjs().subtract(1, 'day').format('YYYY-MM-DD')
console.log('yesterday was :', yesterday);

//print difference between 2 dates
const date1 = dayjs('2024-02-01');
const date2 = dayjs('2025-02-01');

console.log(date2.diff(date1, 'days'));

//print date 100 days from today
const inToTheFuture = dayjs().add(100, 'days').format('MMMM D, YYYY');
console.log(`100 days from now will be ${inToTheFuture}`);

//print date 3 weeks ago
const threeWeeksAgo = dayjs().subtract(3, 'weeks').format('ddd, DD MMM YYYY');
console.log(`Three from now was ${threeWeeksAgo}`);

//print what day it was on exact date
const dateToFindWeekOf = new Date(2025, 1, 1);
console.log(`On ${dayjs(dateToFindWeekOf).format('YYYY-MM-DD')} it was ${dayjs(dateToFindWeekOf).format('ddd')}`);

//print last day of the month
console.log(`last day of this month is ${dayjs().endOf('month').format('DD-MMM')}`);

//get number of days in February of random year
const getDaysInFebruary = (year) => {
    return dayjs(`${year}-02-01`).daysInMonth();
}

console.log(`there are ${getDaysInFebruary(2025)} days in february of 2025`);

//Print which week number today falls in
console.log(`today is ${dayjs().week()}th week of year`);


//Print if today is weekday or weekend
const isWeekend = (date) => {
    const day = dayjs(date).day()
    return day === 0 || day === 6 ? 'Weekend' : 'Weekday';
};

console.log(`today is ${isWeekend(dayjs())}`);
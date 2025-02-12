/*
** Create a function getDateAgo(date, days) that returns the number that was days ago from date. 
** For example, if today is the twentieth, then getDateAgo(new Date(), 1) will return the nineteenth and getDateAgo(new Date(), 2) will return the eighteenth. 
** The function should work reliably with days=365 and larger values: 
** let date = new Date(2015, 0, 2); 
** console.log( getDateAgo(date, 1) ); 
** 1, (1 Jan 2015) console.log( getDateAgo(date, 2) ); 
** 31, (31 Dec 2014) console.log( getDateAgo(date, 365) ); 
** 2, (2 Jan 2014) 
** P.S. The function should not modify the date object passed to it.
*/

const dayjs = require('dayjs');
const date = new Date(2015, 0, 2);

const getDateAgo = (date, days) => {
    return dayjs(date).subtract(days, 'day').date();
}

console.log(getDateAgo(date, 1));

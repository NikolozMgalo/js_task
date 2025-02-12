/*
** Last day of the month 
** Write a function getLastDayOfMonth(year, month) that returns the last day of the month. 
** Sometimes it's 30, 31 or even February 28/29. 
** Parameters: 
** year – a four-digit year, for example, 2012. month – month from 0 to 11. For example, getLastDayOfMonth(2012, 1) = 29 (leap year, February). 
*/

const dayjs = require('dayjs');

const getLastDayOfMonth = (year, month) => {
    return dayjs(`${year}-${month + 1}-01`).endOf('month').date();
}

console.log(getLastDayOfMonth(2012, 1));

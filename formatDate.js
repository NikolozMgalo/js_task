/*
 ** Relative date formatting importance: 4
 ** Write a function formatDate(date) that formats a date as follows:
 ** If less than 1 second has passed since date, output "right now".
 ** Otherwise, if less than 1 minute has passed since date, print "n seconds ago".
 ** Otherwise, if less than an hour, print "m minutes ago".
 ** Otherwise, the full date is in the format "DD.MM.YY HH:mm".
 ** Namely: “day.month.year hours:minutes”, all in the form of two digits, i.e. 12/31/16 10:00.
 ** For example:
 ** console.log( formatDate(new Date(new Date - 1)) ); // "right now"
 ** console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 seconds ago"
 ** console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 minutes ago"
 ** yesterday's date like 12/31/2016, 20:00 console.log( formatDate(new Date(new Date - 86400 * 1000)) );
 */

const dayjs = require("dayjs");

const formatDate = (date) => {
  const now = dayjs();
  const diff = now.diff(dayjs(date), "seconds");

  if (diff < 1) {
    return "right now";
  }

  if (diff < 60) {
    return `${diff} seconds ago`;
  }

  if (diff < 3600) {
    const minutes = Math.floor(diff / 60);
    return `${minutes} minutes ago`;
  }
  return dayjs(date).format("DD.MM.YY HH:MM");
};

console.log(formatDate(new Date(new Date() - 86400 * 1000)));

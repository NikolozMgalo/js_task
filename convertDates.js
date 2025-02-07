// Given a list of events for specific dates, stored in the following structure:

let events = [
  { date: "2019-12-29", event: "name1" },
  { date: "2019-12-31", event: "name2" },
  { date: "2019-12-29", event: "name3" },
  { date: "2019-12-30", event: "name4" },
  { date: "2019-12-29", event: "name5" },
  { date: "2019-12-31", event: "name6" },
  { date: "2019-12-29", event: "name7" },
  { date: "2019-12-30", event: "name8" },
  { date: "2019-12-30", event: "name9" },
];
// Write code that will transform the data structure into this:
let expectedResult = {
    "2019-12-29": ["name1", "name3", "name5", "name7"],
    "2019-12-30": ["name4", "name8", "name9"],
    "2019-12-31": ["name2", "name6"],
};

let result = events.reduce((acc, { date, event }) => {
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(event);
    return acc;
  }, {});
  

  let sortedResult = Object.keys(result)
    .sort()
    .reduce((sortedObj, key) => {
      sortedObj[key] = result[key];
      return sortedObj;
    }, {});

console.log(sortedResult);

// Given a list of events over the past months, stored in the following loop:

let events = [
	{
		date:  '2019-12',
		event: 'name1'
	},
	{
		date:  '2019-12',
		event: 'name2'
	},
	{
		date:  '2019-11',
		event: 'name3'
	},
	{
		date:  '2019-11',
		event: 'name4'
	},
	{
		date:  '2020-10',
		event: 'name5'
	},
	{
		date:  '2020-10',
		event: 'name6'
	},
	{
		date:  '2020-11',
		event: 'name5'
	},
	{
		date:  '2020-11',
		event: 'name6'
	},
	{
		date:  '2020-12,',
		event: 'name7'
	},
	{
		date:  '2020-12',
		event: 'name8'
	},
	{
		date:  '2020-12',
		event: 'name9'
	},
]

// Write code that will transform the data structure into this:
let expectedResult =
{
	2019: {
		11: ['data'],
		12: ['data'],
	},
	2020: {
		10: ['data'],
		11: ['data'],
		12: ['data'],
	}
}

const transformEvents = (events) => {
    let result = {};

    events.forEach(({ date, event }) => {
        let [year, month] = date.split('-');

        if (!result[year]) {
            result[year] = {};
        }
        if (!result[year][month]) {
            result[year][month] = [];
        }
        
        result[year][month].push(event);
    });

    return result;
};

console.log(transformEvents(events));

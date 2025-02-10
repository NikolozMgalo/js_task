// Given a list of some data for certain dates, stored in the following structure:
let data = [
    { year: 2019, month: 11, day: 20, data: ['array with data'] },
    { year: 2019, month: 11, day: 21, data: ['array with data'] },
    { year: 2019, month: 12, day: 25, data: ['array with data'] },
    { year: 2019, month: 12, day: 26, data: ['array with data'] },
    { year: 2020, month: 10, day: 29, data: ['array with data'] },
    { year: 2020, month: 10, day: 30, data: ['array with data'] },
    { year: 2020, month: 11, day: 19, data: ['array with data'] },
    { year: 2020, month: 11, day: 20, data: ['array with data'] }
];

// Write the code that converts the data structure into a structure like this: 
const expectedResult = {
	year1: {
		month1: {
			day1: ['dataset'],
			day2: ['dataset'],
			day3: ['dataset'],
		},
		month2: {
			day1: ['dataset'],
			day2: ['dataset'],
			day3: ['dataset'],
		}
	},
	year2: {
		month1: {
			day1: ['dataArray'],
			day2: ['dataset'],
			day3: ['dataset'],
		},
		month2: {
			day1: ['dataArray'],
			day2: ['dataset'],
			day3: ['dataset'],
		}
	}
}
const transformData = (data) => {
    return data.reduce((result, { year, month, day, data }) => {
        if (!result[year]) {
            result[year] = {};
        }

        if (!result[year][month]) {
            result[year][month] = {};
        }

        result[year][month][day] = data;

        return result;
    }, {});
}

console.log(transformData(data));

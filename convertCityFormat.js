// Given is a list of cities and their countries, stored in the following structure: 
let data = [
    { country: 'country1', city: 'city11' },
    { country: 'country2', city: 'city21' },
    { country: 'country3', city: 'city31' },
    { country: 'country1', city: 'city12' },
    { country: 'country1', city: 'city13' },
    { country: 'country2', city: 'city22' },
    { country: 'country3', city: 'city31' }
]; 
//Write code that will transform the data structure into this:   
let expectedResult = { 
	'country1': ['city11', 'city12', 'city13'], 
	'country2': ['city21', 'city22'], 
	'country3': ['city31', 'city32'] 
} 

let result = data.reduce((acc, { country, city }) => {
    if(!acc[country]) {
        acc[country] = [];
    }
    acc[country].push(city);
    return acc;
},{});

console.log(result);

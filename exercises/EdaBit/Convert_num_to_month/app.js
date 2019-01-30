// Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.
// Examples
// month_name(3) ➞ "March"

// month_name(12) ➞ "December"

// month_name(6) ➞ "June"
// Months
// January
// February
// March
// April
// May
// June
// July
// August
// September
// October
// November
// December
// Notes
// Expect only numbers as input ranging from 1 to 12.


var months = ['January',
'February',
'March',
'April',
'May',
'June',
'July',
'August',
'September',
'October',
'November',
'December']

function month_name(num) {
	for(var i = 1; i <= months.length; i++){
		return months[num-1];
	}
}


console.log(months[0]);
console.log(month_name(10));
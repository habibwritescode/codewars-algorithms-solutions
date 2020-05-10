// Instruction

// Number of people in the bus

// There is a bus moving in the city, and it takes and drop some people in each bus stop.
// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which 
// represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). 
// Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
// The second value in the first integer array is 0, since the bus is empty in the first bus stop.


// Solution

var number = function (busStops) {
    let getIn = busStops.map(arr => arr[0])
    let getOff = busStops.map(arr => arr[1])
    const reducer = (total, num) => total + num;
    return getIn.reduce(reducer) - getOff.reduce(reducer);
}


// Test cases.
number([[10, 0], [3, 5], [5, 8]]) // Should return 5
number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]) // Should return 17 
number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]) // Should return 21
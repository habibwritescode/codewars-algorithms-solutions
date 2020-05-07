// Instruction

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

/*
Example 
findShort("bitcoin take over the world maybe who knows perhaps") should return 3 because 'the' and 'who' 
are the shortest words
*/


// Solution

function findShort(string) {
    return Math.min(...(string.split(' ').map(word => word.length)));
}
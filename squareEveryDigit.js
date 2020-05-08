// Instruction

// You are asked to square every digit of a number.
// For example, if we run 9119 through the function, 811181 will come out, because 9 squared is 81 and 1 squared is 1.
// Note: The function accepts an integer and returns an integer


// Solution

function squareDigits(num) {
    //may the code be with you
    return Number(num.toString().split('').map(val => Math.pow(val, 2)).join(''));
}
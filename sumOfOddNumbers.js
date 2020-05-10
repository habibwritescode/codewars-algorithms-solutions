// Instruction
/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8

*/


// Solution

function rowSumOddNumbers(n) {
    return  Math.pow(n, 3) 
}

/*
This solution was derived by realizing what each row has in common. This turns out to be that the row number 
is the cube root of the row's sum.
1 is the product of 111 = 1
8 is the product of 222 = 8
27 is the product of 333 = 27
The sum of any row of odd numbers is just the row number cubed.
*/
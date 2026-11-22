/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) return n;

    let prev1 = 1;
    let prev2 = 2;
    let tempPrev2 = 0;

    for (let i = 3; i <= n; i++) {
        // 1. Hitung current
        //  console.log(prev1 + ','+ prev2 + ' : ' + i)
         tempPrev2 = prev1 + prev2

         // 2. Geser prev1
         prev1 = prev2
         
         // 3. Geser prev2
         prev2 = tempPrev2
    }

    return prev2;
};

console.log(climbStairs(6))
console.log(climbStairs(7))
console.log(climbStairs(8))

// 1 + 1 + 1  + 1 + 1
// 1 + 2 + 2
// 1 + 2 + 1 + 1
// 2 + 1 + 2
// 2 + 2 + 1
// 2 + 1 + 1 + 1 
// 1 + 1 + 1 + 2
// 1 + 1 + 2 + 1
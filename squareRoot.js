/**
 * @param {number} x
 * @return {number}
 */
// for (let i = x;i >= 0 ; i--){
//     if(i % 2 != 0){
//         // oddList.push(i);
//         console.log(x - i);
//     }
// }   
var mySqrt = function(x) {
    let low = 1;
    let result;
    let count = 0;
    let temp = x;
    // cara 1
    //menggunakan looping ganjil
    // for (let i = 1;i <= x; i++){
    //     if(i % 2 != 0){
    //         console.log(temp + '-' + i);
    //         temp = temp - i;
            
    //         if(temp == 0 || temp == i ){
    //             count++;
    //             return count;
    //         }
    //         if(temp < 0){
    //             return count;
    //         }

    //         count++;
    //     }
    //}   

    // cara 2
    // binari search
    // 

    let tengah;
    let latestN;
    let tinggi = x;

    // tengahX = parseInt(x / 2);
    // tengah = parseInt((low+ tengahX) / 2);
    // tinggi = tengah;


    while (low <= tinggi) {
        tengah = parseInt((low + tinggi) / 2);
        result = tengah * tengah; 
        console.log('Result ' , result); 
        if (result <= x) {
            latestN = tengah;
            low = tengah + 1;
        }else {
            tinggi = tengah - 1;
        }
    }
    return latestN;
    // result = tengah * tengah; 
    
    // if (result > x) {
    //      tengah = parseInt((low + tinggi) / 2);
    //      latestTinggi = tengah;

    //      result = tengah * tengah;

    //     //  return result
    //      if (result > x) {
    //         console.log('ini')
    //         tengah = tengah - 1
    //         result = tengah * tengah;
    //         tengah = tengah - 1
    //         result = tengah * tengah;
    //         tengah = tengah - 1
    //         result = tengah * tengah;

    //         if(result === x) return tengah;
    //         return result
    //      }else if(result < x){
    //         tengah - tengah +1;
    //         result = tengah * tengah;
    //         return result
    //      }
    // }
    // return tengah;
};

console.log(mySqrt(100));
// mySqrt(9);
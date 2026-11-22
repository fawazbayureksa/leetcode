/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // convert text to array first
    let arr = s.trim().split(' '); //use trim couse if the first have space will not read by system
    // find the latest word
    // how to find?
    // use length

    let count = arr.length; //will show count fo array
    let latest =  arr[count - 1]; //find latest array , why there is -1 its because array have index start from 0, 0,1 in this case Hello world only have 2 length it means there is not index 2 so need always -1
    return latest.length;
};


console.log(lengthOfLastWord("   fly me   to   the moon  "));
//Reduce :- The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// The reducer function takes four arguments:  accumulator, currentValue, currentIndex, sourceArray

let arr = [1,2,3,4,51,6,7,8,9,10];
let sum = 0
sum = arr.reduce((result, value) => {
    return result + value;
})
console.log(sum); // 55


//find the max element in an array
let max = arr.reduce((result, value) => {
    return result >value ? result : value;
})

console.log(`max of the element is ${max}`); // 10
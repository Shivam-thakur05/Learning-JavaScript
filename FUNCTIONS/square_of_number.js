/*
let arr = [1,2,3,4,5]
arr.forEach((val) => {
    console.log(val*val)
})
*/

// map method

/*
let nums = [2,3,4,5,6];
let newArr = nums.map((val) =>{
    return val*val;
})
console.log(newArr)
*/

//filter method
/*
let arr = [1,2,3,4,5,6,7,8]
let even = arr.filter((val) => {
    return val%2 === 0
})
console.log(even)
*/

//reduce method
let arr = [1,2,3,4]
let total = arr.reduce((res,curr) => {
    return res +curr;
})
console.log(total)
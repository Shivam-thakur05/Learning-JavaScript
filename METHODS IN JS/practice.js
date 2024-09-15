let arr = [1,2,3,4,51,6,7,8,9,10];
let sum = 0
sum = arr.reduce((result, value) => {
    return result + value;
})
newArr1 = arr.filter((element) => {
    return element > 5;
})
newArr2 = arr.map((element) =>{
    return element*2;
})

console.log(sum); // 55
console.log(newArr1); // [51,6,7,8,9,10]
console.log(newArr2); // [2,4,6,8,10,12,14,16,18,20]
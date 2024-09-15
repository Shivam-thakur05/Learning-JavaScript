//create a new array of elements that give true for a consition/filter. Eg: all even elements
let arr = [1,2,3,4,5,6,7,8,9,10];
let newArr = arr.filter((element) => {
    //return element%2 === 0;
    // return element%2 !== 0;
    return element > 5;
})
console.log(newArr); // [2,4,6,8,10]
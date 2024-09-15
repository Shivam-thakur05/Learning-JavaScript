//call back function :- A function that is passed as an argument to another function is called a callback function.


let arr = [1,2,3,4,5,6,7,8,9,10];

arr.forEach(function printVal(element) {
    console.log(element, end="");
}
);


// let arr2 = [1,2,3,4,5,6,7,8,9,10];

// arr2.forEach(arr2 => console.log(arr2),end="");


let numbers = [1,2,3,4,5];
// numbers.forEach(function square(element){
//     console.log(element*element);
// })

numbers.forEach((element) => {
    console.log(element*element);
})
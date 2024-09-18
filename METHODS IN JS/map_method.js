//create an array with the results of some operation. The value its callbacak returns are used to form new array

let arr = [1,2,3,4,5];

arr.map((element) => {
    console.log(element);
})

//store the previous array value into new array
let newArr = arr.map((element) => {
    return element;
})

console.log(newArr),end="";

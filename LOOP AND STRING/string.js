let s = "hello world"
console.log(s.length)
let str = "shivam thakur";

//search by index
console.log(str[4])


//template Literals
let specialString = 'This is a template literal';
console.log(specialString);
console.log(typeof specialString);

let obj = {
    item : "pen",
    price : 10
};

let output = `the cost of ${obj.item} is ${obj.price} rupees` ;
console.log(output)

let a = `the sum of 3 number is : ${1+5+4} `;
console.log(a)

console.log("the cost of ",obj.item, "is",obj.price, "rupees")

//built in functions
let str2 = 'shivam'
console.log(str2.toUpperCase())

let str3 = 'RagHAv'
console.log(str3.toLowerCase())

console.log(str3.replace("R","M"))

console.log(str3.trim())
console.log(str2.concat(str3));
console.log(str2.charAt(3))
console.log(str3.slice(2,4))

let res = "hello" + 112;
console.log(res);
console.log(typeof res)
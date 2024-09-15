/*
let str = "Hello world"
for (const i of str) {
    console.log(i)
}
*/

let s =  "Shivam thakur"
let count = 0
for (const i in s) {
    if (Object.hasOwnProperty.call(s, i)) {
        const element = s[i];
        console.log("ram")
        console.log(count)
        count++

    }
}


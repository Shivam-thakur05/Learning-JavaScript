let fruit = ["mango", "Banana", "Orange", "Papaya"]
console.log(fruit)

let number = [12,31,51,33,63]
console.log(number.length) //property

for(let i = 0; i < 5; i++){
    console.log(number[i])
}

let sum = 0
for(let i of number){
    sum += i;
}
console.log(sum)
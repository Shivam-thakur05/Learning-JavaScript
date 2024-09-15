let arr = ['mumbai','goa','punjab']
arr.forEach(function printVal(val){
    console.log(val.toUpperCase());
})

arr.forEach((val,idx,arr) => {
    console.log(val.toLowerCase(),idx,arr)
})
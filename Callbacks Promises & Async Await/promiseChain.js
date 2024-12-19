function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data 1 fetched successfully');
            resolve("success")
        }, 2000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data 2 fetched successfully');
            resolve("success")
        }, 4000);
    });
}

console.log("fetching data 1.....");
p1 = asyncFunc1();
p1.then((res) => {
    console.log(res);
    console.log("fetching data 2.....");
    p2 = asyncFunc2();  
    
    p2.then((res) => {
        console.log(res);
    })
}) .catch((err) => {
    console.log(err);
});

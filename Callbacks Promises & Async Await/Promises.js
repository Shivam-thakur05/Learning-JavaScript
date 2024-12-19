/*
let myPromise = new Promise((resolve, reject) => {
    let condition = true; // Change this to false to see the rejection

    if (condition) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected.");
    }
});

// Handle the promise
myPromise.then((message) => {
    console.log(message); // This will run if the promise is resolved
}).catch((error) => {
    console.log(error); // This will run if the promise is rejected
});
*/

// promises with api calls

function getData(dataId, getNextData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`data ${dataId}`);
            if (getNextData) {
                resolve(getNextData);
            } else {
                reject("No next data to fetch.");
            }
        }, 5000);
    });
}

getData(1, true) // returns a promise
    .then((nextData) => {
        console.log(`Next data: ${nextData}`);
        return getData(2, false); // chaining another promise
    })
    .then((nextData) => {
        console.log(`Next data: ${nextData}`);
    })
    .catch((error) => {
        console.log(`Error: ${error}`);
    });
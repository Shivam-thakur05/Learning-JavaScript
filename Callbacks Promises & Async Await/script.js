//callback 
function getData1(dataId, getNextData){
    setTimeout( () => {
        console.log(`data ${dataId}`);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}

//promise
function getData2(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`data ${dataId}`);
            resolve("success");
        }, 2000);
    });
}



//async await
function getData3(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`data ${dataId}`);
            resolve("success");
        }, 2000);
    });
}
async function getWeatherApi(){
    await getData3(1);
    await getData3(2);
}
// call the async function
getWeatherApi();

//if we  don't want to call the function then we can use IIFE
/*
(async function () {
    await getData3(1);
    await getData3(2);
})();
*/




/*
//Promise chaining
getData2(1)
.then(() => {
    return getData2(2);
})
.then(() => {
    return getData2(3);
}
)
.then(() => {
    return getData2(4);
}
)
.then(() => {
    return getData2(5);
}
)
.then(() => {
    return getData2(6);
}
)

*/

// the above code is same as below code but the above code is more readable and easy to understand.



//callback hell
/*
getData1(1, () => {
    getData1(2, () => {
        getData1(3, () => {
            getData1(4, () => {
                getData1(5, () => {
                    getData1(6, () => {
                    });
                });
            });
        });
    });
}
);
*/
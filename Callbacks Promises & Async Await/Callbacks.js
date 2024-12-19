/*
1. function sum(a,b){
    console.log(a+b);
}
function sumCallback(a,b, callBack){
    callBack(a,b);
}
sumCallback(2,3,sum);

2.
function doSomething(callback) {
    console.log('Doing something...');
    // Simulate an asynchronous operation using setTimeout
    setTimeout(() => {
    console.log('Operation complete.');
    callback();
    }, 2000);
}
function onComplete() {
    console.log('Callback executed.');
}
doSomething(onComplete);
*/


//callback hell

function getData(dataId, getNextData){
    setTimeout( () => {
        console.log(`data ${dataId}`);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}

getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4, () => {
                getData(5, () => {
                    getData(6, () => {
                        getData(7, () => {
                            getData(8, () => {
                                getData(9, () => {
                                    getData(10);
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}
);


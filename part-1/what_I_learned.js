// callbacks An event handler is
// a particular type of callback. A callback is just a function that's passed into another function, with the expectation that the callback will
// be called at the appropriate time.

// function doStep1(init){
//     return init +1;
// }

// function doStep2(init){
//     return init + 2;
// }

// function doStep3(init){
//     return init + 3;
// }

// function doOperation(){
//     let result = 0; 
//     result = doStep1(result);
//     result= doStep2(result);
//     result= doStep3(result);

//     console.log(result)
// }

// doOperation();

//however we can create callback hell that does the same thing!

function doStep1(init,callback){
    const result = init + 1;
    callback(result);
}

function doStep2(init, callback){
    const result = init + 2;
    callback(result);
}

function doStep3(init, callback){
    const result = init + 3;

}


function doOperation(){
    doStep1(0,(result1)=>{
        doStep2(result1,(result2)=> {
            doStep3(result2, (result3)=> {
                console.log(result3);
            });
        });
    });
}
doOperation();



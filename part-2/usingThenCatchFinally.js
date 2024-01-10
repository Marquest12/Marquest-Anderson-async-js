function fun1(){
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            resolve("404")
        },200)
    })
}

function fun2(){
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            reject("yay")
        },100)
    })
}

function onSuccess(data){
    console.log(data)
}

function OnError(errorcode){
    console.log("Error"+ errorcode)
}

function onFinally(){
    console.log("this will be last")
}

fun1()
.then(fun2)
.then(onSuccess)
.catch(OnError)
.finally(onFinally)
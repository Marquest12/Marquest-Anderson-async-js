function getWeather(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("Sunny")   
        },100)
    })
}

function getWeatherStatus(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            switch(weather){
                case 
                "Sunny":
               resolve("bright sunny day") 
               break
               case "Cloudy":
                resolve("Its a cloudy day")
                break
                case "Rainy":
                resolve("bring an umbrella")
                break
                default:
                    reject("huh")
            }
            
        },100)
    })
}

function onSuccess(data){
    console.log("Success param"+ data)
}

function OnError(error){
    console.log("Error param"+ error)
}

getWeather()
.then(getWeatherStatus)
.then(onSuccess,OnError)
.catch(OnError)
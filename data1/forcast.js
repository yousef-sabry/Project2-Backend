
const request = require("request");


const forcast = (latitude , longtitude , callback )=> {



    const url = "http://api.weatherapi.com/v1/current.json?key=c5e373bd2f254e49b8383947241003&q=" + latitude + "" + longtitude;
    
    request({url , json : true } , (error , response ) => {
        
        if(error){
            callback("ERROR HAS OCARED" , undefined)
        }else if (response.body.error){
            callback(response.body.error.message , undefined)
        }else{
            callback(undefined , response.body.location.name + "it is" + response.body.current.condition.text )
        }
        
    
    })
    }
    module.exports=forcast;
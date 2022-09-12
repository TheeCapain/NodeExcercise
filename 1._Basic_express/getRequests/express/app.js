//const express = require("express")
//const app = express();

const app = require("express")();

//En callback function er en function som bliver kaldt af en anden funktion

app.listen(8080, ()=>{
    console.log("Server is running ", 8080)
});

app.get("/deers/:id/", (req,res) => {
    if(Number(req.params.id) === 1){
        res.send({
            deer : "Bambi", theBestAndOGDeer:true
        })
      
    }else{
        res.send({
            deer: "Oh deeer"
        })
       
    }
});


app.get("/actors",(req, res)=>{
    res.send({
        message: "Info about actors"
    })
})

//Måde 1
//How to send data with get
//Query paramters with query string
//deers?Key=value&key2=value2

//måde 2
//Path variable
// /deers/{id}
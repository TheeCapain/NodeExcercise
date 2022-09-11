//Her laves et scope i et scope
{
    var somevalue = false
    //endnu et scope
    {
        var somevalue = true
    }
    console.log(somevalue)
}

const me = "onlkjkjlkjklkl"


console.log(me)


for (var i = 0; i<5; i++){
    setTimeout(()=>{
        console.log(i);
    })
}

app.get("/deers", (req,res)=>{
    res.send({size:"BIG"})
})

app.listen(8080)
const app = require("express")();

app.listen(8080, ()=>{
    console.log("Server is running ", 8080)
});

const guns = [
    {id : 1,
    name : 'ak-47',
    magsize : 47
},{
    id : 2,
    name : 'Glock',
    magsize : 9,
}]

app.get("/guns/:id/", (req,res) => {
        res.send(guns[req.params.id-1])
   

});

app.get("/guns", (req, res) => {
        res.send({
           guns
        });
    });


app.get("/guns/all/", (req, res) => {
    console.log("Det virker")
        res.send({
           guns
        });
    });
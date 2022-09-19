import express from "express"
const app = express();

let nextId = 3;

app.use(express.json());
let guns = [
    {
    id : 1,
    name : 'ak-47',
    magsize : 47
},{
    id : 2,
    name : 'Glock',
    magsize : 9,
}]


//GET
app.get("/guns/:id/", (req,res) => {
    const found = guns.find(weapon => weapon.id === Number(req.params.id));
    found.id = currentId++
    res.send({data: found})
   

});

//GET ALL
app.get("/guns", (req, res) => {
        res.send({
           guns
        });
});

app.use(express.json());

//POST
app.post("/guns",(req,res)=>{
    const tempGun = req.body;
    tempGun.id = nextId++;
    guns.push(tempGun);
    res.send({data:tempGun});
    console.log(guns)
})

app.delete("/guns/:id",(req,res)=>{
    let tempGun = guns.findIndex(gun => gun.id === Number(req.params.id))
    if(tempGun !== -1){
        res.send(guns.splice(tempGun.id,1))
    } else {
        res.status(404).send({data: undefined, message: `No weapon found by id: ${Number(req.params.id)}`});
    }
    console.log(guns)
})

//PATCH opdatere dele af resourcen
app.patch("/guns/:id",(req,res)=>{
    let tempGun = guns.findIndex(gun => gun.id === Number(req.params.id))
    if(tempGun !==-1){
        const foundWeapons = guns[tempGun]
        const gunToUpdate = {...foundWeapons,...req.body,id: Number(req.params.id)};
        res.send({data:gunToUpdate})
    } else{
        res.status(404).send({data: undefined, message: `No weapon found by id: ${Number(req.params.id)}`});
    }
    
})


//PUT opdatere hele resourcen
app.put("/guns/:id",(req,res)=>{
let tempGun = guns.findIndex(gun => gun.id === Number(req.params.id))
updateGun = req.body;
guns[tempGun] = updateGun
console.log(guns)


res.send(guns)
})


app.listen(8080, ()=> console.log("server is up and running"))


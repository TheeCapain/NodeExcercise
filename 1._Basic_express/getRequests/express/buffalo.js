class Buffalo {
    constructor (name){
        this.name=name;
    }

    tellName(){
        setTimeout(()=>{
            console.log(this.name)
        }, 1000)
    }

   Buffalo = new Buffalo("Bill")

}


//Hoisting
console.log(add(4,1))

function add(a,b){
    return a+b
}
//Anonymous function
const addAnotherfunction = function(a,b){
    return a+b;
};

const addArrowFunction = function(a,b){
    return a+b
}

//implicit return
const arrowFunctionCompact = (a,b) => a+b;

function callbackcaller(anycallBackFun, name){
    return anycallBackFun(name)
}

const spitting = (name) => `${name} is spitting`;

console.log(callbackcaller(spitting,'Amanda'))

const shooting = (name) => `${name} is shooting`

console.log(callbackcaller(shooting, "Malte"))

console.log(callbackcaller((name) => `${name} is running away `,"Murat"))


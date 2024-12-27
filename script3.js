// function without parameter and without return type

function addA(){
    console.log(9+9)
}
addA()
addA()
addA()
addA()

// function with parameter and without return

function addB(x,y){
    console.log(x+y)
}



addB(12,3)
addB(5,3)
addB(5,2)

// function with parameter and with return type 
function addC(x,y){
    return x + y
}
let q1 = addC(12,4)
console.log(q1)
console.log(q1 + q1)
console.log(q1 / 4)
console.log(q1 * 0.10)
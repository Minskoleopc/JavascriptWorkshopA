// 1 hr
// switchcase
// loops
// functions

//1 hr
// arrays 

// 1/2
// String 


// Set map


// js object
// DOM


// Switchcase without break statement
let city = "indore"
switch(city){
    case "pune":
        console.log("MH")
    case "indore":
        console.log("MP")
    case "jaipur":
        console.log("RJ")
    default:
        console.log("incorrect city name")
}

// program 2
// switch case with break statement

let city2 = "Pune"
switch(city2){
    case "pune":
        console.log("MH")
        break
    case "indore":
        console.log("MP")
        break
    case "jaipur":
        console.log("RJ")
        break
    default:
        console.log("incorrect city")
}
// program 3
city2 = "pune"
switch(city2){
    case "pune":
    case "nagpur":
        console.log("MH")
        break
    case "indore":
    case "bhopal":
        console.log("MP")
        break
    case "jaipur":
    case "udaipur":
        console.log("RJ")
        break
    default:
        console.log("incorrect city")
}

// program 4
// let a1 = 10
// let a2 = 5
// let a3 = 2

// if(a1> a2 && a1 > a3){
//     console.log('a1 is greater')
// }
// else if(a2> a1 && a2 > a3){
//     console.log('a2 is greater')
// }
// else {
//     console.log("a3 is greater")
// }


let a1 = 10
let a2 = 5
let a3 = 2
let biggest = true

switch(biggest){
    case a1 > a2 && a1 > a3:
        console.log("a1 is greater")
        break
    case a2 > a1 && a2 > a3:
        console.log("a2 is greater")
        break
    default:
        console.log("a3 is greater")
}


































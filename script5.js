// conditional statements 

// one input and mutilple outcomes

// numT > 0 && num< = 5 ---->  10 % discount
// numT > 5 && numT <= 10 ---> 20 % discount
// numT > 10               ---> 30 % discount

// if(true){
//     // statements
// }

let numT = 17
if(numT > 0 && numT <= 5){
    console.log('5 % discount')
}
if(numT > 5 && numT <= 10){
    console.log('10 % discount')
}
if(numT > 10){
    console.log('15 % discount')
}

// program 2

numT = -17
if(numT > 0 && numT <= 5){
    console.log('5 % discount')
}
else if(numT > 5 && numT <= 10){
    console.log('10 % discount')
}
else if(numT > 10){
    console.log('15 % discount')
}
else {
    console.log('incorrect input')
}
// program 3

let marks  = 92

if(marks > 90){
    console.log("Grade A")
}
if(marks >= 75){
    console.log("Grade B")
}
if(marks >= 65){
    console.log("Grade C")
}

if(marks > 90){
    console.log("Grade A")
}
else if(marks >= 75){
    console.log("Grade B")
}
else if(marks >= 65){
    console.log("Grade C")
}
else {
    console.log("Please try again")
}

// program 4
let a = 10
let b = 50
if(a > b){
    console.log("a is greater")
}
else {
    console.log("b is greater")
}

// program 6

let x1 = 10
let x2 = 5
let x3 = 2

if(x1 > x2 && x1 > x3){
    console.log("x1 is greater")
}
else if(x2 > x1 && x2 > x3){
    console.log("x2 is greater")
}
else {
    console.log("x3 is greater")
}

// ternary 


let h = 10
let g = 50

// if(h > g){
//     console.log("h is greater")
// }
// else {
//     console.log("g is greater")
// }

// condition ? statement:statement2
h > g ? console.log("h is greater"):console.log("g is greater")

let age = 18
let q2 = age >= 18 ? "candrive":"cannot drive"
console.log(q2)


// variables 
// arithmetic operator
// types 
// comparison 
// logical operator
// conditional statements
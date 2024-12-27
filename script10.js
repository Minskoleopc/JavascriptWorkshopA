//              0        1         2        3
let names = ["chinmay","sarika","poorva","ram"]
console.log(names[3])

// length
console.log(names.length)
// length-1 is always lastindex

for(let i = 0 ; i < names.length ; i++){
    //console.log(i)
    console.log(names[i])
}

//              0        1       2       3
let fruits = ["apple","mango","chikoo","papaya"]
for(let i = 0 ; i < fruits.length ; i++){
    //console.log(i)
    console.log(fruits[i])
}

let i1 = 0
while(i1 < fruits.length){
    console.log(fruits[i1])
    i1 = i1 + 1
}

// Properties and methods of array
// pop(),unshift(), shift(),push()
// push()
// action - add the new element to end of array
// return - new length of array


let cities = ["pune","mumbai","bangalore","kolkata"]
let q1 = cities.push("goa")
console.log(q1)
console.log(cities)

let q3 = cities.unshift("bhopal")
console.log(q3)
console.log(cities)

// program 2
// pop()
// shift()
//                  0          1           2            3
let vegetables = ["potato","cabbage","cauliflower","ladyfinger"]
let q4 = vegetables.pop()
console.log(q4)
console.log(vegetables)

let q5 =vegetables.shift()
console.log(q5)
console.log(vegetables)


// includes
vegetables = ["potato","cabbage","cauliflower","ladyfinger"]
let q55 = vegetables.includes("Potato")
console.log(q55)

// indexof()
//           0         1         2      3
let country = ["india","srilanka","cuba","china"]
let q6 = country.indexOf('Cuba')
console.log(q6)

// concat()
let numbersA =  [11,22,33]
let numbersB = [44,55,66]
let q7 = numbersA.concat(numbersB)
console.log(q7)

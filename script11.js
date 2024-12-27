// map() , filter() , reduce(),forEach(), find(), findIndex()
// some(), every()

let birthYear = [2000,2001,2002,2003]
let q7 = birthYear.map(function(el,index,arr){
        //console.log(el,index,arr)
        return 2024 - el
})
console.log(q7)



// // [24,23,22,21]
// let ages = []

// for(let i  = 0 ; i < birthYear.length ; i++){
//    // console.log(i)
//    //console.log(birthYear[i])
//    //console.log(2024 - birthYear[i])
//    ages.push(2024 - birthYear[i])
// }
// console.log(ages)

// program 2

let numnbersA  = [1,2,3,4,5,6,7,8,9,10]
let q8 = numnbersA.map(function(el,index,arr){
    return el * 2
})
console.log(q8)

// program 3

let marks = [78,66,88,99,44,55,66]
let q5 = marks.filter(function(el,index,arr){
    return el > 80
})
console.log(q5)

let transactions = [100,-90,88,-98,40,56,77]
let deposit = transactions.filter(function(el,index,arr){
    return el > 0
})
console.log(deposit)
let withdrawl = transactions.filter(function(el,index,arr){
    return el < 0
})
console.log(withdrawl)



// let above80 = []

// for(let i = 0 ;i < marks.length ; i++){
//     if(marks[i] > 80){
//        // console.log(marks[i])
//        above80.push(marks[i])
//     }
// }
// console.log(above80)

let numbers = [11,22,33]
let total = 0
for(let i = 0 ; i < numbers.length ; i++){
    total = total + numbers[i]
    //       0    +   11   =====> 11
    //       11   +    22  =====> 33
    //       33   +    33  =====> 66
}
console.log(total)

numbers = [11,22,33]
let q22 = numbers.reduce(function(acc,el,index,arr){
    return el + acc
},5)
console.log(q22)

let cities = ["pune","mumbai"]
let q2 = cities.forEach(function(el,index,arr){
    console.log('welome '+ el)
})
console.log(q2)

let above40 = [11,22,33,44,22,33,44,55]
let w2 = above40.filter(function(el,index,arr){
    return el > 40
})
console.log(w2)

let w3 = above40.find(function(el,index,arr){
    return el > 40
})
console.log(w3)

let w4 = above40.findIndex(function(el,index,arr){
    return el > 40
})
console.log(w4)

let jk = [11,22,33,44,55]
let r44 = jk.every(function(el,index,arr){
    return el > 20
})
console.log(r44)

let r55 = jk.some(function(el,index,arr){
    return el > 200
})
console.log(r55)
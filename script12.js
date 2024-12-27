// sort()
let names = ["chinmay","amol",'mahesh',"sachin"]
let r55 = names.sort()
console.log(names)
console.log(r55)

let arrayB = [11,1,22,33,44,55,66,77]
let q11 = arrayB.sort((a,b)=>a-b)
let q12 = arrayB.sort((a,b)=>b-a)
console.log(q11)
console.log(q12)

// reverse()

let arrayE = [11,22,33,44,55]
arrayE.reverse()
console.log(arrayE)

// fill()


let d = [11,22,33,44,55,66]
let r = d.fill('-',1,5)
console.log(r)



// flat()
//                    0                    1              2
//               0        1        0          1          0
// let states  = [["pune","nagpur"],["jaipur","udaipur"],["indore"]]

// console.log(states[0][0])
// console.log(states[1][0])
// console.log(states[2][0])
// console.log(states.flat())

// //slice()
// //              0         1        2        3      4                            
// let cities  =["mumbai","nagpur","chennai","goa","wardha"]
// //             -5          -4      -3        -2       -1
// //cities.slice(startIndex,Endindex(not included))

// console.log(cities.slice(3))
// console.log(cities.slice(1,4))
// console.log(cities.slice(-5,4))
// console.log(cities.slice(-3))
// console.log(cities.slice(1,-1))
// console.log(cities.slice(-5,4))
// console.log(cities.slice(-1,-4))

// //splice()
// //               0       1        2        3
// let flowers = ["rose","lily","jasmine","marrygold"]

// // flowers.shift()
// // flowers.pop()
// //flowers.splice(startIndex, numberOfEletoBeDelete)
// flowers.splice(2,2,"lotus","sunflower")
// console.log(flowers)

// // at()

// // let ra1  = [11,22,33,44]
// // ra1.at(2)
// // ra1.indexOf(22)



// join()


let info = ["chinmay","deshpande",7709192441]
e = info.join(' ')
console.log(e)


// // let a = 10
// // let b = a
// // a = 300
// // console.log(a) // 300
// // console.log(b) // 10

// // let na = [11,22,33,44]
// // let ma = na
// // ma.push(333)
// // console.log(na)
// // console.log(ma)
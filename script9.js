// intialization
// while(condition){
    // statements 
    // increment/ decrement
//}

let i1 = 1
while(i1 <= 3){
    console.log(i1) //1 // 2 // 3
    i1 ++ // 2 // 3 // 4
}

let i2 = 1
while(i2 <= 5){
    console.log(i2) // 1 // 2 // 3 // 4 // 5
    i2 = i2 + 1 // 2 // 3 // 4 // 5 // 6
}
let i3 = 5
while(i3 >= 1){
    console.log(i3) // 5 // 4 //3 // 2 // 1
    i3 -- // 4 // 3 // 2 //1 // 0
} 

let i4 = 1
while(i4  <= 10){
    console.log(i4 * 2)
    i4 = i4 + 1
}

let i5 = 2 
while(i5 <= 20){
    console.log(i5)
    i5 = i5 + 2
}

let i6 = 50
while(i6 >= 5){
    console.log(i6)
    i6 = i6 - 5
}

let i7 = 1
while(i7 <= 5){
    if(i7 == 3){
        break
    }
    console.log(i7) // 1 //2 
    i7 = i7 + 1 // 2 // 3
}


let i8 = 1
while(i8 <= 5){
    if(i8 == 3){
        i8++ // 4
        continue
    }
    console.log(i8)  // 1 //2 //4 //5
    i8 = i8 + 1  // 2 //3 // 5 // 6
}






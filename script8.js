/// for

// for(intialization ; condition ; increment/dexcrement){
//     // statements
// }

// print 1 to 3
for(let i = 1 ; i <= 3; i++){ // 2 // 3 // 4
    console.log(i) // 1 // 2 // 3
}


// program 3
// print 1 to 5
for(let i = 1 ; i <= 5 ; i++){ // 2 // 3 // 4 // 5 // 6
    console.log(i) // 1 // 2 // 3 // 4 //5
}

// program 4
// print hello 3 tyms
for(let i = 1 ; i <= 3 ; i++){
    console.log("hello")
}

// program5
// print 5 to 1
for(let i = 5 ; i >= 1 ; i--){ // 4 // 3 // 2 // 1 // 0
    console.log(i) // 5 // 4 // 3 // 2 // 1
}


// program 6
// print 3 to 1
for(let i = 3 ; i >= 1 ; i--){  // 2 //1 // 0
    console.log(i) // 3 // 2 // 1
}
// table of 2
// program 7

for(let i = 1 ; i <= 10 ; i++){
    console.log(i * 2)
}

// table of 2
for(let i=2 ; i<= 20 ; i= i+2){ // 4 // 6 // 8 ---------22
    console.log(i) // 2 // 4 // 6 --------- 20
}
// table of 5
for(let i = 50 ; i >= 5 ; i = i-5){
    console.log(i)
}

// break and continue

for(let i = 1 ; i <= 5 ; i++){  // 2 // 3
    if(i == 3){
        break
    }
    console.log(i)  // 1 //2
}

for(let i = 1 ; i <= 5 ; i++){  //2  // 3
    console.log(i)  // 1 // 2 // 3
    if(i == 3){
        break
    }
    
}
for(let i = 5 ; i >= 1 ; i--){ // 4 // 3
    if(i == 3){
        break
    }
    console.log(i) // 5 // 4
}


// continue
for(let i = 1 ; i <= 5 ; i++){ //2 // 3 // 4 // 5 // 6
    if(i == 3){
        continue
    }
    console.log(i)// 1 // 2 // 4 // 5
}








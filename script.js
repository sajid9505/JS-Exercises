/* JavaScript code here */

// Task 1
console.log("External JS")


//Task 2

function arraySum (arr){
    
    let sum = 0
    arr.forEach(element => {
            sum = sum + element;
    }); 
    return sum    
}

let sum = arraySum([1,2,3])
console.log(sum)
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
    
    // return (multiplier) => {return sum*multiplier}

}

let sum = arraySum([1,2,3])
console.log(sum)
// console.log(sum(2))

//task 3

function validEmail (email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ; 
}
console.log(validEmail("sajid")); 
console.log(validEmail("sajid.mahmud9505@gmail.com"));

 //task 4
 var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true,
        updateStatus:function (read){this.readingStatus=read}
    },
    { 
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true,
        updateStatus:function (read){this.readingStatus=read}

    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false,
        updateStatus:function (read){this.readingStatus=read}

    }];
    console.log(library[1]readingStatus)
    library[1].updateStatus(false);
    console.log("reading status",library[1].radingStatus)
    function readinfStatus(index{
        return library[index].readingStatus
    }
    console.log(readStatus(2))
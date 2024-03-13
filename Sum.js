
let a = prompt('Enter the numbers');

let arr = function(){

    let b = a.split('').map(Number);

    let sum = b.reduce((res,curr) => {
        return res + curr;
    });
        console.log(sum);
}

arr();
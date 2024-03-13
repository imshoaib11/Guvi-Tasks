const median = function(a,b) {

    let c = [...a,...b].sort((a,b) => (a-b));
    const half = c.length/2 |0;
    if(c.length%2){
        return c[half];
    }
    else{
        return (c[half-1]+c[half])/2;
    }
}

let arr1 = [3,5,7,8,6];
let arr2 = [4,6,2,1];

console.log(median(arr1,arr2));
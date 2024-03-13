(function(a,b) {
    let c = [...a,...b].sort((a,b) => (a-b));
    const half = c.length/2 |0;
    if(c.length%2){
        return c[half];
    }
    else{
        return (c[half-1]+c[half])/2;
    }

})([3,5,7,8,6],[4,6,2,1]);
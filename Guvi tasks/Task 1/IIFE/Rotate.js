(function (a, n, k)  {

    k = k % n;

    for (let i = 0; i < n; i++) {
        if (i < k) {

            console.log(a[n +i - k] + ' ' );
        }
        else {
            console.log(a[i - k] +'');
        }    
    }    


let Array = [1,2,3,4,5];
let N = Array.length;
let k =2;

})(Array, N, k);


let n = prompt('Enter the number')
(function() {
    let arr = n.split('').map(Number);
    let oddArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2!= 0) {
            oddArr.push(arr[i]);
        }
    }

    console.log(oddArr);
})();



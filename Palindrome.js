let palindrome = function (arr) {
    let isPalindrome = true;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i]!== arr[arr.length - i - 1]) {
            isPalindrome = false;
            break;
        }
    }

       return isPalindrome;
}

console.log(palindrome([1,2,3,2,1]));
console.log(palindrome([1,2,3,2,4]));
let str = function(msg) {

let newStr = msg.split('').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1))
}).join(' ');

console.log(newStr);
}

str('this is me');
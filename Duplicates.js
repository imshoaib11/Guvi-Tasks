let duplicateRemoval = function (n){
    let unique = [];
    let arr = n.split('');
    arr.forEach(element => {
        if(!unique.includes(element)){
            unique.push(element);
        }
    });

    console.log(unique)
}

duplicateRemoval('123445333521');
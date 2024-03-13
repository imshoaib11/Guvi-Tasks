let a = prompt('Enter the numbers')

(function(){

    let n = a.split('').map(Number);

    let l = n[0];

    let r = n[1];

    let count = 0;

    var flag = 0;

    for(let i = 0; i<=r; i++){
        flag = 0;

        if(i==2){

            count = count + 1;
            continue;
        }

        for(let j = 0; j<i; j++){
            if(i%j==0){
                flag = 1;
                
            }
        }
        if(flag==0){
            count = count + 1;
        }
    }
        console.log(count);
})();



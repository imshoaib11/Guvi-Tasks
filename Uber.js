
class cab{
    static Cab = 'Uber';
    #price = 10;

    constructor(Distance, Time){
        this.km = Distance;
        this.peakHours = Time;
        
    }

    getFare(){
        if(this.peakHours >= 19 && this.peakHours < 22) {
            return (this.#price + 5)*this.km;
        }

        else if(this.peakHours >= 22 && this.peakHours <=23 || this.peakHours >=0  && this.peakHours <=6) {
            //return this.overNight = true;
            return (this.#price + 10)*this.km;
        }

        else{
            return this.#price*this.km;
        }
        
    }

}



let c1 = new cab(4.3, 20);
let c2 = new cab(6, 16);
let c3 = new cab(2,2);

console.log(`Dear Customer your fare is ${c1.getFare()}`);
console.log(`Dear Customer your fare is ${c2.getFare()}`);
console.log(`Dear Customer your fare is ${c3.getFare()}`);
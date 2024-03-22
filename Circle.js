
class circle {
    constructor(r, clr)
    {
        this.radius = r;
        this.color = clr;
    }

    get circleRadius()
    {
       return this.radius;
    }
    
    set circleRadius(r)
    {
        this.radius = r;
    }

    get circleColor()
    {
        return this.color;
    }

    set circleColor(clr)
    {
        this.color = clr;
    }

    get toString()
    {
        return `circle[Raduis = ${this.radius} Colour = ${this.color}]`;
    }

    get area()
    {
        return Math.PI * this.radius * this.radius;
    }

    get circumference()
    {
        return 2 * Math.PI * this.radius;
    }
}

let Circle1 = new circle(1.0, 'red');

console.log(Circle1.circleRadius);
 Circle1.circleRadius = 2.2;
 console.log(Circle1.circleRadius);

console.log(Circle1.circleColor);
Circle1.circleColor ='blue';
console.log(Circle1.circleColor);

console.log(Circle1.toString);

console.log(Circle1.area);

console.log(Circle1.circumference);



class movie {
    constructor(x, y, z = 'PG') {
        this.title = x;
        this.production = y;
        this.rating = z;
    }

    
}

    let movie1 = new movie('Casino Royale','Eon Productions', 'PG13');
    let movie2 = new movie('Premalu','Red Giant');

    console.log('Name of the movie is',movie1.title);
    console.log('Presented by',movie1.production);
    console.log('Rating:',movie1.rating);

    console.log(movie2.rating);
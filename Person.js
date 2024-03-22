
class Person {
    constructor()
    {
        this.name = 'John';
        this.age = 30;
        this.gender = 'Male';
        this.birthDate = new Date
        this.height = '175 cms';
        this.weight = '70 kg';
        this.maritalStatus = 'Married';
        this.occupation = 'Developer';
        this.nationality = 'Indian';
        this.address = 'Madurai, TamilNadu';
        this.mobileNumber = 8124778823;
        this.fatherName = 'Arif'
        this.education = 'B.sc IT';

    }

    display()
    {
        console.log(`The person name is ${this.name} age of ${this.age} from ${this.address}, he is a ${this.occupation} he has pursued ${this.education} and you can reach him on his phone by ${this.mobileNumber}`);
    }

}

const person = new Person();

person.display();
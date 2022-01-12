interface address{
    city: String;
    pincode: number;
    display():void;
}

interface Employee extends address{
    id: number;
    name: String;
}

var v:Employee={
    id: 1,
    name: 'vasanth',
    city: 'banglore',
    pincode: 560036,
    display: function (): void {
        console.log('demo');
    }
}

console.log('---json implementation')
console.log(`name : ${v.name} and city is ${v.city}`)


class Manager implements Employee{
    id: number
    name: String
    city: String
    pincode: number

    constructor(id:number,name: String,city: String,pincode: number){
        this.id=id;
        this.name=name;
        this.city=city;
        this.pincode=pincode;
    }
    display(): void {
        console.log(`this is name ${this.name} and city is ${this.city}`);
    }
}

var employee:Manager=new Manager(1,'vasanth','banglore',30000);

console.log('object implementation-----');
employee.display();



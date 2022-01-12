export class student{
    id: number;
    name: String;
    marks: number;

    constructor(id : number,name : String,marks: number){
        this.id=id;
        this.name=name;
        this.marks=marks;
    }
    setId(id:number){
        this.id=id;
    }
    getId(): number{
        return this.id;
    }
    setName(name:String){
        this.name=name;
    }
    getName(): String{
        return this.name;
    }

verify(){
    if(this.marks>35){
        console.log(`student name is ${this.name} and marks is ${this.marks} and passesd `);
    }
    else{
        console.log('fail')
    }
}
}
class teacher extends student{
    subject:String;
    constructor(id : number,name : String,marks: number,subject :String){
        super(id,name,marks);
        this.subject=subject;
    }

}

var std:student=new teacher(1,'vasanth',91,'maths');
std.verify();
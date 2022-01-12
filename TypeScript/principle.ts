import {student} from './student'
class Principale extends student{

    constructor(id:number,name:String,marks:number){
        super(id,name,marks);
    }
}
var pp:Principale=new Principale(1,'vasanth',22);
console.log(pp.name);
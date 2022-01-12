var emp = { 'name': 'vasanth', 'age': 22, 'salary': 10000, 'city': 'banglore' };
console.log(emp.age);
var emp1 = {
    'name': 'vasanth',
    'age': 22,
    'salary': 100000
};
var emp2 = {
    'name': 'va',
    'age': 22,
    display: function () {
        return "Hii this is display method";
    }
};
console.log('------------');
console.log(emp1.name);
console.log(emp1.age);
console.log(emp1.salary);
console.log('--------------');
console.log('name ' + emp2.name);
console.log('age ' + emp2.age);
console.log('display ' + emp2.display()); //this will be undefined

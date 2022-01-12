var v = {
    id: 1,
    name: 'vasanth',
    city: 'banglore',
    pincode: 560036,
    display: function () {
        console.log('demo');
    }
};
console.log('---json implementation');
console.log("name : " + v.name + " and city is " + v.city);
var Manager = /** @class */ (function () {
    function Manager(id, name, city, pincode) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.pincode = pincode;
    }
    Manager.prototype.display = function () {
        console.log("this is name " + this.name + " and city is " + this.city);
    };
    return Manager;
}());
var employee = new Manager(1, 'vasanth', 'banglore', 30000);
console.log('object implementation-----');
employee.display();

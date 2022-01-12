"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var student = /** @class */ (function () {
    function student(id, name, marks) {
        this.id = id;
        this.name = name;
        this.marks = marks;
    }
    student.prototype.setId = function (id) {
        this.id = id;
    };
    student.prototype.getId = function () {
        return this.id;
    };
    student.prototype.setName = function (name) {
        this.name = name;
    };
    student.prototype.getName = function () {
        return this.name;
    };
    student.prototype.verify = function () {
        if (this.marks > 35) {
            console.log("student name is " + this.name + " and marks is " + this.marks + " and passesd ");
        }
        else {
            console.log('fail');
        }
    };
    return student;
}());
exports.student = student;
var teacher = /** @class */ (function (_super) {
    __extends(teacher, _super);
    function teacher(id, name, marks, subject) {
        var _this = _super.call(this, id, name, marks) || this;
        _this.subject = subject;
        return _this;
    }
    return teacher;
}(student));
var std = new teacher(1, 'vasanth', 91, 'maths');
std.verify();

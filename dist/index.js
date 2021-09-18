"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Basic Types
var id = 5;
var company = 'Dare XD';
var isPublished = true;
var x = 'Hello';
var age;
age = 20;
var ids = [1, 2, 3, 4, 4];
var arr = [1, true, 'Shola'];
// Tuple
var person;
// Tuple Array
var employee;
employee = [
    [1, '2'],
    [2, 'Joe'],
    [3, 'Joe'],
];
person = [1, 'Dare', true];
x = true;
// Union
var key = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
var user = {
    id: 1,
    name: 'Dare',
};
// Type Assertion
var cid = 1;
// let customerId = <number>cid;
var customerId = cid;
customerId = 2;
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
var pUser = {
    id: 1,
    name: 'Wale',
};
console.log(pUser);
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
// Classes
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return this.name + " is now registered";
    };
    return Person;
}());
var UIDesignerOne = new Person(1, 'Dare Goodness');
var UIDesignerTwo = new Person(2, 'Aminant Okoye');
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.positon = position;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee(3, 'Adeaga', 'Frontdesk');
console.log(emp.register());

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pilot = void 0;
var Employee_1 = require("../employee/Employee");
var Pilot = /** @class */ (function (_super) {
    __extends(Pilot, _super);
    function Pilot(firstName, lastName, salary, position, bornDate, employeeNumber) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.salary = salary;
        _this.position = position;
        _this.bornDate = bornDate;
        _this.employeeNumber = employeeNumber;
        return _this;
    }
    return Pilot;
}(Employee_1.Employee));
exports.Pilot = Pilot;

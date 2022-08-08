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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// basic variable and datatype declaration
var hello = "world";
//functions
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("haha", "hehe"));
;
var PopularTags = ["dragon", "coffee"];
var dragonsTag = "dragon";
var username = "alex";
var pageName = "1";
var errorMsg = null;
var user = null;
//void, any, never and unknown TYPE
//if we dont return something in function it wil be read as void
// void is just undefined or null
var doSomething = function () {
    console.log("doSomething");
};
// any turns off typescript checking
var foo = "foo";
var doSomething2 = function () {
    throw 'never';
    console.log("doSomething");
};
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
var s2 = vUnknown;
//type assertion
var pageNum = "1";
var numericPageNum = pageNum;
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // changeUnchangeableName(): void {
    //     this.unchangeableName = "foo";
    // }
    User.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    User.maxAge = 50; //static properties
    return User;
}());
//inheritance
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
var user1 = new User("Monster", "lessons");
console.log(user1.getFullName);
var admin = new Admin("foo", "bar");
console.log(admin.setEditor("Nixon"));
//generics
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user2 = {
    name: "Jack",
    data: {
        meta: "foo"
    },
    meta: "bar"
};
var user3 = {
    name: "John",
    data: ["foo", "bar", "baz"],
    meta: "Doe"
};
// const result = addId<UserInterface2>(user2);
// console.log("result", result);
// Enums
// const statuses = {
//     notStarted: 0,
//     inProgress: 1,
//     done: 2,
// }
// console.log(statuses.inProgress);
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["NotStarted"] = "notStarted";
    StatusEnum["InProgress"] = "inProgress";
    StatusEnum["Done"] = "Progress";
})(StatusEnum || (StatusEnum = {}));
var notStartedStatus = StatusEnum.NotStarted;
notStartedStatus = StatusEnum.Done;
console.log("Status", notStartedStatus);

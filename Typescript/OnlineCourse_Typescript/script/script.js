var autoincrementId = 13;
var autoincrementCourseId = 30;
var NewUser = /** @class */ (function () {
    function NewUser(Username, Userage, Usernum) {
        this.Id = autoincrementId++;
        this.name = Username;
        this.age = Userage;
        this.age = Usernum;
    }
    return NewUser;
}());
var Courses = /** @class */ (function () {
    function Courses(Cname) {
        this.CourseId = autoincrementCourseId++;
        this.Coursename = Cname;
    }
    return Courses;
}());
var userinfo = new Array();
var cUser;
var courseinfo = new Array();
var cId;
function register() {
    var name = document.getElementById("Uname").value;
    var age = parseInt(document.getElementById("Uage").value);
    var num = parseInt(document.getElementById("Unum").value);
    var adduser = new NewUser(name, age, num);
    userinfo.push(adduser);
    alert("Your registration is complete.\nYour ID is ".concat(adduser.Id));
    document.getElementById("Registerdiv").style.display = "none";
    document.getElementById("maindiv").style.display = "block";
    document.getElementById("availablediv").style.display = "none";
    document.getElementById("coursediv").style.display = "none";
}
function validate() {
    var t = document.getElementById("Unique").value;
    document.getElementById("Registerdiv").style.display = "none";
    var findUser = null;
    for (var i = 0; i < userinfo.length; i++) {
        if (t == userinfo[i].Id.toString()) {
            findUser = userinfo[i];
            cUser = findUser;
        }
    }
    if (findUser == null) {
        alert("please enter valid ID");
    }
    else {
        document.getElementById("maindiv").style.display = "none";
        document.getElementById("availablediv").style.display = "block";
        document.getElementById("coursediv").style.display = "none";
    }
}
function available() {
    document.getElementById("Registerdiv").style.display = "none";
    document.getElementById("maindiv").style.display = "none";
    document.getElementById("availablediv").style.display = "none";
    document.getElementById("coursediv").style.display = "block";
}
function requireddays() {
    document.getElementById("Registerdiv").style.display = "none";
    document.getElementById("maindiv").style.display = "none";
    document.getElementById("availablediv").style.display = "none";
    document.getElementById("coursediv").style.display = "block";
    var language = document.getElementById("language1").value;
    var course = new Courses(language);
    courseinfo.push(course);
    alert("Your registration is complete for language .\nYour courseID is ".concat(course.CourseId));
}
function enrolled() {
    document.getElementById("Registerdiv").style.display = "none";
    document.getElementById("maindiv").style.display = "none";
    document.getElementById("availablediv").style.display = "block";
    document.getElementById("coursediv").style.display = "none";
}

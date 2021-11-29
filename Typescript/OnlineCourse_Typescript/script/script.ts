let autoincrementId=13;
let autoincrementCourseId=30;
class NewUser
{
    Id: number;
    name: string;
    age: number;
    mobile: number;
    constructor(Username: string, Userage: number,Usernum:number) {
        this.Id =  autoincrementId++;
        this.name = Username;
        this.age = Userage;
        this.age = Usernum;
    }
}
class Courses
{
    userid:string;
    Coursename: string;
    CourseId:number;
    days: number;
    constructor(Cname: string,useri:string,uday:number )
    {
        this.CourseId=autoincrementCourseId++;
        this.Coursename =  Cname;
        this.userid=useri;
        this.days=uday;
    }
}
let userinfo: NewUser[] = new Array();
let cUser: NewUser;
let courseinfo: Courses[] = new Array();
let cId: Courses;
function register()
{(document.getElementById("Registerdiv") as HTMLElement).style.display="none";
(document.getElementById("maindiv") as HTMLElement).style.display="block";
(document.getElementById("availablediv") as HTMLElement).style.display="none";
(document.getElementById("coursediv") as HTMLElement).style.display="none";
(document.getElementById("history") as HTMLElement).style.display="none";
}
    let name = (document.getElementById("Uname") as HTMLInputElement).value;
    let age = parseInt((document.getElementById("Uage") as HTMLInputElement).value);
    let num = parseInt((document.getElementById("Unum") as HTMLInputElement).value);
    let adduser: NewUser = new NewUser(name, age, num);
    userinfo.push(adduser);
    alert(`Your registration is complete.\nYour ID is ${adduser.Id}`);

    

function validate()
{
    let t=(document.getElementById("Unique") as HTMLInputElement).value;
    (document.getElementById("Registerdiv") as HTMLElement).style.display="none";
    let findUser: NewUser = null;
    for (let i = 0; i < userinfo.length; i++) {
        if ( t== userinfo[i].Id.toString()) {
            findUser = userinfo[i];
            cUser = findUser;
        }
    }
    if (findUser == null) {
        alert("please enter valid ID");
    }
    else
    {
        (document.getElementById("maindiv") as HTMLElement).style.display="none";
        (document.getElementById("availablediv") as HTMLElement).style.display="block";
        (document.getElementById("coursediv") as HTMLElement).style.display="none";
        (document.getElementById("history") as HTMLElement).style.display="none";
    }
}
function available()
{
    (document.getElementById("Registerdiv") as HTMLElement).style.display="none";
    (document.getElementById("maindiv") as HTMLElement).style.display="none";
    (document.getElementById("availablediv") as HTMLElement).style.display="none";
    (document.getElementById("coursediv") as HTMLElement).style.display="block";
    (document.getElementById("history") as HTMLElement).style.display="none";
}
function requireddays()
{
    (document.getElementById("Registerdiv") as HTMLElement).style.display="none";
    (document.getElementById("maindiv") as HTMLElement).style.display="none";
    (document.getElementById("availablediv") as HTMLElement).style.display="none";
    (document.getElementById("coursediv") as HTMLElement).style.display="block";
    (document.getElementById("history") as HTMLElement).style.display="none";
    let language = (document.getElementById("language1") as HTMLInputElement).value;
    let id = parseInt(document.getElementById("") as HTMLInputElement).value;
    let days1 = (document.getElementById("days") as HTMLInputElement).value;
   
    courseinfo.push(course);
 
}
function enrolled()
{
    (document.getElementById("Registerdiv") as HTMLElement).style.display="none";
    (document.getElementById("maindiv") as HTMLElement).style.display="none";
    (document.getElementById("availablediv") as HTMLElement).style.display="block";
    (document.getElementById("coursediv") as HTMLElement).style.display="none";
    (document.getElementById("history") as HTMLElement).style.display="none";
}
function enrollcourses()
{
    (document.getElementById("history") as HTMLElement).style.display="block";
    (document.getElementById("Registerdiv") as HTMLElement).style.display="none";
    (document.getElementById("maindiv") as HTMLElement).style.display="none";
    (document.getElementById("availablediv") as HTMLElement).style.display="none";
    (document.getElementById("coursediv") as HTMLElement).style.display="none";

    let t=(document.getElementById("Unique") as HTMLInputElement).value;
  
    for(let i=0;i<userinfo.length;i++)
    { let t:string="";
        if( t== userinfo[i].Id.toString())
        {
            t+="ID"+userinfo[i].Id+"name"+userinfo[i].age+
            

        }
        
    }

}
//...........................quasion 1.....................
setInterval(() => {
let date = new Date()
var digital_clock = document.getElementById("head");
digital_clock.innerHTML = date.toLocaleTimeString();
digital_clock.style.backgroundColor = "yellow";
digital_clock.style.broder  = "2px solid";
digital_clock.style.height  = "150px";
digital_clock.style.width  = "200px";
digital_clock.style.padding  = "10px";
},1000)
//...........................quasion 2..........................
function genreatpassword(){
    const charecters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-*/@#$%^&!\|?/';
    let password = " ";
    for(let i=0; i<=10; i++)
    {
    const pass = Math.floor(Math.random() * charecters.length);
    password +=charecters[pass]
    }
    return password;
}
document.write(genreatpassword());
document.getElementById("pass").innerHTML = "password=" + " " + (genreatpassword());

//............................quasion 3........................
//.......form valitaion.................

function fun(){
    let namee = document.getElementById("name").value   
   let contact = document.getElementById("contact").value
   let age = document.getElementById("age").value
   let email = document.getElementById("email").value
   let password = document.getElementById("password").value
   let conf = document.getElementById("conf").value
   if(namee==""){
       alert("please fill name field")
       document.getElementById("name").focus()
       return false;
   }
   //...................contact............
   if(contact==""){
       alert("please fill contact field")
       document.getElementById("contact").focus()
       return false;
   }
   
   else if(isNaN(contact)){
       alert("only digit")
       document.getElementById("contact").focus()
       return false;
   }
   else if(contact.length<10 || contact.length>10)
       {alert("only 10 digit no.")
       document.getElementById("contact").focus()
       return false;
       }
      
   
       //.................age.............
   if(age==""){
       alert("please fill age field")
       document.getElementById("age").focus()
       return false;
   
   }
   else if(isNaN(age)){
       alert("only digit")
       document.getElementById("age").focus()
       return false;
   }
   
   //...............email.................
   if(email==""){
       alert("please fill email field")
       document.getElementById("email").focus()
       return false;
   }
   else if(!(email.includes("@"))){
       alert("@ it is a must")
       document.getElementById("email").focus()
       return false;
   }
   
   
   //............password............
   
   if(password==""){
       alert("please fill password field")
       document.getElementById("password").focus()
       return false;
   }
   else if(!(password.match(/[@#%&*;:]/))){
       alert(" using spacial charecter @")
       document.getElementById("password").focus()
       return false;
   }
   
   
   //...........confome password....................
   
   
   if(conf==""){
       alert("please fill confirm password field")
       document.getElementById("conf").focus()
       return false;
   }
   else if(password!=conf){
       alert("no match")
       document.getElementById("conf").focus()
       return false;
   }
   }


   //.........................................quasion 4.......................
   function change(){
    document.getElementById("change").src = "../img1.webp";
}

function change1(){
    document.getElementById("change").src = "../img2.jpg";
}

document.write("<br><br>")

//...............................quasion 5........................................
let arry = ["css","HTML", "javascript","PHP"]
document.write(arry)
document.write("<br><br>")

//..........push()
arry.push("reacts");
document.write(arry)
document.write("<br><br>")

//..........pop()
arry.pop();
document.write(arry)
document.write("<br><br>")

//..........unshift()
arry.unshift("reacts");
document.write(arry)
document.write("<br><br>")

//..........shift()
arry.unshift();
document.write(arry)
document.write("<br><br>")

//..........splice()
arry.splice(1,3);
document.write(arry)
document.write("<br><br>")

//..........concat()
arry.concat();
document.write(arry)
document.write("<br><br>")
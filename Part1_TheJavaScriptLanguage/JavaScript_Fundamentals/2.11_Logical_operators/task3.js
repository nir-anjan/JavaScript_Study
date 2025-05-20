let user = prompt("who's there?", "");
let password;

// let message =
//   user == "admin"
//   ?(password = prompt("password",""))
//   ? password == "TheMaster"
//   ? "Welcome"
//   : password == null
//   ? "Canceled"
//   : "Wrong Password"
//   : "Canceled"
//   : user == null
//   ? "Canceled"
//   : "I dont know you";      
// alert(message);


if (user == "admin") {
    password = prompt(password, ""); 
    if (password == "TheMaster") {
        alert("Welcome");
    }
    else if (password == null) {
        alert("Canceled");
    }
    else {
        alert("Wrong Password");
    }
}
else if (user == null) {
    alert("Canceled");
}
else {  
    alert("I dont know you");
}   




let password = document.getElementById("password");
let toggleBtn = document.getElementById("toggleBtn");


toggleBtn.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
    }
    else{
        password.type = "password";
    }


    console.log("The Password are Show & hidden");
}
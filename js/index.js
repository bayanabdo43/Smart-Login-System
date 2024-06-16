var nameUser = document.getElementById("nameUser");
var emailUser = document.getElementById("emailUser");
var userPass = document.getElementById("userPass");
var allUser =[]
var email = document.getElementById("emailLogin");
var pass = document.getElementById("passLogin");
var regex ={
    nameUser : /^[A-Za-z]{3,30}[^0-9]$/,
    emailUser : /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    email : /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    userPass : /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
    password : /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
}
if (localStorage.getItem("newUser")!= null){
    allUser = JSON.parse(localStorage.getItem("newUser"))
}

function addNewUser(){
    user ={
        name : nameUser.value,
        email : emailUser.value,
        password : userPass.value,
    };
    allUser.push(user);
    localStorage.setItem("newUser",JSON.stringify(allUser));
}

function CheckUserFound(){
    for (var i=0 ; i<allUser.length ;i++){
        if (allUser[i].email == email.value && allUser[i].password == pass.value){
            btnlogin.classList.remove('disabled');
        }
    }
    displayUser(i)
}

function loginChec(){
    for (var i=0 ; i<allUser.length ;i++){
        if (allUser[i].email !== email.value || allUser[i].password !== pass.value){
            passLogin.nextElementSibling.classList.remove('d-none')
        }else{
            passLogin.nextElementSibling.classList.add('d-none')
        }
    }
}

function displayUser(index){
    var cartona =``; 
    cartona += `<p>Welcome ${index}</p>`;
    document.getElementById("myData").innerHTML = cartona
}

function validation(element){
    if (regex[element.id].test(element.value)==true){
        userPass.nextElementSibling.classList.add('d-none')
    }else{
        userPass.nextElementSibling.classList.remove('d-none')
    }
    for(var x=0 ; x<allUser.length;x++){
        if (emailUser.value == allUser.email){
            emailEx.classList.add('d-none');
        }else{
            emailEx.classList.remove('d-none');
        }
    }
}

var email = document.forms['form']['email'];
var password = document.forms['form']['passowrd'];

var error1 = document.getElementById('error1')
var error2 = document.getElementById('error2')

email.addEventListener('textInput', email_verify)
password.addEventListener('textInput', password_verify)

function validated(){
    if (email.value.length < 9){
        email.style.border = "1px solid red";
        error1.style.display = "block";
        email.focus();
        return false;
    }
    if (password.value.length < 6){
        password.style.border = "1px solid red";
        error2.style.display = "block";
        password.focus();
        return false;
    }    
}
function email_verify(){
    if (email.value.length >= 8) {
        email.style.border = "1px solid silver";
        error1.style.display = "none";
        return true;  
    }
}
function email_verify(){
    if (password.value.length >= 5) {
        password.style.border = "1px solid silver";
        error2.style.display = "none";
        return true;  
    }
}
function signup() {
    var oinputs = document.getElementsByTagName('input');
    var back_login = document.getElementById('signIn');

    if((!oinputs[0].value || !oinputs[1].value || !oinputs[2].value)) {
        alert('Username and Password cannot be empty');
    }
    else if(oinputs[1].value != oinputs[2].value) {
        alert('Password do not match');
    }
    else if(oinputs[0].value in localStorage) {
        alert('Username already exist');
    }
    else {
        localStorage.setItem(oinputs[0].value, oinputs[1].value);
        alert('Enjoy the game')
        oinputs[0].value = '';
        oinputs[1].value = '';
        oinputs[2].value = '';
        back_login.click();
    }
}

function login() {

    var oinputs = document.getElementsByName('input');
    if ((!oinputs[3].value || !oinputs[4].value)) {
            alert('Username and password cannot be empty')
    }
    else {
        if(oinputs[3].value in localStorage) {
            if(oinputs[4].value == localStorage[oinputs[3].value]) {
                alert('Login successful');
                localStorage.setItem("username", oinputs[3].value);
                oinputs[3].value = '';
                oinputs[4].value = '';
                window.open("../html/Load.html", '_blank');
            }
            else {
                alert('Wrong password');
                oinputs[4].value = '';
            }
            }
        else {
                alert('Username doesnt exist');
                oinputs[3].value = '';
                oinputs[4].value = '';
        }
    }

}
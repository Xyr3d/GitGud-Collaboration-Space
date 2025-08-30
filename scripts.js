function signup() {
    var oinputs = document.getElementsByTagName('input');
    var back_login = document.getElementById('signIn');

    if ((!oinputs[0].value || !oinputs[1].value || !oinputs[2].value)) {
        alert('Username and Password cannot be empty');
    }
    else if (oinputs[1].value !== oinputs[2].value) {
        alert('Passwords do not match');
    }
    else if (localStorage.getItem(oinputs[0].value) !== null) {
        alert('Username already exists');
    }
    else {
        localStorage.setItem(oinputs[0].value, oinputs[1].value);
        alert('Enjoy the game');
        oinputs[0].value = '';
        oinputs[1].value = '';
        oinputs[2].value = '';
        back_login.click();
    }
}

function login() {
    var oinputs = document.getElementsByTagName('input');
    if ((!oinputs[3].value || !oinputs[4].value)) {
        alert('Username and password cannot be empty');
    }
    else if (localStorage.getItem(oinputs[3].value) !== null) {
        if (oinputs[4].value === localStorage.getItem(oinputs[3].value)) {
            alert('Login successful');
            localStorage.setItem("username", oinputs[3].value);
            oinputs[3].value = '';
            oinputs[4].value = '';
            setTimeout(() => {
                window.location.href = "Load.html";
            }, 50);
        }
        else {
            alert('Wrong password');
            oinputs[4].value = '';
        }
    }
    else {
        alert('Username doesn\'t exist');
        oinputs[3].value = '';
        oinputs[4].value = '';
    }
}

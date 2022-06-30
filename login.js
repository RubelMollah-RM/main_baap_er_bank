document.getElementById("loginButton").addEventListener('click', function () {
    const setEmail = document.getElementById("email");
    const userEmail = setEmail.value;
    const setPassword = document.getElementById("password");
    const userPassword = setPassword.value;
    if (userEmail == 'rubel@gmail.com' && userPassword == 'password') {
        window.location.href = 'banking.html';
    }
})
document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check email and password
    if (userEmail == 'riyadhossaint100@gmail.com' && userPassword == 'riyad') {
        window.location.href = 'banking.html';
    }
    else{
        alert('your entered email or password is incorrect');
    }
});



const users = {};

document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const operator = document.getElementById('operator').value;

    if (users[email]) {
        alert("Email already exists. Please choose another one.");
        return;
    }

    if (operator === "") {
        alert("Please choose an operator.");
        return;
    }

    users[email] = { name, password, operator };
    alert("Signup successful! You can now log in.");
    this.reset();
    toggleForms('login');
});

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (!users[email] || users[email].password !== password) {
        alert("Invalid email or password. Please try again.");
        return;
    }

    document.getElementById('login-container').style.display = 'none';
    document.getElementById('calculator').style.display = 'block';
    document.getElementById('result').textContent = '';
});

document.getElementById('calculate-btn').addEventListener('click', function () {
    const email = document.getElementById('login-email').value;
    const operator = users[email].operator;
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (operator === '1') {
        result = num1 + num2;
    } else if (operator === '2') {
        result = num1 - num2;
    } else if (operator === '3') {
        result = num1 * num2;
    }

    document.getElementById('result').textContent = `Result: ${result}`;
});

document.getElementById('logout-btn').addEventListener('click', function () {
    document.getElementById('calculator').style.display = 'none';
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('signup-container').style.display = 'block';
    document.getElementById('signup-form').reset();
    document.getElementById('login-form').reset();
    document.getElementById('result').textContent = '';
});

function toggleForms(form) {
    if (form === 'signup') {
        document.getElementById('signup-container').style.display = 'block';
        document.getElementById('login-container').style.display = 'none';
    } else if (form === 'login') {
        document.getElementById('signup-container').style.display = 'none';
        document.getElementById('login-container').style.display = 'block';
    }
}
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


const signUpForm = document.querySelector('.sign-up form');
const emailInputSignUp = signUpForm.querySelector('input[type="email"]');
const passwordInputSignUp = signUpForm.querySelectorAll('input[type="password"]');
const repeatPasswordInput = signUpForm.querySelector('input[name="repeatpass"]');


emailInputSignUp.addEventListener('input', () => {
    validateField(emailInputSignUp, validateEmail(emailInputSignUp.value));
});

passwordInputSignUp[0].addEventListener('input', () => {
    validateField(passwordInputSignUp[0], validatePassword(passwordInputSignUp[0].value));


    if (repeatPasswordInput.value !== '') {
        validateField(repeatPasswordInput, repeatPasswordInput.value === passwordInputSignUp[0].value);
    }
});

repeatPasswordInput.addEventListener('input', () => {

    validateField(repeatPasswordInput, repeatPasswordInput.value === passwordInputSignUp[0].value);
});


const signInForm = document.querySelector('.sign-in form');
const emailInputSignIn = signInForm.querySelector('input[type="email"]');
const passwordInputSignIn = signInForm.querySelector('input[type="password"]');


emailInputSignIn.addEventListener('input', () => {
    validateField(emailInputSignIn, validateEmail(emailInputSignIn.value));
});


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


function validatePassword(password) {
    return password.length >= 8;
}


function validateField(inputElement, isValid) {
    if (isValid) {
        inputElement.classList.remove('invalid');
        inputElement.classList.add('valid');
    } else {
        inputElement.classList.remove('valid');
        inputElement.classList.add('invalid');
    }
}


signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInputSignUp.value;
    const password = passwordInputSignUp[0].value;
    const repeatPassword = repeatPasswordInput.value;

    let isValid = true;

    if (!validateEmail(email)) {
        validateField(emailInputSignUp, false);
        isValid = false;
    }

    if (!validatePassword(password)) {
        validateField(passwordInputSignUp[0], false);
        isValid = false;
    }

    if (password !== repeatPassword) {
        validateField(repeatPasswordInput, false);
        isValid = false;
    }

    if (!isValid) {
        alert('Пожалуйста, исправьте ошибки.');
        return;
    }

    alert('Регистрация успешна!');
    signUpForm.submit();
});


signInForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInputSignIn.value;

    if (!validateEmail(email)) {
        validateField(emailInputSignIn, false);
        alert('Пожалуйста, введите корректный email.');
        return;
    }

    alert('Вход успешен!');
    signInForm.submit();
});

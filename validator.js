const form_login = document.getElementById('form-login')

const form_register = document.getElementById('form-register')

const email = document.getElementById('email')

const error_title = document.getElementById('error_title')

const name_register = document.getElementById('name_register')
const error_name_register = document.getElementById('error_name_register')

const surname = document.getElementById('surname_register')
const error_surname_register = document.getElementById('error_surname_register')

const email_register = document.getElementById('email_register')
const error_email_register = document.getElementById('error_email_register')

const password_register = document.getElementById('password_register')
const error_password_register = document.getElementById('error_password_register')

const password_confirm_register = document.getElementById('password_confirm_register')
const error_password_confirm_register = document.getElementById('error_password_confirm_register')

const contact_about = document.getElementById('contact_about')
const error_contact_about = document.getElementById('error_contact_about')

form_register.addEventListener('submit', (e) => {
    e.preventDefault()

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let all_ok = true;

    const passwordPattern = /^[a-zA-Z0-9._%+-]{5,20}$/;

    //console.log("value(" + email_register.value.length + ")")
    //console.log("pattern: " + emailPattern.test(email_register.value))

    // reset all of columns
    error_title.innerText = "";

    error_name_register.innerText = "";
    name_register.classList.remove("error-color");

    error_surname_register.innerText = "";
    surname_register.classList.remove("error-color");

    error_email_register.innerText = "";
    email_register.classList.remove("error-color");

    error_password_register.innerText = "";
    password_register.classList.remove("error-color");

    error_password_confirm_register.innerText = "";
    password_confirm_register.classList.remove("error-color");

    error_contact_about.innerText = "";
    contact_about.classList.remove("error-color");


    let titleElements = document.getElementsByName("title");
    let titlesValid = false;
    let i = 0;
    while (!titlesValid && i < titleElements.length) {
        if (titleElements[i].checked) titlesValid = true;
        i++;
    }

    if (!titlesValid) {
        all_ok = false;
        error_title.innerText = "Please choose your title";
        name_register.classList.add("error-color");
    }

    if (name_register.value.length === 0) {
        all_ok = false;
        error_name_register.innerText = "Name is required.";
        name_register.classList.add("error-color");
    }

    if (surname_register.value.length === 0) {
        all_ok = false;
        error_surname_register.innerText = "Surname is required.";
        surname_register.classList.add("error-color");
    }
    
    if (email_register.value.length === 0) {
        all_ok = false;
        error_email_register.innerText = "Email is required.";
        email_register.classList.add("error-color");
    } else if (!emailPattern.test(email_register.value)) {
        all_ok = false;
        error_email_register.innerText = "Wrong email form.";
        email_register.classList.add("error-color");
    }

    if (password_register.value.length < 5 || password_register.value.length > 20) {
        all_ok = false;
        error_password_register.innerText = "Password has to have 5 to 20 characters.";
        password_register.classList.add("error-color");
    } else if (!passwordPattern.test(password_register.value)) {
        all_ok = false;
        error_password_register.innerText = "Wrong password form.";
        password_register.classList.add("error-color");
    } else if (password_confirm_register.value.length === 0) {
        all_ok = false;
        error_password_confirm_register.innerText = "Password confirm is required.";
        password_confirm_register.classList.add("error-color");
    } else if (password_confirm_register.value !== password_register.value) {
        all_ok = false;
        error_password_confirm_register.innerText = "Password confirm has to be equal to password.";
        password_confirm_register.classList.add("error-color");
    }

    if (contact_about.value.length === 0 || contact_about.value.split(' ').length < 3) {
        all_ok = false;
        error_contact_about.innerText = "About is missing some kind words";
        contact_about.classList.add("error-color");
    }


    if (all_ok) {
        alert("All fields are correctly filled out.");
    }
});

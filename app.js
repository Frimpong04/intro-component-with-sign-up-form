// SELECTORS
const submitButton = document.querySelector("button");
const allInput = document.querySelectorAll("input");
const fnameInput = document.querySelector("input[name='fname']");
const lnameInput = document.querySelector("input[name='lname']");
const emailInput = document.querySelector("input[name='email']");
const passwordInput = document.querySelector("input[name='password']")
// error messages
const firstNameErrorMessage = document.querySelector(".fname-error-paragraph");
const lastNameErrorMessage = document.querySelector(".lname-error-paragraph");
const emailErrorMessage = document.querySelector(".email-error-paragraph");
const passwordErrorMessage = document.querySelector(".password-error-paragraph");
// error-icons
const firstNameErrorIcon = document.querySelector(".fname-error-icon"); 
const lastNameErrorIcon = document.querySelector(".lname-error-icon"); 
const emailErrorIcon = document.querySelector(".email-error-icon"); 
const passwordErrorIcon = document.querySelector(".password-error-icon"); 

// EVENT LISTENERS
submitButton.addEventListener("click", submitForm);
fnameInput.addEventListener("focus", function () {
    firstNameErrorMessage.style.visibility = "hidden";
    firstNameErrorIcon.style.visibility = 'hidden';
});
lnameInput.addEventListener("focus", function () {
    lastNameErrorMessage.style.visibility = "hidden";
    lastNameErrorIcon.style.visibility = "hidden";
});
emailInput.addEventListener("focus", function () {
    emailErrorMessage.style.visibility = "hidden";
    emailErrorIcon.style.visibility = "hidden";
});
passwordInput.addEventListener("focus", function () {
    passwordErrorMessage.style.visibility = "hidden";
    passwordErrorIcon.style.visibility = "hidden";
});

// INPUT VALUES
let firstName = fnameInput.value;
let lastName = lnameInput.value;
let email = emailInput.value;
let password = passwordInput.value;

// REGEX FOR EMAIL VALIDATION
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// FUNCTIONS
function submitForm(e) {
    e.preventDefault();
    console.log("clicked");
    
    console.log(firstName, lastName, email, password);

    if (firstName === "") {
        firstNameErrorMessage.style.visibility = "visible";
        firstNameErrorIcon.style.visibility = "visible";
    }
    if (lastName === "") {
        lastNameErrorMessage.style.visibility = "visible";
        lastNameErrorIcon.style.visibility = "visible";
    }

    if (!email.match(validRegex)) {
        emailErrorMessage.style.visibility = "visible";
        emailErrorIcon.style.visibility = "visible";
        setTimeout(() => email = "", 0.1);
    }

    if (password === "") {
        passwordErrorMessage.style.visibility = "visible";
        passwordErrorIcon.style.visibility = "visible";
    }

}


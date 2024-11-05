document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("homework3form");

    // Individual field validation functions
    function validateFirstName() {
        const fname = document.getElementById("fname");
        const error = document.getElementById("fnameError");
        const regex = /^[A-Za-z'\-]{1,30}$/;

        if (!regex.test(fname.value)) {
            error.textContent = "Invalid first name. Only letters, apostrophes, and dashes allowed.";
        } else {
            error.textContent = "";
        }
    }

    function validateMiddleInitial() {
        const minitial = document.getElementById("minitial");
        const error = document.getElementById("minitialError");
        const regex = /^[A-Za-z]{1,30}$/;

        if (!regex.test(minitial.value)) {
            error.textContent = "Invalid middle initial. Only letters allowed.";
        } else {
            error.textContent = "";
        }
    }

    function validateLastName() {
        const lname = document.getElementById("lname");
        const error = document.getElementById("lnameError");
        const regex = /^[A-Za-z'\-]{1,30}$/;

        if (!regex.test(lname.value)) {
            error.textContent = "Invalid last name. Only letters, apostrophes, and dashes allowed.";
        } else {
            error.textContent = "";
        }
    }

    function validateEmail() {
        const email = document.getElementById("email");
        const error = document.getElementById("emailError");
        const regex = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$/;

        if (!regex.test(email.value)) {
            error.textContent = "Invalid email address. Format: name@domain.tld";
        } else {
            error.textContent = "";
        }
    }

    function validatePhone() {
        const phone = document.getElementById("phone");
        const error = document.getElementById("phoneError");
        const regex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

        if (!regex.test(phone.value)) {
            error.textContent = "Invalid phone number. Format: xxx-xxx-xxxx.";
        } else {
            error.textContent = "";
        }
    }

    function validatePassword() {
        const password = document.getElementById("password");
        const error = document.getElementById("passwordError");
        const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,30}$/;

        if (!regex.test(password.value)) {
            error.textContent = "Password must be 8-30 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.";
        } else {
            error.textContent = "";
        }
    }

    function validateRepassword() {
        const password = document.getElementById("password");
        const repassword = document.getElementById("repassword");
        const error = document.getElementById("repasswordError");

        if (repassword.value !== password.value) {
            error.textContent = "Passwords do not match.";
        } else {
            error.textContent = "";
        }
    }

    // Event listeners for onblur validation
    document.getElementById("fname").addEventListener("blur", validateFirstName);
    document.getElementById("lname").addEventListener("blur", validateLastName);
    document.getElementById("email").addEventListener("blur", validateEmail);
    document.getElementById("phone").addEventListener("blur", validatePhone);
    document.getElementById("password").addEventListener("blur", validatePassword);
    document.getElementById("repassword").addEventListener("blur", validateRepassword);

    // Form submission validation
    form.addEventListener("submit", function (event) {
        // Run all validations before submitting
        validateFirstName();
        validateLastName();
        validateEmail();
        validatePhone();
        validatePassword();
        validateRepassword();

        // If any error message is present, prevent form submission
        const errors = document.querySelectorAll(".error");
        for (let i = 0; i < errors.length; i++) {
            if (errors[i].textContent !== "") {
                event.preventDefault();
                alert("Please correct the errors before submitting.");
                break;
            }
        }
    });
});


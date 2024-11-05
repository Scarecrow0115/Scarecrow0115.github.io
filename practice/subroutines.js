// Function to validate the form fields
document.getElementById('homework3form').addEventListener('submit', function(event) {
    const formValid = validateForm();
    if (!formValid) {
        event.preventDefault();  // Prevent form submission if validation fails
    }
});

// Validate the entire form
function validateForm() {
    let isValid = true;
    
    // Validate individual fields
    const fieldsToValidate = [
        { id: 'fname', validationFunc: validateName },
        { id: 'minitial', validationFunc: validateMiddleInitial },
        { id: 'lname', validationFunc: validateName },
        { id: 'bdate', validationFunc: validateBirthDate },
        { id: 'ss', validationFunc: validateSS },
        { id: 'address1', validationFunc: validateAddress },
        { id: 'address2', validationFunc: validateAddress },
        { id: 'city', validationFunc: validateCity },
        { id: 'state', validationFunc: validateState },
        { id: 'zip', validationFunc: validateZip },
        { id: 'email', validationFunc: validateEmail },
        { id: 'phone', validationFunc: validatePhone },
        { id: 'user', validationFunc: validateUser },
        { id: 'password', validationFunc: validatePassword },
        { id: 'repassword', validationFunc: validateRePassword }
    ];

    // Validate all fields
    fieldsToValidate.forEach(field => {
        const fieldElement = document.getElementById(field.id);
        const isFieldValid = field.validationFunc(fieldElement.value);
        if (!isFieldValid) {
            isValid = false;
        }
    });

    // Check gender, insurance, and vaccination
    if (!document.querySelector("input[name='gender']:checked")) {
        alert("Please select your gender.");
        isValid = false;
    }

    if (!document.querySelector("input[name='ins']:checked")) {
        alert("Please select your insurance status.");
        isValid = false;
    }

    if (!document.querySelector("input[name='vac']:checked")) {
        alert("Please select your vaccination status.");
        isValid = false;
    }

    return isValid;
}

// Example validation function for the name fields
function validateName(value) {
    const regex = /^[A-Za-z'\-]{1,30}$/;
    return regex.test(value);
}

// Example validation function for the middle initial
function validateMiddleInitial(value) {
    const regex = /^[A-Za-z ]{0,1}$/;
    return regex.test(value);
}

// Validate birth date
function validateBirthDate(value) {
    const selectedDate = new Date(value);
    const currentDate = new Date();
    const tooOld = new Date();
    tooOld.setFullYear(currentDate.getFullYear() - 120);

    if (selectedDate > currentDate || selectedDate < tooOld) {
        alert("Birthdate is invalid. Ensure it's within the last 120 years.");
        return false;
    }
    return true;
}

// Social Security number validation (just numbers)
function validateSS(value) {
    const regex = /^[0-9]{9,11}$/;
    return regex.test(value);
}

// Validate address
function validateAddress(value) {
    const regex = /^[A-Za-z0-9'\- ]{2,30}$/;
    return regex.test(value);
}

// Validate city name
function validateCity(value) {
    const regex = /^[A-Za-z]{2,30}$/;
    return regex.test(value);
}

// Validate state selection
function validateState(value) {
    return value !== "";  // State must be selected
}

// Validate zip code
function validateZip(value) {
    const regex = /^[0-9\-]{5,10}$/;
    return regex.test(value);
}

// Validate email
function validateEmail(value) {
    const regex = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;
    return regex.test(value);
}

// Validate phone number
function validatePhone(value) {
    const regex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    return regex.test(value);
}

// Validate user ID
function validateUser(value) {
    const regex = /^[A-Za-z_\-]{1}[A-Za-z0-9_\-]{4,29}$/;
    return regex.test(value);
}

// Validate password
function validatePassword(value) {
    const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*\(\)\-_+=\\\/><.,`~]).{8,30}$/;
    return regex.test(value);
}

// Validate that passwords match
function validateRePassword(value) {
    const password = document.getElementById('password').value;
    return value === password;
}

// Real-time password validation (checks against user ID and name)
document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const user = document.getElementById('user').value.toLowerCase();
    const fname = document.getElementById('fname').value.toLowerCase();
    const lname = document.getElementById('lname').value.toLowerCase();
    const pwdError = document.getElementById('pwdError');

    if (password === user || password.includes(user) || password.includes(fname) || password.includes(lname)) {
        pwdError.textContent = "Password cannot be the same as your User ID or contain your User ID or Name.";
    } else {
        pwdError.textContent = "";
    }
});

// Real-time re-enter password validation
document.getElementById('repassword').addEventListener('input', function() {
    const repassword = this.value;
    const password = document.getElementById('password').value;
    const pwdError2 = document.getElementById('pwdError2');

    if (repassword !== password) {
        pwdError2.textContent = "Passwords do not match.";
    } else {
        pwdError2.textContent = "";
    }
});

// Real-time field validation for each input field
document.querySelectorAll('input, select, textarea').forEach(element => {
    element.addEventListener('input', function() {
        const id = this.id;
        const validationFunc = {
            'fname': validateName,
            'minitial': validateMiddleInitial,
            'lname': validateName,
            'bdate': validateBirthDate,
            'ss': validateSS,
            'address1': validateAddress,
            'address2': validateAddress,
            'city': validateCity,
            'state': validateState,
            'zip': validateZip,
            'email': validateEmail,
            'phone': validatePhone,
            'user': validateUser,
            'password': validatePassword,
            'repassword': validateRePassword
        };

        const isValid = validationFunc[id](this.value);

        if (!isValid) {
            this.style.borderColor = 'red';  // Highlight the invalid field
        } else {
            this.style.borderColor = '';  // Reset border color for valid input
        }
    });
});

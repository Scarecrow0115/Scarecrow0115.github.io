/*
document.getElementById('passwordForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('error-message');

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        event.preventDefault(); // Prevent form submission
    } else {
        errorMessage.textContent = ""; // Clear error message
    }
});
*/
/*
function validatePasswords() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    // Clear previous error messages
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
    }
}
*/

document.getElementById('password').oninput = validatePasswords;
document.getElementById('confirmPassword').oninput = validatePasswords;

function validateTextInput() {
    const inputField = document.getElementById('textInput');
    const inputError = document.getElementById('inputError');

    // Clear previous error messages
    inputError.textContent = "";

    // Check if the input matches the pattern
    const pattern = /^[A-Za-z]+$/; // Regex for alphabetic characters only

    if (!pattern.test(inputField.value)) {
        inputError.textContent = "Input must contain only letters.";
    }
}

// Add event listener for real-time validation
document.getElementById('textInput').oninput = validateTextInput;

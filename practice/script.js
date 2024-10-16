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

/*
Program name: subroutines.js
Author: Christian Loup
Date created: 10-16-2024
Date last edited: 10-16-2024
Version: 1.01
Description: subroutines for patient form.
*/
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

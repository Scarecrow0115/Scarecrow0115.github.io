/*
Program name: subroutines.js
Author: Christian Loup
Date created: 10-16-2024
Date last edited: 10-16-2024
Version: 1.02
Description: subroutines for patient form.
*/
document.getElementById('homework2form').addEventListener('submit', function(event) {
  const password = document.getElementById('password').value;
  const repassword = document.getElementById('repassword').value;
  const pwdError = document.getElementById('pwdError');

  if (password !== repassword) {
    pwdError.textContent = "Passwords do not match.";
    event.preventDefault(); // Prevent form submission
  } else {
    pwdError.textContent = ""; // Clear error message
  }
});

/*
Program name: subroutines.js
Author: Christian Loup
Date created: 10-16-2024
Date last edited: 10-16-2024
Version: 1.05
Description: subroutines for patient form.
*/
document.getElementById('homework2form').addEventListener('submit', function(event) {
  const password = document.getElementById('password').value;
  const repassword = document.getElementById('repassword').value;
  const pwdError = document.getElementById('pwdError');

  if (password !== repassword) {
    pwdError.textContent = "Passwords do not match.";
    event.preventDefault(); // prevent submission
  } else {
    pwdError.textContent = ""; // clear error message
  }
});

document.getElementById('homework2form').addEventListener('submit', function(event) {
  const selectedDate = new Date(document.getElementById('bdate').value);
  const currentDate = new Date();
  const tooOld = new Date();
  //currentDate.setHours(0, 0, 0, 0);
  tooOld.setFullYear(currentDate.getFullYear() - 120);

  if (selectedDate > currentDate) {
    alert("Birthday can not be in the future.");
    event.preventDefault(); // prevent submission
  } else if (selectedDate < tooOld) {
      alert("Birthday can not be more than 120 years ago.");
      event.preventDefault(); // Prevent form submission
  }
});

/*
Program name: subroutines.js
Author: Christian Loup
Date created: 10-16-2024
Date last edited: 10-18-2024
Version: 1.10
Description: subroutines for patient form.
*/
document.getElementById('homework2form').addEventListener('submit', function(event) {
  const selectedDate = new Date(document.getElementById('bdate').value);
  const currentDate = new Date();
  const tooOld = new Date();
  tooOld.setFullYear(currentDate.getFullYear() - 120);

  if (selectedDate > currentDate) {
    alert("Birthday can not be in the future.");
    event.preventDefault(); // prevent submission
  } else if (selectedDate < tooOld) {
      alert("Birthday can not be more than 120 years ago.");
      event.preventDefault(); // prevent submission
  }
});

function confirmPassword() {
  const password = document.getElementById('password').value;
  const repassword = document.getElementById('repassword').value;
  const pwdError2 = document.getElementById('pwdError2');
  
  if (password !== repassword) {
    pwdError2.textContent = "Passwords do not match.";
    event.preventDefault(); // prevent submission
    return false;
  }
  
    pwdError2.textContent = ""; // Clear error message
    return true; // Validation successful
}

document.getElementById('repassword').addEventListener('input', confirmPassword);

// Add event listener for form submission
document.getElementById('homework2form').addEventListener('submit', function(event) {
    if (!confirmPassword()) {
        event.preventDefault(); // Prevent submission if validation fails
    }
});

function validatePassword() {
  const password = document.getElementById('password').value.toLowerCase();
  const pwdError = document.getElementById('pwdError');
  const user = document.getElementById('user').value.toLowerCase();
  const fname = document.getElementById('fname').value.toLowerCase();
  const lname = document.getElementById('lname').value.toLowerCase();

  if (password === user || password.includes(user) || password.includes(fname) || password.includes(lname)) {
    pwdError.textContent = "Password cannot be the same as your User ID or contain your User ID or Name.";
    event.preventDefault(); // prevent submission
    return false;
  } 
    pwdError.textContent = ""; // Clear error message
    return true; // Validation successful
}

document.getElementById('password').addEventListener('input', validatePassword);

document.getElementById('homework2form').addEventListener('submit', function(event) {
    if (!validatePassword()) {
        event.preventDefault(); // Prevent submission if validation fails
    }
});

function slide(value) {
  document.getElementById("health").innerHTML = value; 
}

function showReview() {
    const reviewTableBody = document.getElementById("reviewTableBody");
    reviewTableBody.innerHTML = ""; // Clear previous review data

    // Collecting data from form inputs
    const fname = document.getElementById("fname").value;
    const minitial = document.getElementById("minitial").value;
    const lname = document.getElementById("lname").value;
    const bdate = document.getElementById("bdate").value;
    const ss = document.getElementById("ss").value;
    const address1 = document.getElementById("address1").value;
    const address2 = document.getElementById("address2").value;
    const city = document.getElementById("city").value;
    const state = document.querySelector("select[name='state']").value;
    const zip = document.getElementById("zip").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const gender = document.querySelector("input[name='gender']:checked")?.value;
    const hasInsurance = document.querySelector("input[name='ins']:checked")?.value;
    const vaccinated = document.querySelector("input[name='vac']:checked")?.value;
    const health = document.getElementById("healthslider").value;
    const user = document.getElementById("user").value.toLowerCase();

    // Creating a table row for each field
    const fields = [
        { label: "First Name", value: fname },
        { label: "Middle Initial", value: minitial },
        { label: "Last Name", value: lname },
        { label: "Date of Birth", value: bdate },
        { label: "Social Security", value: ss },
        { label: "Address 1", value: address1 },
        { label: "Address 2", value: address2 },
        { label: "City", value: city },
        { label: "State", value: state },
        { label: "Zip", value: zip },
        { label: "Email", value: email },
        { label: "Phone", value: phone },
        { label: "Symptoms", value: message },
        { label: "Gender", value: gender },
        { label: "Has Insurance", value: hasInsurance },
        { label: "Vaccinated", value: vaccinated },
        { label: "Health Status", value: health },
        { label: "User ID", value: user },
    ];

    // Populate the review table
    fields.forEach(field => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${field.label}</td><td>${field.value}</td>`;
        reviewTableBody.appendChild(row);
    });

    // Show the review section
    document.getElementById("reviewSection").style.display = "block";
}

function hideReview() {
    document.getElementById("reviewSection").style.display = "none";
}

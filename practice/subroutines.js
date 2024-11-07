document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("homework3form");

    // Get the "validate" button and "submit" button by their IDs
  //  const validateButton = document.getElementById("validate");
    const submitButton = document.getElementById("submit");

    // Initially hide the submit button
    submitButton.style.display = "none";

    // Function to validate form fields
 //   function validateForm() {
        // Assume all fields are valid initially
      //  let isValid = true;

    
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
            const regex = /^[A-Za-z]{0,1}$/;
    
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
            const regex = /^(|[0-9]{3}-[0-9]{3}-[0-9]{4})$/;
    
            if (!regex.test(phone.value)) {
                error.textContent = "Invalid phone number. Format: ###-###-####.";
            } else {
                error.textContent = "";
            }
        }
    
        function validateDate() {
            const bdate = new Date(document.getElementById('bdate'));
            const selectedDate = new Date(document.getElementById('bdate').value);
            const currentDate = new Date();
            const tooOld = new Date();
            const error = document.getElementById("bdateError");
            tooOld.setFullYear(currentDate.getFullYear() - 120);
    
            if (selectedDate > currentDate) {
            error.textContent = "Birthday can not be in the future.";
            event.preventDefault(); // prevent submission
            } else if (selectedDate < tooOld) {
            error.textContent = "Birthday can not be more than 120 years ago.";
            event.preventDefault(); // prevent submission
            } else {
                error.textContent = "";
            }
        }
    
        function validateSocial() {
            const social = document.getElementById("ss");
            const error = document.getElementById("ssError");
            const regex = /^(|[0-9\-]{11})$/;
    
            if (!regex.test(social.value)) {
                error.textContent = "Invalid Social Security number. 9 digits.";
            } else {
                error.textContent = "";
            }
        }
    
        function validateAddress1() {
            const address1 = document.getElementById("address1");
            const error = document.getElementById("address1Error");
            const regex = /^[A-Za-z0-9'\- ]{2,30}$/;
    
            if (!regex.test(address1.value)) {
                error.textContent = "Invalid Address. 2-30 characters.";
            } else {
                error.textContent = "";
            }
        }
    
        function validateAddress2() {
            const address2 = document.getElementById("address2");
            const error = document.getElementById("address2Error");
            const regex = /^(|[A-Za-z0-9'\- ]{2,30})$/;
    
            if (!regex.test(address2.value)) {
                error.textContent = "Invalid Address. 2-30 characters.";
            } else {
                error.textContent = "";
            }
        }
    
        function validateCity() {
            const city = document.getElementById("city");
            const error = document.getElementById("cityError");
            const regex = /^[A-Za-z0-9'\- ]{2,30}$/;
    
            if (!regex.test(city.value)) {
                error.textContent = "Invalid City. 2-30 characters.";
            } else {
                error.textContent = "";
            }
        }
    
        function validateState() {
            const state = document.getElementById("state");
            const error = document.getElementById("stateError");
    
            if (state.value === "") {
                error.textContent = "Select State.";
            } else {
                error.textContent = "";
            }
        }
    
        function validateZip() {
            const zip = document.getElementById("zip");
            const error = document.getElementById("zipError");
            const regex = /^[0-9]{5}$/;
    
            if (!regex.test(zip.value)) {
                error.textContent = "Invalid Zip. 5 digits.";
            } else {
                error.textContent = "";
            }
        }
    
        function validateMessage() {
            const message = document.getElementById("message");
        }
    
        function validateHealth() {
            const healthslider = document.getElementById("healthslider");
        }
    
        function validateUser() {
            const user = document.getElementById("user");
            const error = document.getElementById("userError");
            const regex = /^[A-Za-z_\-]{1}[A-Za-z0-9_\-]{4,19}$/;
    
            if (!regex.test(user.value)) {
                error.textContent = "Invalid User ID. 5-20 characters. No spaces or special characters. Only letters, numbers (as long as the first character is NOT a number), underscores or dashes.";
            } else {
                error.textContent = "";
            }
        }
    
    
            
        function confirmPassword() {
            const password = document.getElementById('password').value;
            const repassword = document.getElementById('repassword').value;
            const error = document.getElementById('pwdError2');
          
            if (password !== repassword) {
                error.textContent = "Passwords do not match.";
                event.preventDefault(); // prevent submission
                return false;
          }
          
            error.textContent = ""; // Clear error message
            return true; // Validation successful
        }
    
        function validatePassword() {
            const password = document.getElementById("password");
            const passwordLower = document.getElementById('password').value.toLowerCase();
            const error = document.getElementById('pwdError');
            const user = document.getElementById('user').value.toLowerCase();
            const fname = document.getElementById('fname').value.toLowerCase();
            const lname = document.getElementById('lname').value.toLowerCase();
        
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>/?~`])[^\"]{8,30}$/;
        
            if (!passwordPattern.test(password.value)) {
                error.textContent = "Password must be 8-30 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character. No double quotes.";
                event.preventDefault(); // prevent submission
                return false;
            }
        
            if (passwordLower === user || passwordLower.includes(user) || passwordLower.includes(fname) || passwordLower.includes(lname)) {
                error.textContent = "Password cannot be the same as your User ID or contain your User ID or Name.";
                event.preventDefault(); // prevent submission
                return false;
            } 
            pwdError.textContent = ""; // Clear error message
            return true; // Validation successful
        } 
            
    
        document.getElementById("ss").addEventListener("input", function(event) {
          // Get the current value of the input field
          let ss = event.target.value;
        
          // Remove non-numeric characters
          ss = ss.replace(/\D/g, "");
        
          // Add dashes after every 3rd and 5th character
          if (ss.length > 3 && ss.length <= 5) {
            ss = ss.slice(0, 3) + '-' + ss.slice(3);
          } else if (ss.length > 5) {
            ss = ss.slice(0, 3) + '-' + ss.slice(3, 5) + '-' + ss.slice(5, 9);
          }
        
          // Set the value of the input field to the formatted SSN
          event.target.value = ss;
        });
    
        function getSelectedIllnesses() {
        // Select all checkboxes that have a name starting with "illness"
        const checkboxes = document.querySelectorAll('input[type="checkbox"][name^="illness"]');
        const selectedIllnesses = [];
    
        // Loop through each checkbox
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                // If the checkbox is checked, add its value to the selectedIllnesses array
                selectedIllnesses.push(checkbox.value);
            }
        });
    
        return selectedIllnesses;
    }
    
        document.getElementById('homework3form').addEventListener('submit', function(event) {
            let formValid = true;
        
            // Gender Validation
            const genderRadios = document.getElementsByName('gender');
            const genderError = document.getElementById('genderError');
            const genderChecked = Array.from(genderRadios).some(radio => radio.checked);
            if (!genderChecked) {
                genderError.textContent = 'Please select your gender.';
                formValid = false;
            } else {
                genderError.textContent = '';
            }
        
            // Insurance Validation
            const insRadios = document.getElementsByName('ins');
            const insError = document.getElementById('insError');
            const insChecked = Array.from(insRadios).some(radio => radio.checked);
            if (!insChecked) {
                insError.textContent = 'Please select your insurance status.';
                formValid = false;
            } else {
                insError.textContent = '';
            }
        
            // Vaccination Validation
            const vacRadios = document.getElementsByName('vac');
            const vacError = document.getElementById('vacError');
            const vacChecked = Array.from(vacRadios).some(radio => radio.checked);
            if (!vacChecked) {
                vacError.textContent = 'Please select your vaccination status.';
                formValid = false;
            } else {
                vacError.textContent = '';
            }
        
            // Additional form validations like text inputs can go here
        
            if (!formValid) {
                event.preventDefault();  // Prevent form submission if validation fails
                alert("Please correct the errors before submitting.");
            }
        });
        
    
        // Event listeners for validation
        document.getElementById("fname").addEventListener("blur", validateFirstName);
        document.getElementById("minitial").addEventListener("blur", validateMiddleInitial);
        document.getElementById("lname").addEventListener("blur", validateLastName);
        document.getElementById("email").addEventListener("blur", validateEmail);
        document.getElementById("phone").addEventListener("blur", validatePhone);
        document.getElementById("bdate").addEventListener("blur", validateDate);
        document.getElementById("ss").addEventListener("blur", validateSocial);
        document.getElementById("address1").addEventListener("blur", validateAddress1);
        document.getElementById("address2").addEventListener("blur", validateAddress2);
        document.getElementById("city").addEventListener("blur", validateCity);
        document.getElementById("state").addEventListener("blur", validateState);
        document.getElementById("zip").addEventListener("blur", validateZip);
        document.getElementById("user").addEventListener("blur", validateUser);
        document.getElementById('repassword').addEventListener('input', confirmPassword);
        document.getElementById('password').addEventListener('input', validatePassword);
        document.getElementById('password').addEventListener('blur', validatePassword);
        document.getElementById('password').addEventListener('focus', validatePassword);
        document.getElementById('user').addEventListener('input', validatePassword);
        document.getElementById('fname').addEventListener('input', validatePassword);
        document.getElementById('lname').addEventListener('input', validatePassword);
        document.getElementById('password').addEventListener('input', confirmPassword);
        document.getElementById('repassword').addEventListener('input', validatePassword);
        
        // Form submission validation
        //form.addEventListener("submit", function (event) {
        document.getElementById("validate").addEventListener("click", function (event) {
        //function validateData() {
            // Run all validations before submitting
            validateFirstName();
            validateMiddleInitial();
            validateLastName();
            validateEmail();
            validatePhone();
            validateDate();
            validateSocial();
            validateAddress1();
            validateAddress2();
            validateCity();
            validateState();
            validateZip();
            validateHealth();
            validateUser();
            confirmPassword();
            validatePassword();
    
            // If any error message is present, prevent form submission
            const errors = document.querySelectorAll(".error");
            for (let i = 0; i < errors.length; i++) {
                if (errors[i].textContent !== "") {
                    event.preventDefault();
                    alert("Please correct the errors before submitting.");
                    break;
                } else {
                    submitButton.style.display = "block";
                }
            }
        });
        //}
    // Add event listener to the "validate" button to validate fields on click
   // validateButton.addEventListener("click", validateForm);
    //};
/*
    function validateForm() { 
        const fnameVal = document.getElementById("fname").value;
        const minitialVal = document.getElementById("minitial").value;
        const lnameVal = document.getElementById("lname").value;
        const bdateVal = document.getElementById("bdate").value;
        const ssVal = document.getElementById("ss").value;
        const address1Val = document.getElementById("address1").value;
        const address2Val = document.getElementById("address2").value;
        const cityVal = document.getElementById("city").value;
        const stateVal = document.querySelector("select[name='state']").value;
        const zipVal = document.getElementById("zip").value;
        const emailVal = document.getElementById("email").value.toLowerCase();
        const phoneVal = document.getElementById("phone").value;
        const messageVal = document.getElementById("message").value;
        getSelectedIllnesses();
        const genderVal = document.querySelector("input[name='gender']:checked")?.value;
        const hasInsuranceVal = document.querySelector("input[name='ins']:checked")?.value;
        const vaccinatedVal = document.querySelector("input[name='vac']:checked")?.value;
        const healthVal = document.getElementById("healthslider").value;
        const userVal = document.getElementById("user").value.toLowerCase();
        const passwordVal = document.getElementById("password").value;
        const repasswordVal = document.getElementById("repassword").value;
        }
        */
});

/*
function validateData() {
            // Run all validations before submitting
            validateFirstName();
            validateMiddleInitial();
            validateLastName();
            validateEmail();
            validatePhone();
            validateDate();
            validateSocial();
            validateAddress1();
            validateAddress2();
            validateCity();
            validateState();
            validateZip();
            validateHealth();
            validateUser();
            confirmPassword();
            validatePassword();
    
            // If any error message is present, prevent form submission
            const errors = document.querySelectorAll(".error");
            for (let i = 0; i < errors.length; i++) {
                if (errors[i].textContent !== "") {
                    event.preventDefault();
                    alert("Please correct the errors before submitting.");
                    break;
                } else {
                    submitButton.style.display = "block";
                }
            }
        }
*/



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


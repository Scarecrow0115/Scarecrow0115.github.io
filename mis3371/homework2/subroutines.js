/*
Program name: subroutines.js
Author: Christian Loup
Date created: 10-16-2024
Date last edited: 10-16-2024
Version: 1.08
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
      event.preventDefault(); // Prevent form submission
  }
});

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

function slide(value) {
  document.getElementById("health").innerHTML = value; 
}

function handleSubmit(event) {
    event.preventDefault(); // prevent submission
    const usernameInput = document.getElementById('username').value;
    const lowercaseUsername = usernameInput.toLowerCase();

    document.getElementById('displayUsername').textContent = lowercaseUsername;

    document.getElementById('username').value = '';
}

function reviewInput() {
  var formcontents = document.getElementById("signup");
  var formoutput;
  var datatype;
  var i;
  formoutput = "<table class='output'><th>Dataname</th><th>Type</th><th>Value</th>";
  for (i = 0; i < formcontents.length; i++) {
            console.log("item: "+i+" "+formcontents.elements[i].name+" = "+formcontents.elements[i].value);
            /* if (formcontents.elements[i].value !="") { */
              datatype = formcontents.elements[i].type;
              switch (datatype) {
                case "checkbox":
                  if (formcontents.elements[i].checked) {
                    formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                    formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                    formoutput = formoutput +"<td class='outputdata'>Checked</td></tr>";
                  }
                  break;
               case "radio":
                    if (formcontents.elements[i].checked) {
                      formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                      formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                      formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
                    }
                  break;
                case "button": case "submit": case "reset":
                  break;
                default:
                  formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                  formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                  formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
                }
            }
}

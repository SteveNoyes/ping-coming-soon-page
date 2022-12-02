function ValidateEmail(inputText) {
  // regex pattern
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.value.match(mailformat)) {
    // remove before deployment
    console.log("Valid email address");
    return true;
  } else {
    // add red border error class on wrong input 
    // temp
    document.emailForm.emailInput.style.border = "1px solid red";
    return false;
  }
}

function check () {
  // (C1) INIT
  var valid = true, error = "", field = "";

  // (C2) NAME
  field = document.getElementById("fname");
  error = document.getElementById("cname");
  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    error.innerHTML = "Name must be 2-4 characters\r\n";
  } else {
    field.classList.remove("err");
    error.innerHTML = "";
  }

  // (C3) NUMBER
  field = document.getElementById("fnumber");
  error = document.getElementById("cnumber");
  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    error.innerHTML = "Num must be between 1-12\r\n";
  } else {
    field.classList.remove("err");
    error.innerHTML = "";
  }

  // (C4) RESULT
  return valid;
}
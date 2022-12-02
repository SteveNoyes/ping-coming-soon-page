

function ValidateEmail(inputText) {

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(inputText.value.match(mailformat)) {
    console.log("Valid email address");
    return true;
  } else {
    // alert("You have entered an invalid email address!");
    // add red border error class on wrong input 
    document.emailForm.emailInput.style.border = "1px solid red";
    return false;
  }
}
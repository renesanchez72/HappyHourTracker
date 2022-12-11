function validateForm() {
    let x = document.forms["signupform"]["username"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    if (! (/^[a-z0-9]+$/i.test(x))) {
        alert("Must contaim only numbers and letters");
        return false;
    }
  }
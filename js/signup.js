let signupbtn = document.getElementById("signup-btn");
function validateForm() {
  let name = document.getElementById("name");
  let domain = document.getElementById("domain");
  let customdomain = document.getElementById("customdomain");
  let entityname = document.getElementById("entityname");
  let entitytype = document.getElementById("entitytype");
  let customentity = document.getElementById("customentity");
  let email = document.getElementById("email");
  let mobile = document.getElementById("mobile");
  let pass = document.getElementById("password");
  let cpass = document.getElementById("cpassword");
  let flag = true;

  if (cpass.value !== pass.value) {
    pass.classList.add("border-danger");
    cpass.classList.add("border-danger");
    flag = false;
  }

  if (domain.value == "") {
    domain.classList.add("border-danger");
    flag = false;
  }
  if (entitytype.value == "") {
    entitytype.classList.add("border-danger");
    flag = false;
  }
  return flag;
}
function fetchEntityType(entityType) {
  if (entityType.value != "") {
    entityType.classList.remove("border-danger");
  }
  if (entityType.value == "others") {
    document.getElementById("c-entity").classList.remove("d-none");
    document.getElementById("customentity").setAttribute("required", "");
  } else {
    document.getElementById("c-entity").classList.add("d-none");
    document.getElementById("customentity").removeAttribute("required");
  }
}

function fetchDomain(domain) {
  if (domain.value != "") {
    domain.classList.remove("border-danger");
  }
  if (domain.value == "others") {
    document.getElementById("c-domain").classList.remove("d-none");
    document.getElementById("customdomain").setAttribute("required", "");
  } else {
    document.getElementById("c-domain").classList.add("d-none");
    document.getElementById("customdomain").removeAttribute("required");
  }
}

async function signup(e) {
  e.preventDefault();
  if (!validateForm()) return false;
  signupbtn.disabled = true;
  signupbtn.innerHTML = `<img src="https://c.tenor.com/XK37GfbV0g8AAAAj/loading-cargando.gif" alt="Please Wait" height=100% /> Please Wait`;
  $("#signup-form input, #signup-form select").attr("disabled", true);

  let name = document.getElementById("name");
  let domain = document.getElementById("domain");
  if (domain.value == "others") {
    domain = document.getElementById("customdomain").value;
  }
  // alert(domain.value);
  let entityname = document.getElementById("entityname");
  let entitytype = document.getElementById("entitytype");
  if (entitytype.value == "others") {
    entitytype = document.getElementById("customentitytype").value;
  }
  // alert(entitytype.value);
  let usertype = document.getElementById("usertype");
  let email = document.getElementById("email");
  let mobile = document.getElementById("mobile");
  let pass = document.getElementById("password");

  // alert(domain.value + " " + entitytype.value);

  await fetch("http://localhost:8000/api/register/", {
    method: "POST",
    headers: {
      "Content-Type": "raw",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      name: name.value,
      domain: domain.value,
      supplier_name: entityname.value,
      supplier_type: entitytype.value,
      usertype: usertype.value,
      email: email.value,
      mobile_number: mobile.value,
      password: pass.value,
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      if (data.status == "success") {
        setTimeout(() => {
          signupbtn.classList.remove("btn-primary");
          signupbtn.classList.add("btn-success");
          signupbtn.innerHTML = `<img src="https://c.tenor.com/xVfFIHxAzW4AAAAC/success.gif" alt="Success" height=100% /> Registered`;
        }, 2000);
      } else {
        setTimeout(() => {
          signupbtn.classList.remove("btn-primary");
          signupbtn.classList.add("btn-danger");
          signupbtn.innerHTML = `Error`;
        }, 2000);
      }
    });

  setTimeout(() => {
    signupbtn.classList.remove("btn-danger");
    signupbtn.classList.remove("btn-success");
    signupbtn.classList.add("btn-primary");
    signupbtn.innerHTML = "Signup";
    signupbtn.disabled = false;
    $("#signup-form input, #signup-form select").attr("disabled", false);
    location.reload();
  }, 2000);
}

function togglePassword(input, button) {
  let inpfield = document.getElementById(input);
  let eyefield = document.getElementById(button);

  if (inpfield.type === "password") {
    inpfield.type = "text";
    eyefield.classList.remove("fa-eye-slash");
    eyefield.classList.add("fa-eye");
  } else {
    inpfield.type = "password";
    eyefield.classList.remove("fa-eye");
    eyefield.classList.add("fa-eye-slash");
  }
}

function removeBorderDanger() {
  let pass = document.getElementById("password");
  let cpass = document.getElementById("cpassword");
  pass.classList.remove("border-danger");
  cpass.classList.remove("border-danger");
}

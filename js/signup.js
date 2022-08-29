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
  let flag = true;

  if ((domain.value = "")) {
    domain.classList.add("border-danger");
    flag = false;
  }
  if ((entitytype.value = "")) {
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

function signup(e) {
  e.preventDefault();
  if (!validateForm()) return false;
  signupbtn.disabled = true;
  signupbtn.innerHTML = `<img src="https://c.tenor.com/XK37GfbV0g8AAAAj/loading-cargando.gif" alt="Please Wait" height=100% /> Please Wait`;
  $("#signup-form input, #signup-form select").attr("disabled", true);
  setTimeout(() => {
    signupbtn.classList.remove("btn-primary");
    signupbtn.classList.add("btn-success");
    signupbtn.innerHTML = `<img src="https://c.tenor.com/xVfFIHxAzW4AAAAC/success.gif" alt="Success" height=100% /> Registered`;
  }, 2000);
  setTimeout(() => {
    signupbtn.classList.remove("btn-success");
    signupbtn.classList.add("btn-primary");
    signupbtn.innerHTML = "Signup";
    signupbtn.disabled = false;
    $("#signup-form input, #signup-form select").attr("disabled", false);
  }, 2000);
}

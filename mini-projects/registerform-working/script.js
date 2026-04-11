function User(name, email, adhar, gender) {
  this.name = name;
  this.email = email;
  this.adhar = adhar;
  this.gender = gender;
}

// function to validate user data
Display.prototype.validate = function (user) {
  console.log("validating...");
  if (user.name.length < 3 || user.email.length < 3 || user.adhar.length < 8) {
    console.log("validation failed");
    return false;
  } else {
    console.log("validation succes");
    return true;
  }
};

Display.prototype.add = function (user) {
  let tabelBody = document.getElementById("tableBody");
  let uList = `<tr>
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>${user.adhar}</td>
    <td>${user.gender}</td>
    </tr>
    `;

  tabelBody.innerHTML += uList;
};

Display.prototype.clear = function () {
  let registerFrom = document.getElementById("registerfrom");
  registerFrom.reset();
};

Display.prototype.show = function (type, message) {
  let showMessage = document.getElementById("showmessage");
  showMessage.innerHTML = `<div class="alert alert-${type}" role="alert">
  ${message}
</div>`;

  setTimeout(function () {
    showMessage.innerHTML = "";
  }, 3000);
};

// main Function
let registerForm = document.getElementById("registerfrom");
registerForm.addEventListener("submit", userFormSubmit);

function userFormSubmit(e) {
  e.preventDefault();
  console.log("form it getting submited");
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let adhar = document.getElementById("adhar").value;
  let male = document.getElementById("male");
  let female = document.getElementById("female");

  let gender = male.checked ? male.value : female.checked ? female.value : "";

  let data = new User(name, email, adhar, gender);

  let display = new Display();

  if (display.validate(data)) {
    display.add(data);
    display.clear();
    display.show("success", "Form submited successfully");
    console.log(data);
  } else {
    display.show(
      "danger",
      "Registration failed! Please submit the from again..."
    );
  }
}

function Display() {}

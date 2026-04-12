class User {
  constructor(name, email, adhar, gender) {
    this.name = name;
    this.email = email;
    this.adhar = adhar;
    this.gender = gender;
  }
}

class Display {
  validate(user) {
    console.log("validating..");
    if (user.name < 3 || user.email < 3 || user.adhar < 8) {
      console.log("validation failed");
      return false;
    } else {
      console.log("validaation success");
      return true;
    }
  }

  add(user) {
    let tabelBody = document.getElementById("tableBody");
    let uData = `<tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.adhar}</td>
        <td>${user.gender}</td>
        </tr>
        
        `;
    tabelBody.innerHTML += uData;
  }

  clear() {
    let registerForm = document.getElementById("registerfrom");
    registerForm.reset();
  }

  show(type, displayMessage) {
    let messageBox = document.getElementById("showmessage");
    messageBox.innerHTML = `<div class="alert alert-${type}" role="alert">
  ${displayMessage}
</div>`;

    setTimeout(function () {
      messageBox.innerHTML = "";
    }, 3000);
  }
}

// Main function
let registerForm = document.getElementById("registerfrom");
registerForm.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
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
    display.show("success", "User registered successfully");
  } else {
    display.show(
      "denger",
      "User registeration failed! Please submit the form again.."
    );
  }
}

// Search
let searchUser = document.querySelector('form[role="search"]');
searchUser.addEventListener("submit", function (e) {
  e.preventDefault();
  let searchData = document
    .querySelector('input[type="search"]')
    .value.toLowerCase();

  let tableRow = document.querySelectorAll("#tableBody tr");
  tableRow.forEach((row) => {
    let rowText = row.innerText.toLowerCase();

    if (rowText.includes(searchData)) {
      console.log(row.innerText.toLowerCase());
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});

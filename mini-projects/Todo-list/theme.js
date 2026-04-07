document.addEventListener("DOMContentLoaded", function () {
  const themebtn = document.getElementById("themeBtn");

  const savedTheme = localStorage.getItem("theme");

  if (!savedTheme) {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.setAttribute("data-them", savedTheme);
  }

  themebtn.addEventListener("click", () => {
    const currTheme = document.documentElement.getAttribute("data-theme");

    const newTheme = currTheme === "light" ? "dark" : "light";

    if (newTheme === "light") {
      themebtn.textContent = "🌞";
    } else {
      themebtn.textContent = "🌙";
    }
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
});

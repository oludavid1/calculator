const toggleTheme1 = document.getElementById("theme-1");
const toggleTheme2 = document.getElementById("theme-2");
const toggleTheme3 = document.getElementById("theme-3");

const existingTheme = localStorage.getItem("calculator-theme")
  ? localStorage.getItem("calculator-theme")
  : "theme1";
const themeToggles = document.querySelectorAll("label");

// handle the changes to the theme
function toggleTheme(switchToTheme) {
  document.documentElement.setAttribute("data-theme", switchToTheme);
  // remove 'toggled-on' from all the labels
  themeToggles.forEach((theme) => theme.classList.remove("toggled-on"));

  // add 'toggled-on' to the one desired label (themeToggles)
  switchToTheme === "theme1"
    ? themeToggles[0].classList.add("toggled-on")
    : switchToTheme === "theme2"
    ? themeToggles[1].classList.toggle("toggled-on")
    : themeToggles[2].classList.add("toggled-on");
  // save the new value to local storage
  localStorage.setItem("calculator-theme", switchToTheme);
}

// check localstorage for a saved them, and then load it
if (existingTheme) {
  toggleTheme(existingTheme);
}

// event listeners for radio input's
toggleTheme1.addEventListener("click", () => {
  toggleTheme("theme1");
});

toggleTheme2.addEventListener("click", () => {
  toggleTheme("theme2");
});

toggleTheme3.addEventListener("click", () => {
  toggleTheme("theme3");
});
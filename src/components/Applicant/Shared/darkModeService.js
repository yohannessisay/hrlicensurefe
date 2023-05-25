const dark = () => {
  document.getElementById("mainContent")?.classList?.add("dark-mode");
  document.getElementById("activeMenu")?.classList?.add("dark-mode");
  document.getElementById("mainSideBar")?.classList?.add("dark-mode");
  document.getElementById("menu-icon")?.classList?.add("dark-mode");
  document.getElementById("home")?.classList?.add("dark-mode");
  document.querySelector("body")?.classList?.add("dark-mode");
  document.getElementById("options-menu")?.classList?.add("dark-mode");

  localStorage.setItem("darkMode", JSON.stringify(true));
};

const light = () => {
  document.getElementById("mainContent")?.classList?.remove("dark-mode");
  document.getElementById("activeMenu")?.classList?.remove("dark-mode");
  document.getElementById("mainSideBar")?.classList?.remove("dark-mode");
  document.getElementById("menu-icon")?.classList?.remove("dark-mode");
  document.getElementById("home")?.classList?.remove("dark-mode");
  document.querySelector("body")?.classList?.remove("dark-mode");
  document.getElementById("options-menu")?.classList?.remove("dark-mode");
  localStorage.setItem("darkMode", JSON.stringify(false));
};
const initiateDarkMode = () => {
  if (JSON.parse(localStorage.getItem("darkMode")) == true) {
    dark();
  } else {
    light();
  }
};
export default { initiateDarkMode, dark, light };

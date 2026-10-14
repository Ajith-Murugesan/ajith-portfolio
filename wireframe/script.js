const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".primary-navigation");
const year = document.querySelector("#current-year");

year.textContent = new Date().getFullYear();

function closeMenu({ focusButton = false } = {}) {
  navigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.querySelector(".sr-only").textContent = "Open navigation";
  if (focusButton) menuButton.focus();
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  if (isOpen) {
    closeMenu();
    return;
  }
  navigation.classList.add("is-open");
  menuButton.setAttribute("aria-expanded", "true");
  menuButton.querySelector(".sr-only").textContent = "Close navigation";
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    closeMenu({ focusButton: true });
  }
});

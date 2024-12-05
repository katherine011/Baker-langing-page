document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggleButton");
    const threeTextMenu = document.querySelector(".three-textM");
  
    toggleButton.addEventListener("click", () => {
      threeTextMenu.classList.toggle("show");
    });
  });
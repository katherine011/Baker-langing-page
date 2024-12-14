document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton");
  const threeTextMenu = document.querySelector(".three-textM");

  toggleButton.addEventListener("click", () => {
    threeTextMenu.classList.toggle("show");
  });
});

 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: '3',
  spaceBetween: 4,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    375: {
      slidesPerView: 1, 
      spaceBetween: 0, 
    },
  },
});




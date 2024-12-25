document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton");
  const threeTextMenu = document.querySelector(".three-textM");

  toggleButton.addEventListener("click", () => {
    threeTextMenu.classList.toggle("show");
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "3",
  loop: true,
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

const mainRecipes = document.getElementById("mainRecipes");

let limitnumber = 13;

async function fetchRecipes() {
  const response = await fetch(
    `https://dummyjson.com/recipes?limit=${limitnumber}`
  );
  const data = await response.json();

  const recipedata = data.recipes;
  console.log(recipedata.slice(0, 5));
  console.log(recipedata.slice(1, 5));
  console.log(recipedata.slice(5, 9));

  differentBoxs(recipedata.slice(0, 1));
  displayRecipes(recipedata.slice(1, 5));
  recipesPaginationFirst(recipedata.slice(5, 9));
  recipesPaginationSecond(recipedata.slice(9, 13));
}

fetchRecipes();

function differentBoxs(array) {
  array.forEach((element) => {
    const differentBox = document.getElementById("differentBox");

    const diffBox = document.createElement("div");
    const lastDiv = document.createElement("div");
    const timeDiv1 = document.createElement("div");

    diffBox.classList.add("diffBox11");
    lastDiv.classList.add("headerDiv111");
    timeDiv1.classList.add("timeDiv111");

    differentBox.appendChild(diffBox);

    const img2 = document.createElement("img");
    const headerP1 = document.createElement("p");
    const Headerh1 = document.createElement("h1");
    const textP1 = document.createElement("p");
    const timeP1 = document.createElement("p");

    img2.classList.add("img2L11");
    headerP1.classList.add("headerP1L11");
    Headerh1.classList.add("Headerh1L11");
    textP1.classList.add("textP1L11");
    timeP1.classList.add("timeP1L11");

    img2.src = element.image;
    headerP1.textContent = "Bakery";
    Headerh1.textContent = element.name;
    textP1.textContent = element.instructions[4];
    timeP1.textContent = `${element.prepTimeMinutes} min`;

    diffBox.append(img2, headerP1, Headerh1, lastDiv);
    lastDiv.append(textP1, timeDiv1);
    timeDiv1.append(timeP1);
  });
}

function displayRecipes(array) {
  array.forEach((element) => {
    const commonBoxs = document.getElementById("commonBoxs");

    const boxK = document.createElement("div");
    const headerDiv = document.createElement("div");
    const timeDiv = document.createElement("div");

    boxK.classList.add("boxKL11");
    headerDiv.classList.add("headerDiv");
    timeDiv.classList.add("timeDiv");

    commonBoxs.appendChild(boxK);

    const img1 = document.createElement("img");
    const headerP = document.createElement("p");
    const timeP = document.createElement("p");
    const textP = document.createElement("p");

    img1.classList.add("img1");
    headerP.classList.add("headerP");
    timeP.classList.add("timeP");
    textP.classList.add("textP");

    img1.src = element.image;
    headerP.textContent = "Bakery";
    timeP.textContent = `${element.prepTimeMinutes} min`;
    textP.textContent = element.instructions[0];

    boxK.append(img1, headerDiv, textP);
    headerDiv.append(headerP, timeDiv);
    timeDiv.append(timeP);
  });
}

function recipesPaginationFirst(array) {
  if (!recipesButton) {
    const frank = document.getElementById("frank");
    frank.textContent = "";
  } else {
    array.forEach((element) => {
      const frank = document.getElementById("frank");

      const boxK = document.createElement("div");
      const headerDiv = document.createElement("div");
      const timeDiv = document.createElement("div");

      boxK.classList.add("boxKL11");
      headerDiv.classList.add("headerDiv");
      timeDiv.classList.add("timeDiv");

      frank.appendChild(boxK);

      const img1 = document.createElement("img");
      const headerP = document.createElement("p");
      const timeP = document.createElement("p");
      const textP = document.createElement("p");

      img1.classList.add("img1");
      headerP.classList.add("headerP");
      timeP.classList.add("timeP");
      textP.classList.add("textP");

      img1.src = element.image;
      headerP.textContent = "Bakery";
      timeP.textContent = `${element.prepTimeMinutes} min`;
      textP.textContent = element.instructions[0];

      boxK.append(img1, headerDiv, textP);
      headerDiv.append(headerP, timeDiv);
      timeDiv.append(timeP);
    });
  }
}

function recipesPaginationSecond(array) {
  if (!recipesButton) {
    const ocean = document.getElementById("ocean");
    ocean.textContent = "";
  } else {
    array.forEach((element) => {
      const ocean = document.getElementById("ocean");

      const boxK = document.createElement("div");
      const headerDiv = document.createElement("div");
      const timeDiv = document.createElement("div");

      boxK.classList.add("boxKL11");
      headerDiv.classList.add("headerDiv");
      timeDiv.classList.add("timeDiv");

      ocean.appendChild(boxK);

      const img1 = document.createElement("img");
      const headerP = document.createElement("p");
      const timeP = document.createElement("p");
      const textP = document.createElement("p");

      img1.classList.add("img1");
      headerP.classList.add("headerP");
      timeP.classList.add("timeP");
      textP.classList.add("textP");

      img1.src = element.image;
      headerP.textContent = "Bakery";
      timeP.textContent = `${element.prepTimeMinutes} min`;
      textP.textContent = element.instructions[0];

      boxK.append(img1, headerDiv, textP);
      headerDiv.append(headerP, timeDiv);
      timeDiv.append(timeP);
    });
  }
}

function displayRecipes(array) {
  array.forEach((element) => {
    const commonBoxs = document.getElementById("commonBoxs");

    const boxK = document.createElement("div");
    const headerDiv = document.createElement("div");
    const timeDiv = document.createElement("div");

    boxK.classList.add("boxKL11");
    headerDiv.classList.add("headerDiv");
    timeDiv.classList.add("timeDiv");

    commonBoxs.appendChild(boxK);

    const img1 = document.createElement("img");
    const headerP = document.createElement("p");
    const timeP = document.createElement("p");
    const textP = document.createElement("p");

    img1.classList.add("img1");
    headerP.classList.add("headerP");
    timeP.classList.add("timeP");
    textP.classList.add("textP");

    img1.src = element.image;
    headerP.textContent = "Bakery";
    timeP.textContent = `${element.prepTimeMinutes} min`;
    textP.textContent = element.instructions[0];

    boxK.append(img1, headerDiv, textP);
    headerDiv.append(headerP, timeDiv);
    timeDiv.append(timeP);
  });
}

const recipesButton = document.getElementById("recipesButton");

recipesButton.addEventListener("click", (e) => {
  e.preventDefault();

  const productsDiv = document.querySelector(".productsDiv");

  productsDiv.style.height = "370px";

  const count = 1;
});

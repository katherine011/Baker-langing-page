document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const button = document.getElementById("Btn");

  let currentPage = 0;
  const itemsPerPage = 3;
  let products = [];

  function createProductBox(product, isFirst = false) {
    const backgroundImage = product.image
      ? `style="background-image: url('${product.image}'); background-size: cover; background-position: center;"`
      : "";

    if (isFirst) {
      return `
          <div class="BigboxG" ${backgroundImage}>
            <div class="fontG">
              <h5>${product.name}</h5>
              <h1>${product.cuisine}</h1>
              <div class="TextG">
                <p>${product.description || "Delicious homemade item."}</p>
                <h2 class = "giodolari">${product.rating || "$9"}</h2>
              </div>
            </div>
          </div>
        `;
    } else {
      return `
          <div class="box3G">
            <div class="threeDivG" ${backgroundImage}></div>
            <div style="padding: 25px">
              <h5>${product.cuisine}</h5>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <p>${product.name}</p>
                </div>
                <h2>${product.rating || "$5"}</h2>
              </div>
            </div>
          </div>
        `;
    }
  }

  function loadProducts(startIndex, count) {
    const itemsToShow = products.slice(startIndex, startIndex + count);

    itemsToShow.forEach((product, index) => {
      const isFirst = startIndex === 0 && index === 0;
      const productHTML = createProductBox(product, isFirst);
      container.innerHTML += productHTML;
    });

    if ((currentPage + 1) * itemsPerPage >= products.length) {
      button.style.display = "none";
    }
  }

  async function fetchRecipes() {
    try {
      const response = await fetch(`https://dummyjson.com/recipes?limit=13`);
      const data = await response.json();
      products = data.recipes;

      loadProducts(0, 5);
      console.log(products);

      currentPage = Math.ceil(5 / itemsPerPage);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  }

  button.addEventListener("click", () => {
    loadProducts(currentPage * itemsPerPage, itemsPerPage);
    currentPage++;
  });

  fetchRecipes();
});

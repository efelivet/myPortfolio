     const searchBar = document.getElementById("searchBar");
    const products = document.querySelectorAll(".product");

    searchBar.addEventListener("keyup", function () {
      let query = searchBar.value.toLowerCase();

      products.forEach(product => {
        let productName = product.textContent.toLowerCase();

        if (productName.includes(query)) {
          product.classList.remove("hidden");
        } else {
          product.classList.add("hidden");
        }
      });
    });
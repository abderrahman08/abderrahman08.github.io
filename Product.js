// Define an object to store the product data
var products = [
    {
        name: "Fancy Product",
        price: "$40.00 - $80.00",
        categories: ["All Products", "Best seller", "Men"]
    },
    {
        name: "Special Item",
        price: "$18.00",
        categories: ["All Products", "New Arrivals"]
    },
    {
        name: "Sale Item",
        price: "$25.00",
        categories: ["All Products", "Best seller", "Women"]
    },
    // Add more products as needed
];

// Function to render the filtered products
function renderProducts(filteredProducts) {
    var productContainer = document.getElementById("product-container");
    productContainer.innerHTML = "";

    filteredProducts.forEach(function(product) {
        var card = document.createElement("div");
        card.className = "col mb-5";
        card.innerHTML = `
            <div class="card h-100">
                <!-- Product image -->
                <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="...">
                <div class="card-body p-4">
                    <div class="text-center">
                        <!-- Product name -->
                        <h5 class="fw-bolder">${product.name}</h5>
                        <!-- Product price -->
                        ${product.price}
                    </div>
                </div>
                <!-- Product actions -->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                </div>
            </div>
        `;

        productContainer.appendChild(card);
    });
}

// Function to handle the facet selection
function handleFacetSelection() {
    var checkboxes = document.querySelectorAll('input[name="category"]');
    var selectedCategories = [];

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            selectedCategories.push(checkbox.value);
        }
    });

    // Filter the products based on the selected categories
    var filteredProducts = products.filter(function(product) {
        return selectedCategories.some(function(category) {
            return product.categories.includes(category);
        });
    });

    renderProducts(filteredProducts);
}

// Attach event listeners to the facet checkboxes
var checkboxes = document.querySelectorAll('input[name="category"]');
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", handleFacetSelection);
});

// Render all products initially
renderProducts(products);

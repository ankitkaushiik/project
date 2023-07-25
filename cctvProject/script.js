
function registerUser() {
  const username = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Save user data to local storage (for simplicity)
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);

  alert('Registration successful! You can now log in.');
}
document.getElementById('register-btn').addEventListener('click', registerUser);


const products = [
    {
        type: "Home",
        name: "CCTV Camera 1",
        price: 199.99,
        description: "A high-quality CCTV camera with night vision."
         
        
    },
            
    {
        type: "Home",
        name: "CCTV Camera 2",
        price: 249.99,
        description: "A weather-resistant CCTV camera for outdoor use."
        
    },
    {
        type: "Company",
        name: "CCTV System 1",
        price: 999.99,
        description: "A comprehensive CCTV system for businesses."
         
    },
    {
        type: "Home",
        name: "CCTV Camera 3",
        price: 455.99,
        description: "A weather-resistant CCTV camera for outdoor use."
        
        
    },
    {
        type: "Home",
        name: "CCTV Camera 4",
        price: 2478.99,
        description: "A weather-resistant CCTV camera for outdoor use."
        
    },

    
];

function displayProducts() {
    const productsSection = document.getElementById("products");
    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        
        // const productImage = document.createElement("img");
              //  productImage.src = product.imageURL;
               // productImage.alt = product.name;
               // productImage.style.maxWidth = "200px";

        const productType = document.createElement("p");
        productType.textContent = `Type: ${product.type}`;

        const productName = document.createElement("h2");
        productName.textContent = product.name;

        const productPrice = document.createElement("p");
        productPrice.textContent = `Price: $${product.price}`;

        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;
        
         const addToCartButton = document.createElement("button");
                addToCartButton.textContent = "Add to Cart";
                addToCartButton.addEventListener("click", () => {
                   
                  
                    console.log(`Product "${product.name}" added to cart!`);
                     });
              
              // productDiv.appendChild(productImage);

        productDiv.appendChild(productType);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productDescription);
          productDiv.appendChild(addToCartButton);

        productsSection.appendChild(productDiv);
    });
}

// Call the function to display products when the page loads
window.onload = displayProducts;

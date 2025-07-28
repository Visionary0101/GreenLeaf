// JavaScript/cart.js

// Load cart items from localStorage
const cartItemsContainer = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty 🛒</p>";
    totalPriceElement.textContent = "Total: ₹0";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
      <h4>${item.name}</h4>
      <p>Price: ₹${item.price} × ${item.quantity}</p>
      <p>Subtotal: ₹${item.price * item.quantity}</p>
      <button onclick="removeItem(${index})">Remove</button>
    `;
    cartItemsContainer.appendChild(itemDiv);
    total += item.price * item.quantity;
  });

  totalPriceElement.textContent = `Total: ₹${total}`;
}

function removeItem(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function checkout() {
  alert("Thank you for shopping with GreenLeaf! 🌱");
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();

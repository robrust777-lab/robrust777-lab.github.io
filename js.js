const products = [
  { name: "VIP (7 дней)", price: "199 ₽" },
  { name: "PREMIUM (30 дней)", price: "499 ₽" },
  { name: "Рюкзак", price: "249 ₽" },
  { name: "Турель", price: "699 ₽" }
];

const container = document.querySelector(".products");

products.forEach(p => {
  container.innerHTML += `
    <div class="product-card">
      <h3>${p.name}</h3>
      <span>${p.price}</span>
      <button>Купить</button>
    </div>
  `;
});

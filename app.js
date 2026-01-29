const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

const products = [
  {
    name: "Игра 1",
    price: "199 ₽",
    image: "https://via.placeholder.com/300"
  },
  {
    name: "Игра 2",
    price: "299 ₽",
    image: "https://via.placeholder.com/300"
  }
];

const container = document.getElementById("products");

products.forEach(p => {
  container.innerHTML += `
    <div class="card">
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p>${p.price}</p>
    </div>
  `;
});



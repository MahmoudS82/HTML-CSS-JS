let eat = document.querySelector(".eat");
let drink = document.querySelector(".drink");
let firstCategory = document.querySelector(".first-category");
let secondCategory = document.querySelector(".second-category");
let eatContent = document.querySelector(".eat-content");
let drinkContent = document.querySelector(".drink-content");

eat.addEventListener("click", () => {
  firstCategory.style.backgroundColor = "#616161";
  firstCategory.style.color = "white";

  secondCategory.style.backgroundColor = "#f7f5f2";
  secondCategory.style.color = "black";

  eatContent.style.display = "block";
  drinkContent.style.display = "none";
});

drink.addEventListener("click", () => {
  secondCategory.style.backgroundColor = "#616161";
  secondCategory.style.color = "white";

  firstCategory.style.backgroundColor = "#f7f5f2";
  firstCategory.style.color = "black";

  eatContent.style.display = "none";
  drinkContent.style.display = "block";
});


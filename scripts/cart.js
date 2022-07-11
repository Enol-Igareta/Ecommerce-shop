import {
  articleText,
  buttonPlus,
  buttonMinus,
  counter,
  addCart,
  numProduct,
  cart,
  cardCart,
  cardCartArticles,
  cardCartEmpty,
  articlesNumber,
  articlesPrice,
  imgDelete,
} from "./main.js";

const editCounter = (tgt) => {
  if (tgt == buttonPlus) counter.textContent++;
  if (tgt == buttonMinus) {
    counter.textContent <= 0
      ? (counter.textContent = 0)
      : counter.textContent--;
  }
};

const showNumProduct = () => {
  if (numProduct.textContent > 0) {
    numProduct.classList.remove("hidden");
    priceArticles();
    openCart();
  } else if (numProduct.textContent < 1) {
    numProduct.classList.add("hidden");
    cardCartArticles.classList.add("none");
    cardCartEmpty.classList.remove("none");
  }
};

const buyCart = (tgt) => {
  if (tgt == addCart) {
    let add = counter.textContent;
    numProduct.textContent = add;
    showNumProduct();
  }
};

const priceArticles = () => {
  cardCartArticles.classList.remove("none");
  cardCartEmpty.classList.add("none");
  articlesNumber.textContent = `$125.00 x ${numProduct.textContent}`;
  articlesPrice.textContent = `$${125.0 * numProduct.textContent}.00`;
};

const imgDeleteButton = (tgt) => {
  if(tgt == imgDelete) {
    cardCartArticles.classList.add("none");
    cardCartEmpty.classList.remove("none");
    numProduct.classList.add("hidden");
    counter.textContent = 0;
  };
};

const openCart = () => {
  cardCart.classList.remove("hidden");
};

const closeCart = () => {
  cardCart.classList.add("hidden");
};

const toggleCart = (tgt) => {
  if(tgt == cart) cardCart.classList.toggle("hidden")
  if (!tgt.classList.contains("cart")) closeCart();
};

window.addEventListener("click", (e) => {
  let tgt = e.target;
  editCounter(tgt);
  buyCart(tgt);
  imgDeleteButton(tgt);
  toggleCart(tgt);
});

function toggle(elem, clase) {
  elem.classList.toggle(clase);
}

function modificarToggleMenu() {
  menu.classList.contains("menu-lateral--active")
    ? (menu_burguer.classList.toggle("none"),
      menu_x.classList.remove("none"))
    : (menu_burguer.classList.remove("none"),
      menu_x.classList.add("none"));

  cerrarOpcionesMenu();
}

function cerrarOpcionesMenu() {
  if (menu.classList.contains("menu-lateral--none") === false) {
    opciones_menu.forEach((el) => el.classList.add("none"));
    flecha_abajo_features.classList.remove("none");
    flecha_abajo_company.classList.remove("none");
    flecha_arriba_features.classList.add("none");
    flecha_arriba_company.classList.add("none");
  }
}
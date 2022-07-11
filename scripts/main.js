export const main = document.querySelector(".main");
// MENU BURGUER
export const toggleMenu = document.querySelector(".toggle-menu");
export const toggleButtonX = document.querySelector(".toggle-button-x");
export const toggleButtonBurguer = document.querySelector(
  ".toggle-button-burguer"
);
export const listOptions = document.querySelector(".list__options");
export const nav = document.querySelector(".nav__list");
// CART
export const articleText = document.querySelector(".article-text");
export const buttonPlus = document.querySelector(".amount__img-plus");
export const buttonMinus = document.querySelector(".amount__img-minus");
export const counter = document.querySelector(".amount__counter");
export const addCart = document.querySelector(".article-text__add");
export const numProduct = document.querySelector(".header__num-product");
export const cart = document.querySelector(".header__cart");
export const cardCart = document.querySelector(".card-cart");
export const cardCartArticles = document.querySelector(".card-cart__articles");
export const cardCartEmpty = document.querySelector(".card-cart__empty");
export const articlesNumber = document.querySelector(".articles__articles");
export const articlesPrice = document.querySelector(".articles__price");
export const imgDelete = document.querySelector(".articles__cart-delete");
// SLIDER
export const cardFlotant = document.querySelector(".article-images--flotant");
export const articleImages = document.querySelector(".article-images");
export const bigImgFlotant = document.querySelector(".big-img--flotant");
export const bigImg = document.querySelector(".big-img");
export const img = document.querySelectorAll(".article-images__img");
export const flotantClose = document.querySelector(".flotant-img-close");
export const previousImg = document.querySelector(".button-previous");
export const nextImg = document.querySelector(".button-next");
export const mainImg = document.querySelector(".main-img");
export const smallImgFlotant = document.querySelectorAll(".small-img--flotant");

export const addMainBlack = () => {
  main.classList.add("black");
};
export const removeMainBlack = () => {
  main.classList.remove("black");
};

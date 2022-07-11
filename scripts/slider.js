import {
  main,
  cardFlotant,
  articleImages,
  bigImgFlotant,
  bigImg,
  img,
  flotantClose,
  previousImg,
  nextImg,
  smallImgFlotant,
  mainImg,
  addMainBlack,
  removeMainBlack
} from "./main.js";

// Change backGround

const backgroundFlotant = () => {
  !cardFlotant.classList.contains("hidden")
    ? addMainBlack()
    : removeMainBlack();
};

const showFlotant = () => {
  if (cardFlotant.classList.contains("hidden"))
    cardFlotant.classList.remove("hidden");
    addMainBlack();
    previousImg.classList.remove("hidden");
    nextImg.classList.remove("hidden");
    
};

const closeFlotant = () => {
    cardFlotant.classList.add("hidden");
    removeMainBlack();
};

const buttonCloseFlotant = (tgt) => {
  if (tgt === flotantClose) closeFlotant();
};

const createSrcImgBig = (str) => {
  bigImgFlotant.src = str;
};

function expRegImg(str) {
  return str.replace(/-thumbnail/g, "");
}
const mainImgEqualSmallImg = () => {
  mainImg.src = bigImgFlotant.src;
};

const filterBgImg = () => {
  img.forEach((el) => {
    if (bigImgFlotant.src == expRegImg(el.src)) {
      el.classList.add("filter");
      el.classList.add("border-orange");
    } else {
      el.classList.remove("filter");
      el.classList.remove("border-orange");
    }
  });
};

function load() {
  img.forEach((el) => {
    if (bigImg.src == expRegImg(el.src)) {
      el.classList.add("filter");
      el.classList.add("border-orange");
    }
  });
}
window.onload = load;

//   INTENTANDO CERRAR LA CARDFLOTANT AL CLICKAR FUERA
const cerrarCardFlotantPinchandoFuera = (tgt) => {
    if (!cardFlotant.contains(tgt) && !articleImages.contains(tgt)) {
      cardFlotant.classList.add("hidden");
      backgroundFlotant();
    }
};

// PASAR LA IMG CON LOS BOTONES DE LA FLOTANT
const previousImgAction = (tgt, count, arr) => {
  if (tgt == previousImg) {
    if (count > 0) {
      bigImgFlotant.src = arr[count - 1];
      count--;
      
    } else {
      bigImgFlotant.src = arr[arr.length - 1];
      count = arr.length - 1;
    }
  }
};
  const nextImgAction = (tgt, count, arr) => {
    if (tgt == nextImg) {
      if (count < arr.length - 1) {
        bigImgFlotant.src = arr[count + 1];
        count++;
      } else {
        bigImgFlotant.src = arr[0];
        count = 0;
      }
    }
  };

  img.forEach((el) =>
  el.addEventListener("click", (e) => {
    backgroundFlotant();
    showFlotant();
    let src = e.target.src;
    createSrcImgBig(expRegImg(src));
    filterBgImg();
  })
);

  window.addEventListener("click", (e) => {
    const arr = [];
    smallImgFlotant.forEach((el) => arr.push(expRegImg(el.src)));
    let count = arr.indexOf(bigImgFlotant.src);
    let tgt = e.target;

    previousImgAction(tgt, count, arr);
    nextImgAction(tgt, count, arr);
    filterBgImg();
    buttonCloseFlotant(tgt);
    mainImgEqualSmallImg();
    cerrarCardFlotantPinchandoFuera(tgt);    
  });


  
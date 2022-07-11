import { toggleMenu, toggleButtonX, toggleButtonBurguer,nav,main,addMainBlack,
    removeMainBlack} from "./main.js";


const openMenu = (tgt) =>{
    if(tgt === toggleButtonBurguer){
        toggleButtonBurguer.classList.add("none");
        toggleButtonX.classList.remove("none");
        nav.classList.add("toggle-menu--active");
        addMainBlack();
    }
};

const closeMenu = (tgt) =>{
    if(tgt === toggleButtonX){
        toggleButtonX.classList.add("none");
        toggleButtonBurguer.classList.remove("none");
        nav.classList.remove("toggle-menu--active");
        removeMainBlack();
    }
};

toggleMenu.addEventListener("click", (e) => {
    const tgt = e.target;
    openMenu(tgt);
    closeMenu(tgt);
    addMainBlack()
});


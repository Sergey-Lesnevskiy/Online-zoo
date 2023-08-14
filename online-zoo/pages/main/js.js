//for  menu
const menuBTN = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu");
const crossMenu = menu.querySelector(".cross");
const containerMenu = document.querySelector(".test_blackout");
const body = document.querySelector(".body");

//for slider
const BTN_LEFT = document.querySelector(".circle_left");
const BTN_RIGHT = document.querySelector(".circle_right");
const CARUSEL = document.querySelector(".carusel");
const leftItems = document.querySelector(".left_carusel");
const rightItems = document.querySelector(".right_carusel");
const activeItems = document.querySelector(".active_carusel");

//for testemon_slider and popup
let range = document.querySelector(".test");
let rangeNum = document.querySelector(".wrapper_range");

//addCardtest
const cardItemTesto = [
  {
    img: "../../assets/images/Ellipse 2.png",
    name: "Mila Riksha",
    local: "Local Austria • Today",
    reviews: " Это место для вашей рекламы a place for your advertising",
    background: "red",
  },
  {
    img: "../../assets/images/Ellipse 2.png",
    name: "Mila Riksha",
    local: "Local Austria • Today",
    reviews: " Это место для вашей рекламы a place for your advertising",
    background: "green",
  },
  {
    img: "../../assets/images/Ellipse 2.png",
    name: "Mila Riksha",
    local: "Local Austria • Today",
    reviews: " Это место для вашей рекламы a place for your advertising",
    background: "yellow",
  },
  {
    img: "../../assets/images/Ellipse 2.png",
    name: "Mila Riksha",
    local: "Local Austria • Today",
    reviews: " Это место для вашей рекламы a place for your advertising",
    background: "blue",
  },
  {
    img: "../../assets/images/Ellipse 2.png",
    name: "Mila Riksha",
    local: "Local Austria • Today",
    reviews: " Это место для вашей рекламы a place for your advertising",
    background: "grey",
  },
  {
    img: "../../assets/images/Ellipse 2.png",
    name: "Mila Riksha",
    local: "Local Austria • Today",
    reviews: " Это место для вашей рекламы a place for your advertising",
    background: "white",
  },
  {
    img: "../../assets/images/Ellipse 2.png",
    name: "Mila Riksha",
    local: "Local Austria • Today",
    reviews: " Это место для вашей рекламы a place for your advertising",
    background: "red",
  },
  {
    img: "../../assets/images/Ellipse 2.png",
    name: "Mila Riksha",
    local: "Local Austria • Today",
    reviews: " Это место для вашей рекламы a place for your advertising",
    background: "white",
  },
  {
    img: "../../assets/images/Ellipse 2.png",
    name: "Mila Riksha",
    local: "Local Austria • Today",
    reviews: " Это место для вашей рекламы a place for your advertising",
    background: "orange",
  },
  {
    img: "../../assets/images/Ellipse 2.png",
    name: "Mila Riksha",
    local: "Local Austria • Today",
    reviews: " Это место для вашей рекламы a place for your advertising",
    background: "blue",
  },
  {
    img: "../../assets/images/Ellipse 2.png",
    name: "Mila Riksha",
    local: "Local Austria • Today",
    reviews: " Это место для вашей рекламы a place for your advertising",
    background: "green",
  },
];
for (let i = 0; i < cardItemTesto.length; i++) {
  const item = document.createElement("li");
  item.classList.add("testimonials_link");
  item.setAttribute("name", i);
  item.style.backgroundColor = cardItemTesto[i].background;
  item.innerHTML = `
  <div class="wrapper_foto-name-local">
      <div class="foto-card">
          <img src="${cardItemTesto[i].img}" alt="">
      </div>
      <div class="name_local">
          <h4 class="card_name">${cardItemTesto[i].name}</h4>
          <h4 class="card_local">${cardItemTesto[i].local}</h4>
      </div>
  </div>
  <div class="reviews">
  ${cardItemTesto[i].reviews}
  </div>
  `;
  rangeNum.appendChild(item);
}
//addCardtest

let ITEMS_CORUSEL = [
  {
    img: "../../assets/images/Rectangle 5.png",
    text_transparent: "Panda",
    title_img: "giant Pandas",
    subtitle_img: "Native to Southwest China",
    meals_img: "../../assets/images/banana-bamboo_icon.png",
  },
  {
    img: "../../assets/images/Rectangle 5 (1).png",
    text_transparent: "EAGLES",
    title_img: "EAGLES",
    subtitle_img: "Native to Southwest  America",
    meals_img: "../../assets/images/meet-fish_icon.png",
  },
  {
    img: "../../assets/images/Rectangle 5 (2).png",
    text_transparent: "gorillas",
    title_img: "gorillas",
    subtitle_img: "Native to Congo",
    meals_img: "../../assets/images/banana-bamboo_icon.png",
  },
  {
    img: "../../assets/images/Rectangle 5 (3).png",
    text_transparent: "two-toed sloth",
    title_img: "two-toed sloth",
    subtitle_img: "Mesoamerica, South America",
    meals_img: "../../assets/images/banana-bamboo_icon.png",
  },
  {
    img: "../../assets/images/Rectangle 5 (4).png",
    text_transparent: "cheetahs",
    title_img: "cheetahs",
    subtitle_img: "Native to Africa",
    meals_img: "../../assets/images/meet-fish_icon.png",
  },
  {
    img: "../../assets/images/Rectangle 5 (5).png",
    text_transparent: "penguins",
    title_img: "penguins",
    subtitle_img: "Native to Atlantica",
    meals_img: "../../assets/images/meet-fish_icon.png",
  },
];

function addCards(direction) {
  direction.innerHTML = "";
  shuffle(ITEMS_CORUSEL);

  for (let i = 0; i < ITEMS_CORUSEL.length; i++) {
    const item = document.createElement("li");
    item.classList.add("item");
    item.innerHTML = `
                                  <div class="card_img">
                                      <img src="${ITEMS_CORUSEL[i].img}" alt="">
                                  </div>
                                  <div class="discription_img">
                                      <div class="text_img">
                                          <p class="text_transparent">${ITEMS_CORUSEL[i].text_transparent}</p>
                                          <p class="title_img">${ITEMS_CORUSEL[i].title_img}
                                          </p>
                                          <p class="subtitle_img">
                                          ${ITEMS_CORUSEL[i].subtitle_img}
                                          </p>
                                      </div>
                                      <div class="meals">
                                          <img src=${ITEMS_CORUSEL[i].meals_img} alt="">
                                      </div>
                                  </div>
          
          `;

    direction.appendChild(item);
  }
}
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

addCards(leftItems);
addCards(rightItems);
//mix arr

//mix arr

//scroling
const moveLeft = () => {
  CARUSEL.classList.add("transition_left");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
  CARUSEL.classList.add("transition_right");
  BTN_RIGHT.removeEventListener("click", moveRight);
  BTN_LEFT.removeEventListener("click", moveLeft);
};

BTN_LEFT.addEventListener("click", moveLeft);

BTN_RIGHT.addEventListener("click", moveRight);

CARUSEL.addEventListener("animationend", (e) => {
  if (e.animationName === "move-left") {
    CARUSEL.classList.remove("transition_left");

    activeItems.innerHTML = leftItems.innerHTML;
    addCards(leftItems);
  } else {
    CARUSEL.classList.remove("transition_right");

    activeItems.innerHTML = rightItems.innerHTML;
    addCards(rightItems);
  }

  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);
});
//scroling

//corusel

const container_range = document.querySelector(".wrapper_links");
function transRight() {
  var animation = rangeNum.animate(
    [{ transform: "translate(-298px)" }, { transform: "translate(0)" }],
    500
  );
  animation.addEventListener("finish", function () {
    rangeNum.style.transform = "translate(0)";
  });
}
function transLeft() {
  var animation = rangeNum.animate(
    [{ transform: "translate(298px)" }, { transform: "translate(0)" }],
    500
  );
  animation.addEventListener("finish", function () {
    rangeNum.style.transform = "translate(0)";
  });
}
let number = 0;
range.addEventListener("input", () => {
  const { width } = container_range.getBoundingClientRect();
  if (width < 1160) {
    rangeTest(-2245, 321);
    // rangeNum.style.left = -2245
  } else {
    rangeTest(-2070, 296);
  }
});

function rangeTest(distance, step) {
  if (range.value == 0) {
    if (number < range.value) {
      number++;
      transRight();
    } else {
      number--;
      transLeft();
    }
    rangeNum.style.left = distance + "px";
  } else if (range.value == 1) {
    if (number < range.value) {
      number++;
      transRight();
    } else {
      number--;
      transLeft();
    }
    rangeNum.style.left = distance + step + "px";
  } else if (range.value == 2) {
    if (number < range.value) {
      number++;
      transRight();
    } else {
      number--;
      transLeft();
    }
    rangeNum.style.left = distance + step * 2 + "px";
  } else if (range.value == 3) {
    if (number < range.value) {
      number++;
      transRight();
    } else {
      number--;
      transLeft();
    }
    rangeNum.style.left = distance + step * 3 + "px";
  } else if (range.value == 4) {
    if (number < range.value) {
      number++;
      transRight();
    } else {
      number--;
      transLeft();
    }
    rangeNum.style.left = distance + step * 4 + "px";
  } else if (range.value == 5) {
    if (number < range.value) {
      number++;
      transRight();
    } else {
      number--;
      transLeft();
    }
    rangeNum.style.left = distance + step * 5 + "px";
  } else if (range.value == 6) {
    if (number < range.value) {
      number++;
      transRight();
    } else {
      number--;
      transLeft();
    }
    rangeNum.style.left = distance + step * 6 + "px";
  } else if (range.value == 7) {
    if (number < range.value) {
      number++;
      transRight();
    } else {
      number--;
      transLeft();
    }
    rangeNum.style.left = distance + step * 7 + "px";
  }
}
//уменьшение экрана

document.addEventListener("DOMContentLoaded", function (event) {
  window.onresize = function () {
    resize_info();
  };
});

function resize_info() {
  let { width } = container_range.getBoundingClientRect();
  // if (width < 1000 && width > 600) {
  //   rangeNum.style.left = "67px";
  // } else 
  if (width < 630 && width> 470) {
    rangeNum.style.left = "calc(50% - 437px / 2)";
  }else if(width < 469 ){
    rangeNum.style.left = '0px'

  }

}
//уменьшение экрана

//slider

//popup

function AddPopup(i) {
  POPUP_CARD.innerHTML = "";
  const item = document.createElement("li");
  item.classList.add("testimonials_link_popup");
  item.setAttribute("name", i);
  item.style.backgroundColor = cardItemTesto[i].background;
  item.innerHTML = `
<div class="wrapper_foto-name-local">
    <div class="foto-card">
        <img src="${cardItemTesto[i].img}" alt="">
    </div>
    <div class="name_local">
        <h4 class="card_name">${cardItemTesto[i].name}</h4>
        <h4 class="card_local">${cardItemTesto[i].local}</h4>
    </div>
</div>
<div class="reviews">
${cardItemTesto[i].reviews}
</div>
`;
  POPUP_CARD.appendChild(item);
}

const POPUP = document.querySelector(".popup");
const POPUP_CONTENT = document.querySelector(".popup_content");

const POPUP_CLOSE = document.querySelector(".popup_close");
const POPUP_CARD = document.querySelector(".popup_card");
const linksAll = document.querySelectorAll(".testimonials_link");

for (let i = 0; i < linksAll.length; i++) {
  linksAll[i].addEventListener("click", (e) => {
    POPUP.classList.add("open_popup");
    body.classList.add("lock");
    AddPopup(e.currentTarget.getAttribute("name"));
  });
}

function removePopup() {
  POPUP.classList.remove("open_popup");
  body.classList.remove("lock");
}
POPUP_CLOSE.addEventListener("click", removePopup);

POPUP.addEventListener("click", (e) => {
  const withinBoundaries = e.composedPath().includes(POPUP_CONTENT);
  // скрываем элемент т к клик был за его пределами
  if (!withinBoundaries) {
    removePopup();
  }
});
POPUP.addEventListener("mousemove", (e) => {
  const withinBoundaries = e.composedPath().includes(POPUP_CONTENT);
  // hidden mouse without popup
  if (!withinBoundaries) {
    POPUP_CONTENT.style.cursor = "default";
  }
});

POPUP.addEventListener("mousemove", (e) => {
  const withinBoundaries = e.composedPath().includes(POPUP_CONTENT);
  // скрываем элемент т к клик был за его пределами
  if (!withinBoundaries) {
    POPUP_CONTENT.style.cursor = "default";
  }
});

//popup
//add burger_menu

function addBurger() {
  menu.classList.add("active");
  containerMenu.classList.add("active");
  body.classList.add("lock");
}
function removeBurger() {
  menu.classList.remove("active");
  containerMenu.classList.remove("active");
  body.classList.remove("lock");
}

menuBTN.addEventListener("click", addBurger);
crossMenu.addEventListener("click", removeBurger);
containerMenu.addEventListener("click", removeBurger);
//add burger_menu

//add burger_menu
const menuBTN = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu");
const crossMenu = menu.querySelector(".cross");
const conteinerMenu = document.querySelector(".test_blackout");
const body = document.querySelector(".body");

function addBurger() {
  menu.classList.add("active");
  conteinerMenu.classList.add("active");
  body.classList.add("lock");
}
function removeBurger() {
  menu.classList.remove("active");
  conteinerMenu.classList.remove("active");
  body.classList.remove("lock");
}

menuBTN.addEventListener("click", addBurger);
crossMenu.addEventListener("click", removeBurger);
conteinerMenu.addEventListener("click", removeBurger);
//add burger_menu

const conteinerPoints = document.querySelector(".yellow_points");
const INPUT_COST = document.querySelector(".input-another");
//add Summ
conteinerPoints.addEventListener("click", (e) => {
 
  INPUT_COST.value = e.target.getAttribute("data-text");
});
//add Summ

//all arounds
let  arrArounds = document.querySelectorAll('.inputs-inline')
let arrTest= []
for (let i = 0; i < arrArounds.length; i++) {
    
    arrTest.push(arrArounds[i].getAttribute("data-text"))

}
function deleteChecked (n){
    for (let i = 0; i < arrArounds.length; i++) {
        if(arrArounds!=n){
            arrTest.push(arrArounds[i].removeAttribute('checked'))
        }
        
    }
}

//all arounds

//add checked
INPUT_COST.addEventListener('input',()=>{
    let b
    deleteChecked(b)

  let a=  arrTest.find(item => item == INPUT_COST.value)


if(a){
      b= document.querySelector('.inputs-inline[data-text="'+a+'"]');
      b.setAttribute('checked', 'true');
}
  
})

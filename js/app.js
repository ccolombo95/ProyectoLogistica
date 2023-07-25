const menu = document.querySelector(".menu__hamburguer");
const list = document.querySelector(".menu__links");

    menu.addEventListener("click", () => {
        list.classList.toggle("menu__links--show");

        if (list.classList.contains("menu__links--show")) {
            menu.setAttribute("aria-label", "Cerrar menú");
        } else {
            menu.setAttribute("aria-label", "Abrir menú");
        }
});


const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderli = document.querySelectorAll(".slider-li"),
      punto = document.querySelectorAll(".punto");



btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

setInterval(() => {
    moveToRight()
}, 4000);


let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderli.length;

function moveToRight() {
    
    if (counter >= sliderli.length-1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        punto.forEach( ( cadaPunto , i )=> {   
            if (counter == i){
                punto[i].classList.add('activo');    
            }else{
                punto[i].classList.remove('activo');  
            };
        });
        return;
    } 
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .15s";
    punto.forEach( ( cadaPunto , i )=> {   
        if (counter == i){
            punto[i].classList.add('activo');    
        }else{
            punto[i].classList.remove('activo');  
        }
    })
    
}  

function moveToLeft() {
    counter--;
    if (counter < 0 ) {
        counter = sliderli.length-1;
        operacion = widthImg * (sliderli.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        punto.forEach( ( cadaPunto , i )=> {   
            if (counter == i){
                punto[i].classList.add('activo');    
            }else{
                punto[i].classList.remove('activo');  
            };
        });
        return;
    } 
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .15s"
    punto.forEach( ( cadaPunto , i )=> {   
        if (counter == i){
            punto[i].classList.add('activo');    
        }else{
            punto[i].classList.remove('activo');  
        }
    })
} 


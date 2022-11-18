// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
// 
// typical import
import {gsap,Power4} from "gsap";

var menu = (".menu"),
    menuitem1 = (".menu__item--1"),
    menuitem2 = (".menu__item--2"),
    menuitem3 = (".menu__item--3"),
    speed = .15;
    

//instantiate  timeline
var tl = new gsap.timeline({paused:true}); //pause default

//collapse menu
tl.to(menuitem1, speed, {y : 20 , easy : Power4 . easyOut  }, "label--1" ) 
  .to(menuitem3, speed, {y : -20 , easy : Power4 . easyOut  }, "label--1" )

// transition burger
  .to(menu, speed, {x : 200 , easy : Power4 . easyOut  }) 

//rotate all items
  .to([menuitem1, menuitem2, menuitem3], speed, {rotation: -90} )

//expand menu
  .to(menuitem1, speed, {x : -20 , easy : Power4 . easyOut}, "label--2" )
  .to(menuitem3, speed, {x : 20 , easy : Power4 . easyOut}, "label--2" ); 


  const me1 = document.querySelector(".menu");
  me1.addEventListener("click", () => {
    me1.classList.toggle("active");

    if (me1.classList.contains("active")) {
        tl.play();
    }  
    else {
        tl.reverse();
        
    }
  });
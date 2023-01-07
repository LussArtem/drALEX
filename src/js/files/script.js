// Подключение функционала "Чертогов Фрилансера"
import { isMobile, setHash } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
// 
// typical import
import {gsap,Power4,} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);



var menu = (".header__burger"),
    menuitem1 = (".menu__item--1"),
    menuitem2 = (".menu__item--2"),
    menuitem3 = (".menu__item--3"),
    speed = .15;
    

//instantiate  timeline
var tl = new gsap.timeline({paused:true}); //pause default

// collapse menu
tl.to(menuitem1, speed, {y : 10 , easy : Power4 . in  }, "label--1" ) 
  .to(menuitem3, speed, {y : -10 , easy : Power4 . in  }, "label--1" )

  // rotate all items
  .to(menu, speed, {rotation: -90})

// transition burger
  .to(menu, speed, {x : 52 , easy : Power4 . in  }) 


//expand menu
  .to(menuitem1, speed, {y : 0 , easy : Power4 . in, backgroundColor: '#be3455'}, "label--2"  )
  .to(menuitem3, speed, {y : 0 , easy : Power4 . in}, "label--2" ); 


  const me1 = document.querySelector(".header__menu");
  me1.addEventListener("click", () => {

    if (!me1.classList.contains("hahaha")) {
        tl.play();
    }  
    else {
        tl.reverse();   
    }
  });


// /////////////////////////
ScrollTrigger.create({
  trigger: ".overlay",
  start: "top center",
  end: "bottom",
  markers: true,
  onEnter: () => scrollDown(),
  onEnterBack: () => scrollUp(),
});

function scrollDown() {
  zipUp();
  zipAnimationDown();

  // marque();
  gsap.to(window, {
    scrollTo: { 
      y: ".sets", 
      autoKill: false 
    },
    duration: 2.65,
    ease: "power1.inOut"
  });
}

function scrollUp() {
  zipDown();
  zipAnimationUp();
  
  // marque();
  gsap.to(window, {
    scrollTo: { 
      y: ".event",
      autoKill: false 
    },
    duration: 2.65,
    ease: "power1.inOut"
  });
}

// 
function zipAnimationDown() {

  let svgStartPositionDown = document.getElementById("svg");
  svgStartPositionDown.style.bottom = "";
  svgStartPositionDown.style.top = "";
    svgStartPositionDown.style.position = "fixed";
    svgStartPositionDown.style.bottom = "100%";
    svgStartPositionDown.style.display = "block"
}
function zipAnimationUp() {
  let svgStartPositionDown = document.getElementById("svg");
  svgStartPositionDown.style.bottom = "";
  svgStartPositionDown.style.top = "";
    svgStartPositionDown.style.position = "fixed";
    svgStartPositionDown.style.bottom = "-100%"; //-200% mDesctop
    svgStartPositionDown.style.display = "block"
}

function zipDown() {
  gsap.to("#svg",
    {
      top: "-50%",
      duration: 5,

      onComplete: function () {
        gsap.set(this.targets(), { clearProps: "all" });
      }
    }
  ),
  gsap.fromTo(".text-path",
  {
    attr: {
      startOffset: "50%"
    },
  },
  {
    attr: {
      startOffset: "-50%"
    },
    duration: 10,
    
    onComplete: function () {
      gsap.set(this.targets(), { clearProps: "all" });
    }
})
};

function zipUp() {
  gsap.to("#svg",
    {
      top: "-100%",
      duration: 5,
      onComplete: function () {
        gsap.set(this.targets(), { clearProps: "all" });
      }
    }
  ),
  gsap.fromTo(".text-path",
  {
    attr: {
      startOffset: "50%"
    },
  },
  {
    attr: {
      startOffset: "-50%"
    },
    duration: 5,
    
})
};

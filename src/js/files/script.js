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



let menu = (".header__burger"),
    menuitem1 = (".menu__item--1"),
    menuitem2 = (".menu__item--2"),
    menuitem3 = (".menu__item--3"),
    curtainLeft = (".header__title_left"),
    curtainRight = (".header__title_right"),
    speed = .15;
    

//instantiate  timeline
let tl = new gsap.timeline({paused:true}); //pause default

// collapse menu
tl.to(menuitem1, speed, {y : 10 , easy : Power4 . in  }, "label--1" ) 
  .to(menuitem3, speed, {y : -10 , easy : Power4 . in  }, "label--1" )

  // rotate all items
  .to(menu, speed, {rotation: -90})

  // move curtain
  .to(curtainLeft, {scaleX:0, transformOrigin:'right center', easy : Power4 . in}, "<" )
  .to(curtainRight, {scaleX:0, transformOrigin:'left center', easy : Power4 . in}, "<" )
  
  // transition burger
  .to(menu, speed, {x : 52 , easy : Power4 . in  })

  //expand menu
  .to(menuitem1, speed, {y : 0 , easy : Power4 . in, backgroundColor: '#be3455'}, "label--2"  )
  .to(menuitem3, speed, {y : 0 , easy : Power4 . in}, "label--2" );

// mouse enter/leave
function burgerCross() {
  gsap.to(menuitem1,
    {
      rotation: 45,
      transformOrigin: "50% 50%",
      x: -3,
      y: 8,
    }
  ),
  gsap.to(menuitem3,
    {
      rotation: -45,
      transformOrigin: "-50% 50%",
      x: 5,
      y: 12,
    }
  ),
  gsap.to (menuitem2,
    {
      opacity: 0,
    }
  )
};

const me1 = document.querySelector(".header__menu");



me1.addEventListener("click", () => {
  if (document.documentElement.classList.contains("menu-open")) {
    me1.addEventListener("mouseenter", () => console.log("88"));
    me1.addEventListener("mouseleave", () => console.log("43543"));
  }

  if (!me1.classList.contains("hahaha")) {
    tl.play();
    zipUp();
    zipAnimationDown(); 
    console.log ('1');
  }  
  else {
    tl.reverse();
    zipDown();
    zipAnimationUp(); 
    console.log ('2');  
  }
});


// if (document.documentElement.classList.contains("menu-open")) {
//   me1.addEventListener("mouseenter", () => console.log("88"));
//   me1.addEventListener("mouseleave", () => console.log("43543"));
// }
// else {
//   console.log("ti pidor")
// };


// /////////////////////////
ScrollTrigger.create (
  {
    // trigger: ".overlay",
    // start: "top center",
    // end: "bottom center",
    // // markers: true,
    // onEnter: () => scrollDown(),
    // onEnterBack: () => scrollUp(),
});
// ///////////////////////////////////////

// gsap.to (window, {

//   scrollTrigger: {
//     scrub: true,
//     trigger: '.overlay',
//     start: "top center",
//     end: "bottom",
//     markers: true,
//   }
// })

////////////////////////////////////////////////

// function openMenu() {
//   if (document.querySelector(".hahaha")) {

//   }
// }
function scrollDown() {
  zipUp();
  zipAnimationDown();

  // gsap.to(window, {
  //   scrollTo: { 
  //     y: ".sets", 
  //     autoKill: false 
  //   },
  //   duration: 2.65,
  //   ease: "power1.inOut"
  // });
}

function scrollUp() {
  zipDown();
  zipAnimationUp();
  
  // gsap.to(window, {
  //   scrollTo: { 
  //     y: ".event",
  //     autoKill: false 
  //   },
  //   duration: 2.65,
  //   ease: "power1.inOut"
  // });
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
    svgStartPositionDown.style.top = "-200%"; //-200% mDesctop
    svgStartPositionDown.style.display = "block"
}

function zipDown() {
  gsap.to("#svg",
    {
      top: "-1000%",
      duration: 3,

      onComplete: function () {
        gsap.set(this.targets(), { clearProps: "all" });
      }
    }
  ),
  gsap.fromTo(".text-path", {
    attr: {
      startOffset: "-50%"
    },
  },
  {
    attr: {
      startOffset: "50%"
    },
    duration: 3,
    
    onComplete: function () {
      gsap.set(this.targets(), { clearProps: "all" });
    }
  })
};

function zipUp() {
  gsap.to("#svg",
    {
      top: "-100%",
      duration: 3,
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
  })  
};


// gsap.to ('#svg', {

//     scrollTrigger: {
//       scrub: 2,
//       trigger: '.overlay',
//       start: "top center",
//       end: "bottom",
//       markers: true,
//     },
//     yPercent: "-50",

//   })



///////////////////////////////////
// function scrollDown() {
//   zipUp();
//   zipAnimationDown();

//   gsap.to(window, {
//     scrollTo: { 
//       y: ".sets", 
//       autoKill: false 
//     },
//     duration: 2.65,
//     ease: "power1.inOut"
//   });
// }

// function scrollUp() {
//   zipDown();
//   zipAnimationUp();
  
//   gsap.to(window, {
//     scrollTo: { 
//       y: ".event",
//       autoKill: false 
//     },
//     duration: 2.65,
//     ease: "power1.inOut"
//   });
// }

// // 
// function zipAnimationDown() {

//   let svgStartPositionDown = document.getElementById("svg");
//   svgStartPositionDown.style.bottom = "";
//   svgStartPositionDown.style.top = "";
//     svgStartPositionDown.style.position = "fixed";
//     svgStartPositionDown.style.bottom = "100%";
//     svgStartPositionDown.style.display = "block"
// }
// function zipAnimationUp() {
//   let svgStartPositionDown = document.getElementById("svg");
//   svgStartPositionDown.style.bottom = "";
//   svgStartPositionDown.style.top = "";
//     svgStartPositionDown.style.position = "fixed";
//     svgStartPositionDown.style.bottom = "0%"; //-200% mDesctop
//     svgStartPositionDown.style.display = "block"
// }

// function zipDown() {
//   gsap.to("#svg",
//     {
//       top: "-50%",
//       duration: 5,

//       onComplete: function () {
//         gsap.set(this.targets(), { clearProps: "all" });
//       }
//     }
//   ),
//   gsap.fromTo(".text-path",
//   {
//     attr: {
//       startOffset: "50%"
//     },
//   },
//   {
//     attr: {
//       startOffset: "-50%"
//     },
//     duration: 10,
    
//     onComplete: function () {
//       gsap.set(this.targets(), { clearProps: "all" });
//     }
// })
// };

// function zipUp() {
//   gsap.to("#svg",
//     {
//       top: "-100%",
//       duration: 5,
//       onComplete: function () {
//         gsap.set(this.targets(), { clearProps: "all" });
//       }
//     }
//   ),
//   gsap.fromTo(".text-path",
//   {
//     attr: {
//       startOffset: "50%"
//     },
//   },
//   {
//     attr: {
//       startOffset: "-50%"
//     },
//     duration: 5,
    
// })
// };

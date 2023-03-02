// Подключение функционала "Чертогов Фрилансера"
import { isMobile, setHash } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
//
// typical import
import { gsap, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
import { Observer } from "gsap/dist/Observer.js";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Observer);

let menu = ".header__burger",
  menuitem1 = ".menu__item--1",
  menuitem2 = ".menu__item--2",
  menuitem3 = ".menu__item--3",
  curtainLeft = ".header__title_left",
  curtainRight = ".header__title_right",
  speed = 0.15;

//instantiate  timeline
let tlb = new gsap.timeline({ paused: true, reverse: true }); //pause default

// collapse menu
tlb.to(menuitem1, speed, { y: 10, easy: Power4.in }, "label--1")
  .to(menuitem3, speed, { y: -10, easy: Power4.in }, "label--1")

  // rotate all items
  .to(menu, speed, { rotation: -90 })

  // move curtain
  .to(
    curtainLeft,
    { scaleX: 0, transformOrigin: "right center", easy: Power4.in },
    "<"
  )
  .to(
    curtainRight,
    { scaleX: 0, transformOrigin: "left center", easy: Power4.in },
    "<"
  )

  // transition burger
  .to(menu, speed, { x: 52, easy: Power4.in })

  //expand menu
  .to(
    menuitem1,
    speed,
    { y: 0, easy: Power4.in, backgroundColor: "#be3455" },
    "label--2"
  )
  .to(menuitem3, speed, { y: 0, easy: Power4.in }, "label--2");

// mouse enter/leave

const me1 = document.querySelector(".header__menu");

me1.addEventListener("click", () => {
  if (!me1.classList.contains("hahaha")) {
    tlb.play();
    zipUp();
    zipAnimationDown();
  } else {
    tlb.reverse();
    zipDown();
    zipAnimationUp();
  }
});

// /////////////////////////
ScrollTrigger.create({
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
  svgStartPositionDown.style.top = "-1000%";
  svgStartPositionDown.style.display = "block";
}
function zipAnimationUp() {
  let svgStartPositionDown = document.getElementById("svg");
  svgStartPositionDown.style.bottom = "";
  svgStartPositionDown.style.top = "";
  svgStartPositionDown.style.position = "fixed";
  svgStartPositionDown.style.top = "-200%"; //-200% mDesctop
  svgStartPositionDown.style.display = "block";
}

function zipDown() {
  gsap.to("#svg", {
    top: "-1000%",
    duration: 3,

    onComplete: function () {
      gsap.set(this.targets(), { clearProps: "all" });
    },
  }),
    gsap.fromTo(
      ".text-path",
      {
        attr: {
          startOffset: "-50%",
        },
      },
      {
        attr: {
          startOffset: "50%",
        },
        duration: 3,

        onComplete: function () {
          gsap.set(this.targets(), { clearProps: "all" });
        },
      }
    );
}

function zipUp() {
  gsap.to("#svg", {
    top: "-150%",
    duration: 3,
    onComplete: function () {
      gsap.set(this.targets(), { clearProps: "all" });
    },
  }),
    gsap.fromTo(
      ".text-path",
      {
        attr: {
          startOffset: "50%",
        },
      },
      {
        attr: {
          startOffset: "-50%",
        },
        duration: 10,
      }
    );
}

// /////////////////////////////////////////////// invite marquee
function horizontalLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    }),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
    totalWidth,
    curX,
    distanceToStart,
    distanceToLoop,
    item,
    i;
  gsap.set(items, {
    // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
    xPercent: (i, el) => {
      let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
          gsap.getProperty(el, "xPercent")
      );
      return xPercents[i];
    },
  });
  gsap.set(items, { x: 0 });
  totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth *
      gsap.getProperty(items[length - 1], "scaleX") +
    (parseFloat(config.paddingRight) || 0);
  for (i = 0; i < length; i++) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop =
      distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }
  function toIndex(index, vars) {
    vars = vars || {};
    Math.abs(index - curIndex) > length / 2 &&
      (index += index > curIndex ? -length : length); // always go in the shortest direction
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex) {
      // if we're wrapping the timeline's playhead, make the proper adjustments
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }
  tl.next = (vars) => toIndex(curIndex + 1, vars);
  tl.previous = (vars) => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  tl.progress(1, true).progress(0, true); // pre-render for performance
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  return tl;
}

// const smoother = ScrollSmoother.create({
//   smooth: 2.5,
//   effects: true,
// });

const scrollingText = gsap.utils.toArray(".rail h3");

const tl = horizontalLoop(scrollingText, {
  repeat: -1,
});

Observer.create({
  onChangeY(self) {
    let factor = 1;
    if (self.deltaY < 0) {
      factor = -1;
    }
    gsap
      .timeline({
        defaults: {
          ease: "none",
        },
      })
      .to(tl, { timeScale: factor * 2.5, duration: 0.15 })
      .to(tl, { timeScale: factor * 1, duration: 1 }, "+=0.3");
  },
});

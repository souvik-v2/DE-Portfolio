TweenMax.defaultEase = Linear.easeOut;

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  navigation: true,
  controlArrows: true,
  anchors:['deSec', 'dmSec', 'uiSec', 'logoSec'],
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");
    const tl = new TimelineMax({ delay: 0.5 });
    tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1, ease: Power2.easeInOut });
    if (destination.index === 1) {
      const chairs = document.querySelectorAll(".chair");
      const description = document.querySelector(".description");
      tl.fromTo(chairs, 0.7, { x: "100%" }, { x: "-10%", ease: Power2.easeInOut })
        .fromTo(
          description,
          0.5,
          { opacity: 0, y: "50" },
          { y: "0", opacity: 1, ease: Power2.easeInOut }
        )
        .fromTo(chairs[0], 1, { opacity: 1 }, { opacity: 1 })
        .fromTo(chairs[1], 1, { opacity: 0 }, { opacity: 1 })
        .fromTo(chairs[2], 1, { opacity: 0 }, { opacity: 1 });
    }
    if (destination.index === 3) {
      const btn = document.querySelector(".btn-animation");
      var bgColor = ["red", "green", "blue", "orange", "yellow", "black"];
      btn.addEventListener("mouseover", function(e) {
        console.log(bgColor[randomInteger(0, 5)]);
        tl.fromTo(btn, 0.7, { backgroundColor: bgColor[randomInteger(0, 5)], color: "white" }, { backgroundColor: bgColor[randomInteger(0, 5)], ease: Power2.easeInOut });
      });
    }
  }
});

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// https://colorlib.com/wp/support/pixova-lite/

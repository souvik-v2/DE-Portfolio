var colorArray = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
];

// Initialize TweenMax Js
TweenMax.defaultEase = Linear.easeOut;

// Initialize FullPage JS
new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  navigation: true,
  controlArrows: true,
  anchors: ["deSec", "dmSec", "uiSec", "logoSec"],
  menu: '#menu',
  css3: true,
  easing: 'easeInOutCubic',
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");
    const tl = new TimelineMax({ delay: 0.5 });
    tl.fromTo(
      title,
      0.5,
      { y: "50", opacity: 0 },
      { y: "0", opacity: 1, ease: Power2.easeInOut }
    );
    if (destination.index === 1) {
      const chairs = document.querySelectorAll(".chair");
      const description = document.querySelector(".description");
      tl.fromTo(
        chairs,
        0.7,
        { x: "100%" },
        { x: "-10%", ease: Power2.easeInOut }
      )
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

      btn.addEventListener("mouseover", function (e) {
        pop(e, colorArray[randomInteger(0, colorArray.length - 1)]);
        tl.fromTo(
          btn,
          0.7,
          {
            backgroundColor:
              colorArray[randomInteger(0, colorArray.length - 1)],
            color: "white",
          },
          {
            backgroundColor:
              colorArray[randomInteger(0, colorArray.length - 1)],
            ease: Power2.easeInOut,
          }
        );
      });
    }
  },
});

// Generate Random Number
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate bubbles effect
function pop(e, bgColor) {
  let amount = 30;
  switch (e.target.dataset.type) {
    case "shadow":
    case "line":
      amount = 20;
      break;
  }
  // Quick check if user clicked the button using a keyboard
  if (e.clientX === 0 && e.clientY === 0) {
    const bbox = e.target.getBoundingClientRect();
    const x = bbox.left + bbox.width / 2;
    const y = bbox.top + bbox.height / 2;
    for (let i = 0; i < 30; i++) {
      // We call the function createParticle 30 times
      // We pass the coordinates of the button for x & y values
      createParticle(x, y, e.target.dataset.type);
    }
  } else {
    for (let i = 0; i < amount; i++) {
      createParticle(
        e.clientX,
        e.clientY + window.scrollY,
        e.target.dataset.type,
        bgColor
      );
    }
  }
}

function createParticle(x, y, type, bgColor) {
  const particle = document.createElement("particle");
  document.getElementById("logoSec1").appendChild(particle);
  let width = Math.floor(Math.random() * 30 + 8);
  let height = width;
  let destinationX = (Math.random() - 0.5) * 300;
  let destinationY = (Math.random() - 0.5) * 300;
  let rotation = Math.random() * 520;
  let delay = Math.random() * 200;

  switch (type) {
    case "square":
      particle.style.background = `hsl(${Math.random() * 90 + 270}, 70%, 60%)`;
      particle.style.border = "1px solid white";
      break;
    case "emoji":
      particle.innerHTML = ["❤", "🧡", "💛", "💚", "💙", "💜", "🤎"][
        Math.floor(Math.random() * 7)
      ];
      particle.style.fontSize = `${Math.random() * 24 + 10}px`;
      width = height = "auto";
      break;
    case "mario":
      particle.style.backgroundImage =
        "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/mario-face.png)";
      break;
    case "shadow":
      var color = `hsl(${Math.random() * 90 + 90}, 70%, 50%)`;
      particle.style.boxShadow = `0 0 ${Math.floor(
        Math.random() * 10 + 10
      )}px ${color}`;
      particle.style.background = bgColor;
      particle.style.borderRadius = "50%";
      width = height = Math.random() * 2 + 4;
      break;
    case "line":
      var color = `hsl(${Math.random() * 90 + 90}, 70%, 50%)`;
      particle.style.background = "black";
      height = 1;
      rotation += 1000;
      delay = Math.random() * 1000;
      break;
  }

  particle.style.width = `${width}px`;
  particle.style.height = `${height}px`;
  const animation = particle.animate(
    [
      {
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
        opacity: 1,
      },
      {
        transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${
          y + destinationY
        }px) rotate(${rotation}deg)`,
        opacity: 0,
      },
    ],
    {
      duration: Math.random() * 1000 + 5000,
      easing: "cubic-bezier(0, .9, .57, 1)",
      delay: delay,
    }
  );
  animation.onfinish = removeParticle;
}

function removeParticle(e) {
  e.srcElement.effect.target.remove();
}

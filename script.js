const bgMusic = document.getElementById("bgMusic");
let musicStarted = false;


/* SECTION FLOW */
function openGift() {
  document.getElementById("welcome").classList.add("hidden");
  document.getElementById("letter").classList.remove("hidden");
  startTyping();
  playMusic();
  startSnow();
}

function playMusic() {
  if (!musicStarted) {
    bgMusic.play().catch(() => {});
    musicStarted = true;
  }
}

function nextSection() {
  document.getElementById("letter").classList.add("hidden");
  document.getElementById("reasons").classList.remove("hidden");
}

/* LETTER TYPING */
const letterText = "Dear Katty, I just wanted to remind you how much you are appreciated and your presence, your words, your boolying, and even the little things you do, make a bigger difference than you probably realize tbh. This is just a small way of saying that you really truly matter to me and ur family"

let index = 0;

function startTyping() {
  const el = document.getElementById("typeText");
  if (index < letterText.length) {
    el.innerHTML += letterText.charAt(index);
    index++;
    setTimeout(startTyping, 40);
  }
}

/* REASONS */
const reasons = [
  "You are really an amazing person",
  "You are really kind and prove that humanity is still alive",
  "You helped me a lot during my tough times",
  "You keep smiling even on bad or rough days",
  "You are stronger than you think",
  "You listen carefully when someone tells you something",
  "You forgive others easily",
  "And you genuinely matter",
  "You are literally a strong pillar of your family",
  "You booly me but its fun to get boolied by you",
  "You focus on yourself and treat everyone nicely",
  "You literally care for close ones",
  "You work on yourself for a better purpose",
  "There are many more but these were some of the reasons"
];

let rIndex = 0;

function showReason() {
  const el = document.getElementById("reasonText");
  const btn = document.querySelector("#reasons .btn");

  if (rIndex >= reasons.length) {
    document.getElementById("reasons").classList.add("hidden");
    document.getElementById("final").classList.remove("hidden");
    return;
  }

  el.classList.remove("pop");
  void el.offsetWidth;
  el.innerText = reasons[rIndex];
  el.classList.add("pop");

  rIndex++;

  if (rIndex === reasons.length) {
    btn.innerText = "So, Finally...";
  }
}

/* SNOW (CONTINUOUS & CLEAN) */
function startSnow() {
  setInterval(createSnowflake, 300);
}

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.innerText = "❄";

  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.fontSize = 8 + Math.random() * 18 + "px";
  snowflake.style.opacity = Math.random();
  snowflake.style.animationDuration = 4 + Math.random() * 4 + "s";

  document.body.appendChild(snowflake);

  snowflake.addEventListener("animationend", () => snowflake.remove());
}

/* FINAL LETTER EXPERIENCE */
const finalMessage =
  "So yeah, this is the final piece of the self-made gift lol. Enjoy the video and the Final Wish for you 😊";

let fIndex = 0;

document.getElementById("openFinalGift").onclick = () => {
  document.getElementById("letterBox").classList.remove("hidden");
  typeFinalMessage();
};

function typeFinalMessage() {
  const el = document.getElementById("finalText");
  if (fIndex < finalMessage.length) {
    el.innerHTML += finalMessage.charAt(fIndex);
    fIndex++;
    setTimeout(typeFinalMessage, 40);
  } else {
    setTimeout(playFinalVideo, 2200);
  }
}

function playFinalVideo() {
  const video = document.getElementById("finalVideo");
  const finalText = document.getElementById("finalText");

  /* Fade final text UP */
  finalText.classList.add("fade-up");

  setTimeout(() => {
    finalText.style.display = "none";

    video.classList.remove("hidden");
    video.play().catch(() => {});

    // Fullscreen
    if (video.requestFullscreen) {
      video.requestFullscreen();
    }

    video.onended = () => {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }

      video.classList.add("fade-out");

      setTimeout(() => {
        video.style.display = "none";
        startFinalWishTyping(); // 👈 typewriter start
      }, 1000);
    };
  }, 1000);
}

const finalWishText = "So yeahh, this was my Christmas gift to you, I know its not the best among what you got as gifts this year but I gave my best shot at this in the remaining time. And I wish you & your family the very very very best of the happiness, joy, protection and safety till the next christmas. So yeahh, thank ya soo much for coming to this point and also for being the bestest friend of mine and I pray to have the current or even better blessings and things in my life as they are now and even in the best days to come. On Christmas, People get gifts like anything they want, but God gave you, a bestie, as the Christmas gift to me this year for which I wont be enough thankful to him in this life. Thank you soo much and hope you loved this gift🎄";

let wIndex = 0;
const finalWishEl = document.getElementById("finalWish");

function startFinalWishTyping() {
  finalWishEl.classList.remove("hidden");
  finalWishEl.innerHTML = "";
  wIndex = 0;
  typeFinalWish();
}

function typeFinalWish() {
  if (wIndex < finalWishText.length) {
    finalWishEl.innerHTML += finalWishText.charAt(wIndex);
    wIndex++;
    setTimeout(typeFinalWish, 45);
  } else {
    setTimeout(endExperience, 1500);
  }
}

function endExperience() {
  const finalSection = document.getElementById("final");

  finalSection.classList.add("fade-final");

  setTimeout(() => {
    document.getElementById("thankYouScreen").classList.add("show");
  }, 2000);
}

/* CLOSE */
document.getElementById("closeLetter").onclick = () => {
  document.getElementById("letterBox").classList.add("hidden");
};
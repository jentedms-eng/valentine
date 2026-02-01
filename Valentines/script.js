const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const main = document.getElementById("main");
const yesScreen = document.getElementById("yesScreen");
const taunt = document.getElementById("taunt");

let noHoverCount = 0;

// Move NO button when hovered
noBtn.addEventListener("mouseover", () => {
  noHoverCount++;

  // After taunt has already appeared and hovered again → auto YES
  if (noHoverCount > 8) {
    sayYes();
    return; // stop further movement
  }

  // Move NO button randomly
  const x = Math.random() * 500 - 300;
  const y = Math.random() * 200 - 150;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  // After 5 hovers, show taunt text
  if (noHoverCount === 5) {
    taunt.classList.remove("hidden");
  }
});

// YES action
function sayYes() {
  main.classList.add("hidden");
  yesScreen.classList.remove("hidden");
}

// Click YES
yesBtn.addEventListener("click", sayYes);

// Auto YES after 15 seconds
setTimeout(sayYes, 15000);

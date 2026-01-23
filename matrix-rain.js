const lettersToUse = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let dropPositions = [];

setInterval(() => {
  createRainDrop();
  const emptyTextEl = document.getElementsByClassName("dummy-text");
  for (emptyDrop of emptyTextEl) {
    currText = emptyDrop.innerText;
    randomIndex = Math.floor(Math.random() * lettersToUse.length);
    randomLetter = lettersToUse[randomIndex];
    newText = randomLetter + currText;
    emptyDrop.innerText = newText;
  }

  const dropTextEls = document.getElementsByClassName("drop-text");
  for (drop of dropTextEls) {
    newText = drop.innerText
      .split("")
      .map((letter) => {
        randomIndex = Math.floor(Math.random() * drop.innerText.length);
        return lettersToUse[randomIndex];
      })
      .join("");
    drop.innerText = newText;
  }
}, 150);

// Add new drop to grid with random absolute position
const createRainDrop = () => {
  let windowMod = window.innerWidth % 20;
  let windowWidthDiv = (window.innerWidth - windowMod) / 20;

  if (dropPositions.length < windowWidthDiv) {
    let windowRand = Math.floor(Math.random() * 1 * windowWidthDiv) * 20;
    let count = 0;
    while (dropPositions.includes(windowRand) && count < 10) {
      count++;
      windowRand = Math.floor(Math.random() * 1 * windowWidthDiv) * 20;
    }
    dropPositions.push(windowRand);
    const newDrop = document.createElement("div");
    newDrop.classList.add("drop");

    newDrop.style.left = `${windowRand}px`;
    newDrop.innerHTML = `
    <span class="drop-empty dummy-text">DKFEIEH</span>
    <div class="drop-start-marker">
      <div class="drop-real">
        <span class="drop-empty drop-text">ABDH</span>
        <span class="drop-tail drop-text">ABDUEJHFE</span>
        <span class="drop-middle drop-text">ABDUEJHF</span>
        <span class="drop-head drop-text">ABDUEJHFEL</span>
      </div>
    </div>
  `;
    const grid = document.getElementById("grid");
    grid.appendChild(newDrop);
  }
};

// Clear grid for clarity
// setInterval(() => {
//   const grid = document.getElementById("grid");
//   grid.innerHTML = "";
// }, 10000);

const lettersToUse =
  "A日本語にほんごは「ひらがな」「カタカナ」「ローマ字（じ）」「漢字（かんじ）」を使（つか）って書（か）きます。わたしきんぎょたばことうきょうやそはちですワタシキンギョタバコトーキョーヤソハチデス";
let dropPositions = [];

// Interval to create drops
setInterval(() => {
  createRainDrop();
}, 50);

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
    <div class="drop-real">
      <span class="drop-empty dummy-text data-id="${windowRand}""></span>
      <span class="drop-tail drop-text"></span>
      <span class="drop-head drop-text">ん</span>
    </div>
  `;
    const grid = document.getElementById("grid");
    grid.appendChild(newDrop);

    randomNewLetterSpeed = Math.random() * (3 - 1) + 1;
    setInterval(() => {
      emptyEl = newDrop.getElementsByClassName("drop-empty")[0];

      dropHeadEl = newDrop.getElementsByClassName("drop-head")[0];
      dropTailEl = newDrop.getElementsByClassName("drop-tail")[0];

      dropTailEl.innerText = dropTailEl.innerText + dropHeadEl.innerText;
      randomIndex = Math.floor(Math.random() * lettersToUse.length);
      dropHeadEl.innerText = lettersToUse[randomIndex];
    }, randomNewLetterSpeed * 50);

    randomTimeout = Math.random() * (4 - 2) + 2;
    setTimeout(() => {
      newDrop.classList.add("fade-out");
      dropPositions = dropPositions.filter(
        (position) => position == windowRand,
      );
      setTimeout(() => {
        newDrop.remove();
      }, 1500);
    }, randomTimeout * 1000);
  }
};

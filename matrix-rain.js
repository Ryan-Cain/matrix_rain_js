const lettersToUse = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// console.log(Math.ceil(Math.random() * lettersToUse.length));
setInterval(() => {
  const emptyTextEl = document.getElementsByClassName("dummy-text");
  currText = emptyTextEl[0].innerText;
  randomIndex = Math.floor(Math.random() * lettersToUse.length);
  randomLetter = lettersToUse[randomIndex];
  newText = randomLetter + currText;
  emptyTextEl[0].innerText = newText;

  const dropTextEls = document.getElementsByClassName("drop-text");
  for (drop of dropTextEls) {
    newText = drop.innerText
      .split("")
      .map((letter) => {
        console.log(letter);
        randomIndex = Math.floor(Math.random() * drop.innerText.length);
        return lettersToUse[randomIndex];
      })
      .join("");
    console.log(newText);
    drop.innerText = newText;
  }
}, 150);

import "./styles.css";

function createSimonGame() {
  const colorBtns = Array.from(document.querySelectorAll(".color"));
  const playBtn = document.querySelector(".play");
  const testBtn = document.querySelector(".testing");
  let red = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
  let blue = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
  let yellow = new Audio(
    "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"
  );
  let green = new Audio(
    "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"
  );
  let botPattern = [];
  let botPatternToTest = [];
  let userPattern = [];
  let usercount = 0;
  const simonGameApp = {
    generateColorSequence: () => {
      botPattern.forEach(color => simonGameApp.playBotSequence(color));
      let pickRandomColor = Math.floor(Math.random() * colorBtns.length);
      let currentColor = colorBtns[pickRandomColor].innerHTML;
      botPattern.push(currentColor);
      simonGameApp.playAudio(currentColor);
      console.log(botPattern);
    },
    playBotSequence: color => {
      simonGameApp.playAudio(color);
      // add animation to button
    },
    checkUsersMove: e => {
      let usersMove = e.target.innerHTML;
      userPattern.push(usersMove);
      botPatternToTest = botPattern.slice(0, userPattern.length + 1);
      if (botPatternToTest[counter] !== userPattern[counter]) {
        alert("wrong pattern bruv!! Let me restart the game for you!!!");
        usercount++;
      }
      if (botPattern.length >= userPattern.length) {
        simonGameApp.generateColorSequence;
      }
    },
    playAudio: color => {
      switch (color) {
        case "red":
          red.play();
          break;
        case "blue":
          blue.play();
          break;
        case "yellow":
          yellow.play();
          break;
        case "green":
          green.play();
          break;
      }
    }
  };
  testBtn.addEventListener("click", simonGameApp.generateColorSequence);
  colorBtns.forEach(e =>
    e.addEventListener("click", simonGameApp.checkUsersMove)
  );
  return simonGameApp;
}

const simonGame = createSimonGame();

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
      playBtn.disabled = true;
      simonGameApp.disableBtns;
      let pickRandomColor = Math.floor(Math.random() * colorBtns.length);
      let currentColor = colorBtns[pickRandomColor].innerHTML;
      console.log(currentColor);
      botPattern.push(currentColor);
      // line 28 will play the entire pattern that user has to repeat
      botPattern.forEach(color => simonGameApp.handleColorAnimation(color));
      simonGameApp.enableBtns;
    },
    handleColorAnimation: color => {
      simonGameApp.playAudio(color);
    },
    enableBtns: () => {
      colorBtns.forEach(btn => (btn.disabled = false));
    },
    disableBtns: () => {
      colorBtns.forEach(btn => (btn.disabled = true));
    },

    checkUsersMove: e => {
      let usersMove = e.target.innerHTML;
      userPattern.push(usersMove);
      //botPatternToTest = botPattern.slice(0, userPattern.length);
      if (botPattern[usercount] === userPattern[usercount]) {
        alert("correct pattern, hit next button");
        usercount++;
      }
      if (botPattern.length === userPattern.length) {
        simonGameApp.generateColorSequence();
      }
    },
    playAudio: color => {
      switch (color) {
        case "Red":
          red.play();
          break;
        case "Blue":
          blue.play();
          break;
        case "Yellow":
          yellow.play();
          break;
        case "Green":
          green.play();
          break;
        default:
          console.log("doesnt belong anywhere");
      }
    }
  };
  playBtn.addEventListener("click", simonGameApp.generateColorSequence);
  colorBtns.forEach(e =>
    e.addEventListener("click", simonGameApp.checkUsersMove)
  );
  return simonGameApp;
}

const simonGame = createSimonGame();

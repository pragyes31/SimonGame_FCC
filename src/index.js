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
  let userPattern = [];
  let sequenceCount = 1;
  const simonGameApp = {
    generateColorSequence: () => {
      let pickRandomColor = Math.floor(Math.random() * colorBtns.length);
      let currentColor = colorBtns[pickRandomColor].innerHTML;
      botPattern.push(currentColor);
      simonGameApp.playAudio(currentColor);
      // colorAudio[currentColor].play();
    },
    checkUsersMove: e => {
      userPattern.push(e.target.innerHTML);
      let botPatternToTest = botPattern.slice(0, userPattern.length + 1);
      for (let i = 0; i < userPattern.length; i++) {
        if (botPatternToTest !== userPattern) {
          //alert('wrong pattern bruv!! Let me restart the game for you!!!')
        } else {
          //do something else
        }
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

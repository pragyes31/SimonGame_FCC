import "./styles.css";

function createSimonGame() {
  const colorBtns = Array.from(document.querySelectorAll(".color"));
  const playBtn = document.querySelector(".play");
  const testBtn = document.querySelector(".testing");
  const red = new Audio(
    "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"
  );
  const blue = new Audio(
    "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"
  );
  const yellow = new Audio(
    "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"
  );
  const green = new Audio(
    "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
  );

  let botPattern = [];
  let userPattern = [];
  let sequenceCount = 1;
  const simonGameApp = {
    generateColorSequence: () => {
      let pickRandomColor = Math.floor(Math.random() * colorBtns.length);
      let currentColor = botPattern.push(colorBtns[pickRandomColor].innerHTML);

      // currentColor.play();
      console.log(botPattern);
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
    }
  };
  playBtn.addEventListener("click", simonGameApp.generateColorSequence);
  colorBtns.forEach(e =>
    e.addEventListener("click", simonGameApp.checkUsersMove)
  );
  return simonGameApp;
}

const simonGame = createSimonGame();

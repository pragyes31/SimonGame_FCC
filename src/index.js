import "./styles.css";

function createSimonGame() {
  const colorBtns = Array.from(document.querySelectorAll(".color"));
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

  const simonsMove = [];
  let sequenceCount = 1;
  const simonGameApp = {
    generateColorSequence: () => {
      let pickRandomColor = Math.floor(Math.random() * colorBtns.length);
      let currentColor = simonsMove.push(colorBtns[pickRandomColor].innerHTML);
      sequenceCount++;
      currentColor.play();
      console.log(simonsMove);
    }
  };
  testBtn.addEventListener("click", simonGameApp.generateColorSequence);
  return simonGameApp;
}

const simonGame = createSimonGame();

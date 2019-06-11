import "./styles.css";

function buildSimonGame() {
  const soundBtns = Array.from(document.querySelectorAll(".color"));
  const playBtn = document.querySelector(".play");
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
    "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"
  );
  let gameParams = {
    botPattern: [],
    userPattern: [],
    gameLevel: 0
  };
  const simonGameApp = {
    enableBtns: btns => {
      btns.forEach(btn => (btn.disabled = false));
    },
    disableBtns: btns => {
      btns.forEach(btn => (btn.disabled = true));
    },
    startGame: () => {
      simonGameApp.enableBtns(soundBtns);
      //playBtn.disabled = true;
      let pickRandomColor = Math.floor(Math.random() * soundBtns.length);
      let currentColor = soundBtns[pickRandomColor].innerHTML;
      gameParams.botPattern.push(currentColor);
      console.log(gameParams.botPattern);
      gameParams.botPattern.forEach(color => {
        let showMoves = setInterval(() => {
          if (
            gameParams.botPattern.indexOf(color) >=
            gameParams.botPattern.length - 1
          ) {
            clearInterval(showMoves);
          }
          simonGameApp.playAudio(color);
          //gameParams.sounds.color.play();
        }, 1000);
      });
    },
    playAudio: color => {
      setTimeout(() => {
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
      }, 2000);
    }
  };
  simonGameApp.disableBtns(soundBtns);
  playBtn.addEventListener("click", () => {
    simonGameApp.startGame();
  });
}

const simonGame = new buildSimonGame();

// import "./styles.css";

// function createSimonGame() {
//   const colorBtns = Array.from(document.querySelectorAll(".color"));
//   const playBtn = document.querySelector(".play");
//   const testBtn = document.querySelector(".testing");
//   let red = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
//   let blue = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
//   let yellow = new Audio(
//     "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"
//   );
//   let green = new Audio(
//     "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"
//   );
//   let botPattern = [];
//   let userPattern = [];
//   let usercount = 0;
//   const simonGameApp = {
//     generateColorSequence: () => {
//       playBtn.disabled = true;
//       simonGameApp.disableBtns;
//       let pickRandomColor = Math.floor(Math.random() * colorBtns.length);
//       let currentColor = colorBtns[pickRandomColor].innerHTML;
//       //console.log(currentColor);
//       botPattern.push(currentColor);
//       console.log(botPattern);

//       // below line will play the entire pattern that user has to repeat
//       botPattern.forEach(color => {
//         simonGameApp.playAudio(color);
//       });
//       //simonGameApp.enableBtns;
//     },
//     handleSound: color => {
//       simonGameApp.playAudio(color);
//     },
//     enableBtns: () => {
//       colorBtns.forEach(btn => (btn.disabled = false));
//     },
//     disableBtns: () => {
//       colorBtns.forEach(btn => (btn.disabled = true));
//     },

//     checkUsersMove: e => {
//       let usersMove = e.target.innerHTML;
//       console.log(usersMove);
//       userPattern.push(usersMove);
//       //botPatternToTest = botPattern.slice(0, userPattern.length);
//       if (botPattern[usercount] === userPattern[usercount]) {
//         usercount++;
//       } else {
//         alert("wrong pattern");
//       }
//     },
//     playAudio: color => {
//       setTimeout(() => {
//         switch (color) {
//           case "Red":
//             red.play();
//             break;
//           case "Blue":
//             blue.play();
//             break;
//           case "Yellow":
//             yellow.play();
//             break;
//           case "Green":
//             green.play();
//             break;
//           default:
//             console.log("doesnt belong anywhere");
//         }
//       }, 2000);
//     }
//   };
//   //playBtn.addEventListener("click", simonGameApp.generateColorSequence);
//   // colorBtns.forEach(e =>
//   //   e.addEventListener("click", simonGameApp.checkUsersMove)
//   // );
//   testBtn.addEventListener("click", simonGameApp.generateColorSequence);
//   return simonGameApp;
// }

// const simonGame = createSimonGame();

// const sounds = [
//   "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
//   "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",
//   "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"
// ];

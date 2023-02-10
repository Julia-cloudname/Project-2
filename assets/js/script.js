/**
 * Function display dice in random order, used Fisher-Yates shuffle algorithm
 * to randomly shuffle the elements in the "boxes" array
 */
function displayRandomOrder() {
    let boxes = [
      document.getElementById("box1"),
      document.getElementById("box2"),
      document.getElementById("box3"),
      document.getElementById("box4"),
      document.getElementById("box5"),
      document.getElementById("box6")
    ];
    
    for (let i = boxes.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [boxes[i], boxes[j]] = [boxes[j], boxes[i]];
    }

    for (let i = 0; i < boxes.length; i++) {
        document.querySelector(".dice-area").appendChild(boxes[i]);
    }
      
  }
//   Addition EventListener to buttom Roll
  const rollBtn = document.querySelector('.btn[data-type="submit"]');
  rollBtn.addEventListener("click", displayRandomOrder);
    
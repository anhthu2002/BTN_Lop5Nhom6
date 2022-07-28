localStorage.setItem("turn", true);
const boxs = document.querySelectorAll(".caro_item");
const draw = true;
let count = 0;
const pointTemp = prompt("Nhập điểm bạn muốn chơi");
const point = +pointTemp;
console.log("point", point);
let pagination_item = 0;
const pagination = document.querySelector(".pagination");
const handleUpdateTitle = () => {
  if (pagination_item <= point) {
    if (point === 0) {
      pagination.textContent = `Ván 0 / ${point}`;
    } else {
      pagination.textContent = `Ván ${pagination_item + 1} / ${point}`;
    }
  }
};
handleUpdateTitle();
const blue_score = document.querySelector(".blue_score");
const red_score = document.querySelector(".red_score");
const btn_reset = document.getElementById("btn_reset");
const btn_complete = document.querySelector("#btn_complete>span");
const handleOppenDialogBox = (message) => {
  const overlay = document.querySelector(".overlay_wraper");
  overlay.style.display = "flex";
  const messageEl = document.querySelector(".player_message");
  messageEl.textContent = message;
};
const handleResetGame = () => {
  localStorage.setItem("turn", true);
  boxs.forEach((item) => {
    item.classList.remove("blue");
    item.classList.remove("red");
  });

  count = 0;
};
const handleYouWinOrNot = (player = "", indexChoose) => {
  switch (indexChoose) {
    case 0: {
      // trường hợp win theo đường ngang
      if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 1].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 2].classList.value.search(player) !== -1
      ) {
        return player;

        // win theo chiều dọc
      } else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 3].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 6].classList.value.search(player) !== -1
      ) {
        return player;
        // win theo đường chéo
      } else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 4].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 8].classList.value.search(player) !== -1
      ) {
        return player;
      }
      break;
    }
    case 1: {
      // win theo hàng ngang
      if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 1].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 1].classList.value.search(player) !== -1
      ) {
        return player;
      }
      //win theo hàng dọc
      else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 3].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 6].classList.value.search(player) !== -1
      ) {
        return player;
      }
      break;
    }
    case 2: {
      // win theo hàng ngang
      if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 1].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 2].classList.value.search(player) !== -1
      ) {
        return player;
      }
      //win theo hàng dọc
      else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 3].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 6].classList.value.search(player) !== -1
      ) {
        return player;
      }
      // win theo đường chéo
      else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 2].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 4].classList.value.search(player) !== -1
      ) {
        return player;
      }
      break;
    }
    case 3: {
      if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 3].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 3].classList.value.search(player) !== -1
      ) {
        return player;
      }
      //
      else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 1].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 2].classList.value.search(player) !== -1
      ) {
        return player;
      }
      break;
    }
    case 4: {
      // win theo hàng ngang
      if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 1].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 1].classList.value.search(player) !== -1
      ) {
        return player;
      }
      // win theo hàng dọc
      else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 3].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 3].classList.value.search(player) !== -1
      ) {
        return player;
      }
      // win theo đường chéo bên trái
      else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 4].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 4].classList.value.search(player) !== -1
      ) {
        return player;
      }
      // win theo đường chéo bên phải
      else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 2].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 2].classList.value.search(player) !== -1
      ) {
        return player;
      }
      break;
    }
    case 5: {
      // win theo hàng ngang
      if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 1].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 2].classList.value.search(player) !== -1
      ) {
        return player;
      }
      //win theo hàng dọc
      else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 3].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 3].classList.value.search(player) !== -1
      ) {
        return player;
      }

      break;
    }
    case 6: {
      // win theo hàng ngang
      if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 1].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 2].classList.value.search(player) !== -1
      ) {
        return player;
      }
      // win theo hàng dọc
      else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 3].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 6].classList.value.search(player) !== -1
      ) {
        return player;
      }
      // win theo đường chéo
      else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 2].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 4].classList.value.search(player) !== -1
      ) {
        return player;
      }
      break;
    }
    case 7: {
      // win theo hàng ngang
      if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 1].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 1].classList.value.search(player) !== -1
      ) {
        return player;
      }
      // win theo hàng dọc
      else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 3].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 6].classList.value.search(player) !== -1
      ) {
        return player;
      }
      break;
    }
    case 8: {
      // win theo hàng ngang
      if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 1].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 2].classList.value.search(player) !== -1
      ) {
        return player;
      }
      // win theo hàng dọc
      else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 3].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 6].classList.value.search(player) !== -1
      ) {
        return player;
      }
      // win theo đường chéo
      else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 4].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 8].classList.value.search(player) !== -1
      ) {
        return player;
      }
      break;
    }

    default: {
      break;
    }
  }
  return "";
const handleCheckWin = () => {
  const blue_scoreTemp = +blue_score.textContent;
  const red_scoreTemp = +red_score.textContent;
  const pointWin = Number.parseInt(point / 2 + 1);
  if (pagination_item === point) {
    console.log("Vao");
    if (blue_scoreTemp > red_scoreTemp) {
      alert("X đã chiến thắng chung cuộc");
      window.location.reload();
    } else if (red_scoreTemp > blue_scoreTemp) {
      alert("O đã chiến thắng chung cuộc");
      window.location.reload();
    } else {
      alert("Hai bạn đã hòa nhau");
      window.location.reload();
    }
  } else {
    if (blue_scoreTemp === pointWin) {
      alert("X đã chiến thắng chung cuộc");
      window.location.reload();
    } else if (red_scoreTemp === pointWin) {
      alert("O đã chiến thắng chung cuộc");
      window.location.reload();
    }
  }
  console.log("handleCheckWin", pagination_item);
};
boxs.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (pagination_item <= point && point !== 0) {
      const checkLength = item.classList.length;
      let x = "";
      if (checkLength === 1) {
        const turn = JSON.parse(localStorage.getItem("turn"));
        if (turn) {
          item.classList.add("blue");
          localStorage.setItem("turn", false);
          x = handleYouWinOrNot("blue", index);
        } else {
          item.classList.add("red");
          localStorage.setItem("turn", true);
          x = handleYouWinOrNot("red", index);
        }
        if (x) {
          handleOppenDialogBox(
            `Người chiến thắng là ${x === "blue" ? "X" : "O"}`
          );
          if (x === "blue") {
            let point_blue = +blue_score.textContent;
            blue_score.textContent = point_blue + 1;
          } else {
            let point_red = +red_score.textContent;
            red_score.textContent = point_red + 1;
          }
        }
        count++;
      } else {
        alert("Vui long cho o khac");
      }
      if (count === boxs.length && !x) {
        handleOppenDialogBox("Hai bạn đã hòa nhau");
      }
    } else {
      alert("Các bạn đã hết lượt đánh. Vui lòng F5 để thực hiện lại từ đầu.");
    }
  });
});


btn_complete.addEventListener("click", () => {
  const overlay = document.querySelector(".overlay_wraper");
  overlay.style.display = "none";
  handleResetGame();

  pagination_item++;
  handleCheckWin();
  console.log("pagination_item", pagination_item);
  handleUpdateTitle(point, pagination_item);
});


btn_reset.addEventListener("click", () => {
  window.location.reload();
});
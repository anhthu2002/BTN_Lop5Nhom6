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

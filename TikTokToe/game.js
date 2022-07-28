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

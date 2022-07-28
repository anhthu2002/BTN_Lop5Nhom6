case 6: {
      if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 1].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 2].classList.value.search(player) !== -1
      ) {
        return player;
      }
      else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 3].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 6].classList.value.search(player) !== -1
      ) {
        return player;
      }
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
      if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose + 1].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 1].classList.value.search(player) !== -1
      ) {
        return player;
      }
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
      if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 1].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 2].classList.value.search(player) !== -1
      ) {
        return player;
      }
      else if (
        boxs[indexChoose].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 3].classList.value.search(player) !== -1 &&
        boxs[indexChoose - 6].classList.value.search(player) !== -1
      ) {
        return player;
      }
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
};
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

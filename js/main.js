//show add card
const showAddCard = document.querySelectorAll(".addCard");
showAddCard.forEach(function (show) {
  show.addEventListener("click", function () {
    show.style.display = "none";

    const addCardInfo = this.parentElement.querySelector(".addCardInfo");
    addCardInfo.style.display = "flex";

    const createCard = this.parentElement.querySelector(".createCard");
    createCard.style.display = "flex";
  });
});
//hide add card
const hideAddcard = document.querySelectorAll(".cancelBtn");
hideAddcard.forEach(function (hide) {
  hide.addEventListener("click", function () {
    const addCardInfo = this.closest(".box").querySelector(".addCardInfo");
    addCardInfo.style.display = "none";

    const createCard = this.closest(".box").querySelector(".createCard");
    createCard.style.display = "none";

    const addCard = this.closest(".box").querySelector(".addCard");
    addCard.style.display = "flex";
  });
});

// Create card
const createBtn = document.querySelectorAll(".createBtn");
createBtn.forEach(function (create) {
  create.addEventListener("click", function () {
    const textContent = this.closest(".box").querySelector(".areaBox");
    const trimmedValue = textContent.value.trim();

    if (trimmedValue !== "") {
      const cardsBox = this.closest(".box").querySelector(".cardsBox");
      const newList = document.createElement("div");
      newList.className = "card";
      newList.textContent = trimmedValue;
      cardsBox.appendChild(newList);

      const moveBtn = document.createElement("div");
      moveBtn.className = "edit";
      newList.appendChild(moveBtn);

      const moveBtnimg = document.createElement("img");
      const removeBtn = document.createElement("img");
      moveBtnimg.src = "img/arrow.svg";
      removeBtn.src = "img/cancel.svg";

      moveBtn.appendChild(moveBtnimg);
      moveBtn.appendChild(removeBtn);

      removeBtn.addEventListener("click", function () {
        cardsBox.removeChild(newList);
      });

      textContent.value = "";
    } else {
      const createCardDiv = this.closest(".box").querySelector(".createCard");
      const addCardDiv = this.closest(".box").querySelector(".addCard");
      const addCardInfo = this.closest(".box").querySelector(".addCardInfo");

      addCardInfo.style.display = "none";
      createCardDiv.style.display = "none";
      addCardDiv.style.display = "flex";
    }
  });
});

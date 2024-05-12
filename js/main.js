//show add card
const showAddCard = document.querySelectorAll(".addCard");
showAddCard.forEach(function (show) {
  show.addEventListener("click", function () {
    show.style.display = "none";

    const addCardInfo = this.parentElement.querySelector(".addCardInfo");
    addCardInfo.style.display = "flex";

    const createCard = this.parentElement.querySelector(".createCard");
    createCard.style.display = "flex";
    console.log("add card");
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

      const cardMan = document.createElement("div");
      cardMan.className = "edit";
      newList.appendChild(cardMan);

      const moveBtn = document.createElement("img");
      const removeBtn = document.createElement("img");
      moveBtn.src = "img/arrow.svg";
      removeBtn.src = "img/cancel.svg";

      cardMan.appendChild(moveBtn);
      cardMan.appendChild(removeBtn);

      const moveOptionsbox = document.createElement("div");
      moveOptionsbox.className = "moveOptions";
      newList.appendChild(moveOptionsbox);

      const moveOptions1 = document.createElement("p");
      const moveOptions2 = document.createElement("p");
      const moveOptions3 = document.createElement("p");
      moveOptions1.textContent = "To Do";
      moveOptions2.textContent = "Doing";
      moveOptions3.textContent = "Done";
      moveOptionsbox.appendChild(moveOptions1);
      moveOptionsbox.appendChild(moveOptions2);
      moveOptionsbox.appendChild(moveOptions3);
      textContent.value = "";

      // Remove card
      removeBtn.addEventListener("click", function () {
        const card = this.closest(".card");
        const cardsBox = card.closest(".cardsBox");
        cardsBox.removeChild(card);
      });

      //move card show
      moveBtn.addEventListener("click", function () {
        moveOptionsbox.classList.toggle("block");
      });
      // move card hide

      // move to "to do"
      moveOptions1.addEventListener("click", function () {
        const sourceBox = this.closest(".container");
        const destinationBox = document.querySelector(".todoCont");
        const card = this.closest(".card");

        sourceBox.querySelector(".cardsBox").removeChild(card);
        destinationBox.querySelector(".cardsBox").appendChild(card);

        moveOptionsbox.classList.toggle("block");
      });

      // move to "doing"
      moveOptions2.addEventListener("click", function () {
        const sourceBox = this.closest(".container");
        const destinationBox = document.querySelector(".doingCont");
        const card = this.closest(".card");

        sourceBox.querySelector(".cardsBox").removeChild(card);
        destinationBox.querySelector(".cardsBox").appendChild(card);

        moveOptionsbox.classList.toggle("block");
      });

      //move to "done"
      moveOptions3.addEventListener("click", function () {
        const sourceBox = this.closest(".container");
        const destinationBox = document.querySelector(".doneCont");
        const card = this.closest(".card");

        sourceBox.querySelector(".cardsBox").removeChild(card);
        destinationBox.querySelector(".cardsBox").appendChild(card);

        moveOptionsbox.classList.toggle("block");
      });
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

// create list

const createListCont = document.querySelector(".addlistCont");
const createListBox = document.querySelector(".addlistbox");
const cancelListBtn = document.querySelector(".cancellistBtn");
const createListBtn = document.querySelector(".listBtn");
createListCont.addEventListener("click", function () {
  createListCont.style.display = "none";
  createListBox.style.display = "flex";
});
cancelListBtn.addEventListener("click", function () {
  createListCont.style.display = "flex";
  createListBox.style.display = "none";
});
createListBtn.addEventListener("click", function () {
  const newListTitle = document.querySelector(".listTitle").value;
  // create section
  const mainCont = document.querySelector(".main");
  const newlistSection = document.createElement("section");
  newlistSection.className = "container";
  mainCont.appendChild(newlistSection);

  // create box
  const newBox = document.createElement("div");
  newBox.className = "box";
  newlistSection.appendChild(newBox);

  // create title
  const newTitle = document.createElement("div");
  newTitle.className = "title";
  newBox.appendChild(newTitle);
  const titleSpan = document.createElement("span");
  titleSpan.textContent = newListTitle;
  newTitle.appendChild(titleSpan);

  // create cards column
  const cardsBox = document.createElement("div");
  cardsBox.className = "cardsBox";
  newBox.appendChild(cardsBox);

  // create add card
  const addCard = document.createElement("div");
  addCard.className = "addCard";
  newBox.appendChild(addCard);

  const addCardImg = document.createElement("img");
  addCardImg.src = "img/plus.svg";
  addCard.appendChild(addCardImg);

  const addCardSpan = document.createElement("span");
  addCardSpan.textContent = "Add a card";
  addCard.appendChild(addCardSpan);

  // create create card
  const createCard = document.createElement("div");
  createCard.className = "createCard";
  newBox.appendChild(createCard);

  const createBtn = document.createElement("button");
  createBtn.className = "createBtn";
  createBtn.textContent = "Add card";
  createCard.appendChild(createBtn);
  // console.log(mainCont);
  createListCont.style.display = "flex";
  createListBox.style.display = "none";
});

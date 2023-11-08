/* categories select sort row and column item */
function preventDefault(select) {
    const items = document.querySelectorAll("#item");
    const cardCols = document.querySelectorAll("#card-col");
    deleteSetItem(items);
    deleteCardCol(cardCols);
    if (select == "row") {
      setImageRow();
      addSetItem(items);
    } else if (select == "column") {
      setCardCol(cardCols);
      setImageColumn();
    }
  }
  function setImageRow() {
    const images = document.querySelectorAll(".card-img-item");
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove("image-item");
      images[i].classList.add("img-fluid");
    }
  }
  function setImageColumn() {
    const images = document.querySelectorAll(".card-img-item");
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove("img-fluid");
      images[i].classList.add("image-item");
    }
  }
  function deleteSetItem(items) {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("col-lg-4");
      items[i].classList.remove("col-md-6");
    }
  }
  function addSetItem(items) {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.add("col-lg-4");
      items[i].classList.add("col-md-6");
    }
  }
  function setCardCol(cardCols) {
    for (let i = 0; i < cardCols.length; i++) {
      cardCols[i].classList.add("col-md-6");
    }
  }
  function deleteCardCol(cardCols) {
    for (let i = 0; i < cardCols.length; i++) {
      cardCols[i].classList.remove("col-md-6");
    }
  }
  
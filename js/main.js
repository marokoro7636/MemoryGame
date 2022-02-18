let field = document.getElementById("field");

for (let i = 0; i < DECK_NUM; i++) {
    let cardField = document.createElement("div");
    let cardImg = document.createElement("img");

    cardField.className = "cardField";

    cardImg.src = CARD_BACK;
    cardImg.width = CARD_WIDTH;
    cardImg.height = CARD_HEIGHT;
    cardImg.num = deck[i][0];
    cardImg.idx = i;
    cardImg.onclick = onClick;

    cardField.appendChild(cardImg);
    field.appendChild(cardField);
}
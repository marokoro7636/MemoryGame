function imgPathGet(num, mark) {
    let pathNum = ('000' + String(num)).slice(-2);
    return "img/card_" + mark + "_" + pathNum + ".png";
}

function cardShuffle(deck) {
    for (let i = deck.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck
}


function onClick(e) {
    let cardImg = e.target;

    if (isFirst) {
        firstCard.src = CARD_BACK;
        secondCard.src = CARD_BACK;
        if (firstCard.num === secondCard.num) {
            firstCard.remove();
            secondCard.remove();
        }

        firstCard = cardImg;
        isFirst = false;
        firstCard.src = imgPathGet(deck[firstCard.idx][0], deck[firstCard.idx][1]);
    } else {
        if (cardImg.idx === firstCard.idx) {
            return;
        }
        secondCard = cardImg;
        isFirst = true;
        secondCard.src = imgPathGet(deck[secondCard.idx][0], deck[secondCard.idx][1]);

    }
}

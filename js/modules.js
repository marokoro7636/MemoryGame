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
    let card = e.target;
    if(timer_id !== -1) {
        clearTimeout(timer_id);
        judge();
    }

    if (!firstCard) {
        firstCard = card;
        firstCard.src = imgPathGet(deck[firstCard.idx][0], deck[firstCard.idx][1]);
    } else {
        if (card.idx === firstCard.idx) {
            return;
        }
        secondCard = card;
        secondCard.src = imgPathGet(deck[secondCard.idx][0], deck[secondCard.idx][1]);
        timer_id = setTimeout(judge, 1000);
    }
}

function judge() {
    if (firstCard.num === secondCard.num) {
        firstCard.remove();
        secondCard.remove();

        clearCards += 2;
        if(clearCards === DECK_NUM) {
            clearText.innerHTML = "Clear!";
        }
    } else {
        firstCard.src = CARD_BACK;
        secondCard.src = CARD_BACK;
    }
    firstCard = null;
    secondCard = null;
    timer_id = -1;
}
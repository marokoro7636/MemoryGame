const cards = [];
for (let j = 0; j < CARD_NUM; j++) {
    cards.push([j+1, MARK_SPADE]);
    cards.push([j+1, MARK_CLUB]);
    cards.push([j+1, MARK_HEART]);
    cards.push([j+1, MARK_DIAMOND]);
}
const deck = cardShuffle(cards);

let firstCard={num:-1}, secondCard={num:-2};
let isFirst = true;
const cards = [];
for (let i = 0; i < CARD_NUM; i++) {
    for (let j = 0; j < difficulty*2; j++) {
        cards.push([i + 1, mark[j]]);
    }
}
const deck = cardShuffle(cards);

let firstCard = null, secondCard = null;

let timer_id = -1;

let clearCards = 0;
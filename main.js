const cardArray = [
{
rank: 'queen',
flower: 'hearts',
cardImage: "/Users/user/Downloads/wdi-fundamentals-memorygame-master/memory-game/images/queen-of-hearts.png"
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: "/Users/user/Downloads/wdi-fundamentals-memorygame-master/memory-game/images/queen-of-diamonds.png"
},
{
rank: 'king',
suit: 'hearts',
cardImage: "/Users/user/Downloads/wdi-fundamentals-memorygame-master/memory-game/images/king-of-hearts.png"
},
{
rank: 'king',
suit: 'diamonds',
cardImage: "/Users/user/Downloads/wdi-fundamentals-memorygame-master/memory-game/images/king-of-diamonds.png"
}
];
let cardsInPlay = []


if (cardArray.length === 2)
	if (cardsInPlay[0] === cardsinPlay[2])
		alert("You found a match!")
	else 
		alert("Sorry, try again.");
	;

function checkForMatch ()
	{if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
};

	function flipCard (cardId) 
	{console.log("User flipped " + cardArray[cardId].rank)
};

flipCard(0);
flipCard(2);
checkForMatch();

cardsInPlay.push(cardArray.rank)

console.log(cardArray.cardImage)
console.log(cardArray.suit)

function createBoard ()
	for (let i=0; i <cardArray.length; i++){
		
	}
const characterSelect = document.getElementById('characterSelect');
// Game Logic
// User selects character by clicking desired card element
// Selected card element is moved to User side of Arena
// User must select another character to battle
// User clicks opponent by clicking desired card element
// Selected card element is moved to opponent side of Arena
// Battle ensues when User clicks attack button
// Each button click Users selected character will attack selected opponents health
// Each button click Users selected character attack daamage increases by its base value
// Each button click opponent counter attacks
// Each counter attack damages Users selected characters health
// If opponent dies, then User must select another opponent to attack, else game over
// User selects new opponent by clicking on desired card elemenmt
// If there are no more opponent to select, then User wins and game is over.

// Data
// all characters are created cards and pushed to availableCharacters
// availableCharacters maps card to character select div
// uses .map() and appendChild()
const availableCharacters = [];
// Characters whose totalHealth drops at or below 50
// character is pushed to graveyard array
// graveyard array is maps each card to graveyard div
// uses .map() and appendChild()
const graveyard = [];

// User selected character and user selected opponent data will be set here
// WIll probably need to be a constructor as well
// const arena = {
//   player: character,
//   opponent: character,
// };

// Each character will be put inside a card html element containing these properties as inner elements
// Constructs a card Object that i will use to popuate an HTML Card
class Card {
  constructor(id, title, image, stats) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.stats = stats;
  }
}
// List of characters array
const allCharacters = [
  {
    id: 0,
    name: 'Obi-Wan Kenobi',
    image: './images/Obi-Wan Kenobi.jpg',
    stats: {
      totalHealth: 150,
      attackDamage: 8,
      counterAttackDamage: 12,
    },
  },
  {
    id: 1,
    name: 'Anakin Skywalker',
    image: './images/Anakin Skywalker.jpg',
    stats: {
      totalHealth: 175,
      attackDamage: 10,
      counterAttackDamage: 10,
    },
  },
  {
    id: 2,
    name: 'Darth Maul',
    image: './images/Darth Maul.jpg',
    stats: {
      totalHealth: 125,
      attackDamage: 4,
      counterAttackDamage: 15,
    },
  },
  {
    id: 3,
    name: 'Darth Sidious',
    image: './images/Darth Sidious.jpg',
    stats: {
      totalHealth: 100,
      attackDamage: 5,
      counterAttackDamage: 10,
    },
  },
];
// Need to figure out how to create cards and put appropriate data for each card
// loop through allCharacters
const createCard = (char, i) => {
  const characterCard = new Card(i, char.name, char.image, char.stats);
  return availableCharacters.push(characterCard);
};
// i think i need to rethink how i looping through my allCharacters array. this doesnt seem right
// i want to create a card for every character in the array
// is this the right way to do it tho?
const characterCard = allCharacters.map(createCard);
// Characters with 0 hp
console.log(`Graveyard: ${graveyard}`);
// Basically our characters DB
console.log(`All Characters: ${allCharacters}`);
// Characters that havent been selected yet
// console.log(`Available Characters: ${availableCharacters}`);

const populateCharacterSelect = availableCharacters.map((Card) => {
  let id, image, stats, title;
  ({ id, image, stats, title } = {
    id: Card.id,
    image: Card.image,
    stats: Card.stats,
    title: Card.title,
  });
  const cardDiv = document.createElement('div');
  cardDiv.id = id;
  cardDiv.innerHTML = `
    <h1>${title}</h1>
    <img src="${image}">
  <div>
    <p id="totalHealth">Total Health: ${stats.totalHealth}</p>
    <p id="attackDamage">Atatck Damage: ${stats.attackDamage}</p>
    <p id="counterAttaclDamage">Counter Attack Damage: ${stats.counterAttackDamage}</p>
  </div>
  `;
  return characterSelect.appendChild(cardDiv);
});

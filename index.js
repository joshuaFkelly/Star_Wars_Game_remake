const characterSelectDiv = document.getElementById('characterSelect');
const userDiv = document.getElementById('user');
const compDiv = document.getElementById('comp');
const attackBtn = document.getElementById('attack');
// // Game Logic
// // User selects character by clicking desired card element
// // Selected card element is moved to User side of Arena
// // User must select another character to battle
// // User clicks opponent by clicking desired card element
// // Selected card element is moved to opponent side of Arena
// // Battle ensues when User clicks attack button
// // Each button click Users selected character will attack selected opponents health
// // Each button click Users selected character attack daamage increases by its base value
// // Each button click opponent counter attacks
// // Each counter attack damages Users selected characters health
// // If opponent dies, then User must select another opponent to attack, else game over
// // User selects new opponent by clicking on desired card elemenmt
// // If there are no more opponent to select, then User wins and game is over.

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
    inBattle: false,
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
    inBattle: false,
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
    inBattle: false,
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
    inBattle: false,
  },
];

// Each character will be put inside a card html element containing these properties as inner elements
// Constructs a card Object that i will use to popuate an HTML Card
class Card {
  constructor(id, title, image, stats) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.stats = stats;
    this.inBattle = false;
  }
}

// callback for creating cards for each element inside allCharacters array
const createCard = (char, i) => {
  const characterCard = new Card(
    i,
    char.name,
    char.image,
    char.stats,
    char.inBattle
  );
  return characterCard;
};

// console.log('Character Cards Array:', characterCards);
const availableCharacters = [];

// Maps through allCharacters and createsa new Card for each, saving them all to this characterCardsreference
const characterCards = allCharacters.map(createCard);

// Create a Card Div for each character
const createCardELem = (Card) => {
  // Create div element
  const cardDiv = document.createElement('div');
  // set id to card.id
  cardDiv.id = Card.id;
  // set class to character
  cardDiv.className = 'character';
  // create innerHtml
  cardDiv.innerHTML = `     
        <h2 class = "cardTitle"> ${Card.title}</h2>
        <img class="image" src ="${Card.image}">
        <div class = "stats">
          <p class = "stat"> Health: ${Card.stats.totalHealth} </p>
          <p class = "stat">  Attack Damage: ${Card.stats.attackDamage} </p>
          <p class = "stat"> Counter Attack Damage: ${Card.stats.counterAttackDamage} </p>
        </div>
  `;
  // Conditions for how to arrange card divs and card data
  if (!Card.inBattle) {
    availableCharacters.push(Card);
    characterSelectDiv.appendChild(cardDiv);
  }

  // Event listener to change organization of moving els in the dom and data inside objects/arrays
  cardDiv.addEventListener('click', () => {
    // Condiiton to prepare a card for battle! Only 2 characters allowed in the arena at a time!!
    if (!Card.inBattle && arena.length < 2) {
      // prepare for battle!!
      Card.inBattle = true;
      // Find clicked Card inside avaialable characters array
      const index = availableCharacters.indexOf(Card);
      // If a match is made...
      if (index > -1) {
        availableCharacters.splice(index, 1);
        arena.push(Card);
      }
      // Select your character!!
      if (!userDiv.hasChildNodes()) {
        userDiv.appendChild(cardDiv);
      }
      // Select your opponent!!
      else {
        compDiv.appendChild(cardDiv);
      }
    }
  });
  return cardDiv;
};

// Array of all character cards made in to Elements
const cardElements = characterCards.map(createCardELem);

// Arena array is declared but empty. Filled with cards that clicked on by user
const arena = [];

// Callback to attack button event listener
const attackLogic = () => {
  const user = arena[0];
  const comp = arena[1];
  // Destructure user/comp object
  ({
    userId,
    userAttackDamage,
    userTotalHealth,
    compCounterAttackDamage,
    compTotalHealth,
  } = {
    userId: user.id,
    userAttackDamage: user.stats.attackDamage,
    userTotalHealth: user.stats.totalHealth,
    compCounterAttackDamage: comp.stats.counterAttackDamage,
    compTotalHealth: comp.stats.totalHealth,
  });
  // console.log(arena);
  // console.log('User Attack: ', userAttackDamage);
  // console.log('User Total Health: ', userTotalHealth);
  // console.log('Comp Counter Attack: ', compCounterAttackDamage);
  // console.log('Comp Total Health: ', compTotalHealth);
  // console.log(arena);
  // console.log(characterCards);
  // console.log(userId);
  const userIndex = characterCards.indexOf(arena[0]);
  const compIndex = characterCards.indexOf(arena[1]);

  // on click user attacks comp
  characterCards[compIndex].stats.totalHealth =
    compTotalHealth - userAttackDamage;
  console.log(characterCards[compIndex].stats.totalHealth);

  // comp counter attacks
  characterCards[userIndex].stats.totalHealth =
    userTotalHealth - compCounterAttackDamage;
  console.log(characterCards[userIndex].stats.totalHealth);

  // if userTotalHealth <= 0 gameOver
  // if compTotalHealth <= 0 move comp to graveyard, user selects another opponent
  // if available characters array length is === 0 user wins, display game over menu
};
const attack = (health, attackDmg) => health - attackDmg;
// Attack button event listener
attackBtn.addEventListener('click', attackLogic);

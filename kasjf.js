const characterSelectEl = document.getElementById("characterSelect");
const userDiv = document.getElementById("user");
const compDiv = document.getElementById("comp");
const attackBtn = document.getElementById("attack");
const graveyardDiv = document.getElementById("graveyard");
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
    name: "Obi-Wan Kenobi",
    image: "./images/Obi-Wan Kenobi.jpg",
    stats: {
      totalHealth: 185,
      attackDamage: 8,
      counterAttackDamage: 13,
    },
    inBattle: false,
  },
  {
    id: 1,
    name: "Anakin Skywalker",
    image: "./images/Anakin Skywalker.jpg",
    stats: {
      totalHealth: 195,
      attackDamage: 10,
      counterAttackDamage: 11,
    },
    inBattle: false,
  },
  {
    id: 2,
    name: "Darth Maul",
    image: "./images/Darth Maul.jpg",
    stats: {
      totalHealth: 190,
      attackDamage: 9,
      counterAttackDamage: 12,
    },
    inBattle: false,
  },
  {
    id: 3,
    name: "Darth Sidious",
    image: "./images/Darth Sidious.jpg",
    stats: {
      totalHealth: 180,
      attackDamage: 5,
      counterAttackDamage: 14,
    },
    inBattle: false,
  },
];

// here we will create a character class that matches the allCharacters array
class Card {
  constructor(character) {
    this.character = character
    this.name = character.name
    this.image = character.image;
    this.totalHealth = character.totalHealth;
    this.attackDamage = character.attackDamage;
    this.counterAttackDamage = character.counterAttackDamage;
    this.inBattle = character.inBattle;
  }

  // create HTML Element for this Card
  createCardEl() {
    const card = document.createElement("div");

    card.id = this.name.replace(" ", "_")

    card.className = "characterCard"

    card.addEventListener("click", () => {
      console.log(`This the ${this.name} card!`);
    });

    card.innerHTML = `     
        <h2 class = "cardTitle"> ${this.name}</h2>

        <img class="cardImage" src ="${this.image}">
        
        <div class = "stats">
            <p class= "stat health"> Health: ${this.totalHealth}</p>
            <p class = "stat attackDamage">  Attack Damage: ${this.attackDamage} </p>
            <p class= "stat counterAttackDamage"> Counter Attack Damage: ${this.counterAttackDamage} </p>
        </div>
    `;
    return card;
  }
}

class Character {
  constructor(
    name,
    image,
    totalHealth,
    attackDamage,
    counterAttackDamage,
    inBattle = false
  ) {
    this.name = name;
    this.image = image;
    this.totalHealth = totalHealth;
    this.attackDamage = attackDamage;
    this.counterAttackDamage = counterAttackDamage;
    this.inBattle = inBattle;
  }
}

class Stats extends Character {
  constructor(totalHealth, attackDamage, counterAttackDamage, inBattle) {
    super(totalHealth, attackDamage, counterAttackDamage, inBattle);
    this.totalHealth = totalHealth;
    this.attackDamage = attackDamage;
    this.counterAttackDamage = counterAttackDamage;
    this.inBattle = inBattle;
  }
  //   Getters
  get totalHealth() {
    return this.totalHealth;
  }
  get attackDamage() {
    return this.attackDamage;
  }
  get counterAttackDamage() {
    return this.counterAttackDamage;
  }
  get inBattle() {
    return this.inBattle;
  }

  //   Setters
  set totalHealth(totalHealth) {
    return (this.totalHealth = totalHealth);
  }
  set attackDamage(attackDamage) {
    return (this.attackDamage = attackDamage);
  }
  set counterAttackDamage(counterAttackDamage) {
    return (this.counterAttackDamage = counterAttackDamage);
  }
  set inBattle(availability) {
    return (this.inBattle = availability);
  }
}

// Obi-Wan Kenobi
const obi = new Character("Obi-Wan Kenobi", "./images/obi-wan_kenobi.jpg", 185, 8, 13);
console.log("Obi: ", obi);

const obiCard = new Card(obi);
characterSelectEl.appendChild(obiCard.createCardEl())

// Darth Maul
const darthMaul = new Character("Darth Maul", "./images/darth_maul.jpg", 185, 8, 13);
console.log("Darth Maul: ", darthMaul);

const darthMaulCard = new Card(darthMaul);
characterSelectEl.appendChild(darthMaulCard.createCardEl())

// Annakin Skywalker
const annakinSkywalker = new Character("Anakin Skywalker", "./images/anakin_skywalker.jpg", 185, 8, 13);
console.log("Anakin Skywalker: ", annakinSkywalker);

const annakinSkywalkerCard = new Card(annakinSkywalker);
characterSelectEl.appendChild(annakinSkywalkerCard.createCardEl())

// Emperor Palpatine
const emperorPalpatine = new Character("Emperor Palpatine", "./images/emperor_palpatine.jpg", 185, 8, 13);
console.log("Emporer Palpatine: ", emperorPalpatine);

const emperorPalpatineCard = new Card(emperorPalpatine);
characterSelectEl.appendChild(emperorPalpatineCard.createCardEl())

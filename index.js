const characterSelect = document.getElementById('characterSelect');
const heroDiv = document.getElementById('hero');
const villainDiv = document.getElementById('villain');
const iimagesArr = [
  './images/Anakin Skywalker.jpg',
  './images/Darth Maul.jpg',
  './images/Darth Sidious.jpg',
  './images/Obi-Wan Kenobi.jpg',
];
class Card {
  constructor() {
    const image = new Image(150, 150);
    // image.src=
  }
  createCard() {
    const characterCard = document.createElement('div');
    characterCard.className = 'character';
    characterCard.innerHTML = `
            <h1> ${this.name}</h1>
      <img src="./images/Star_Wars_Logo.jpg">
    <h3> Health Points: ${this.healthPoints} </h3>
    <h3> Attack Points: ${this.attackPoints} </h3>
    <h3> Counter Attack Points: ${this.counterAttackPoints} </h3>
    `;
    characterCard.addEventListener('click', () => {
      if (!heroDiv.hasChildNodes()) {
        heroDiv.appendChild(characterCard);
      } else {
        villainDiv.appendChild(characterCard);
      }
    });
    characterSelect.appendChild(characterCard);
  }
}

// class Player {
//   constructor(id, name, healthPoints, attackPoints, counterAttackPoints) {
//     this.id = id;
//     this.name = name;
//     this.healthPoints = healthPoints;
//     this.attackPoints = attackPoints;
//     this.counterAttackPoints = counterAttackPoints;
//   }

//   attack(player) {
//     let newHealth = player.healthPoints - this.attackPoints;
//     player.healthPoints = newHealth;
//     return newHealth;
//   }
// }

// const playerOne = new Player(1, 'Obi-Wan Kenobi', 150, 10, 12);

// const playerTwo = new Player(2, 'Darth Maul', 125, 8, 14);

// const playerThree = new Player(3, 'Darth Sidious', 100, 15, 15);

// const playerFour = new Player(4, 'Anakin Skywalker', 175, 5, 10);

// const players = [playerOne, playerTwo, playerThree, playerFour];
// console.log(players);
// players.forEach((player) => player.createCard());
// console.log(playerOne.attack(playerThree));
// console.log(playerOne.attack(playerThree));
// console.log(playerOne.attack(playerThree));

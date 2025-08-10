const pokemon = require('./data.js');

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
};

// Log Pokémon data
console.dir(pokemon, { maxArrayLength: null });
console.log(game);

// Exercise 3 – Assign difficulty to each Pokémon
pokemon.forEach(pokemon => {
  if (pokemon.hp < 50) {
    pokemon.difficulty = 'Easy';
  } else if (pokemon.hp >= 50 && pokemon.hp <= 80) {
    pokemon.difficulty = 'Medium';
  } else {
    pokemon.difficulty = 'Hard';
  }
});

// Exercise 4 – Add starter Pokémon to party
let starterPokemon = pokemon.find(pokemon => pokemon.starter === true);
game.party.push(starterPokemon);

// Exercise 5 – Add 3 more Pokémon
let additionalPokemon = [
  pokemon.find(pokemon => pokemon.type === 'fire'),
  pokemon.find(pokemon => pokemon.hp >= 60),
  pokemon.find(pokemon => pokemon.type === 'water')
];
game.party.push(...additionalPokemon);

// Exercise 6 – Complete gyms with difficulty < 3
game.gyms.forEach(gym => {
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
});
console.log(game.gyms);

// Exercise 7 – Evolve the starter Pokémon
let evolvedPokemon;
if (starterPokemon.name === 'Bulbasaur') {
  evolvedPokemon = pokemon.find(pokemon => pokemon.number === 2);
} else if (starterPokemon.name === 'Charmander') {
  evolvedPokemon = pokemon.find(pokemon => pokemon.number === 5);
} else if (starterPokemon.name === 'Squirtle') {
  evolvedPokemon = pokemon.find(pokemon => pokemon.number === 8);
} else if (starterPokemon.name === 'Pikachu') {
  evolvedPokemon = pokemon.find(pokemon => pokemon.number === 26);
}
game.party.splice(game.party.indexOf(starterPokemon), 1, evolvedPokemon);
console.log(game.party);

// Exercise 8 – Print names of all Pokémon in party
game.party.forEach(pokemon => {
  console.log(pokemon.name);
});

// Exercise 9 – Print all starter Pokémon
pokemon
  .filter(pokemon => pokemon.starter === true)
  .forEach(starter => {
    console.log(starter.name);
  });

// Exercise 10 – Add catchPokemon method
game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
};

let pokemonToCatch = pokemon[0]; 
game.catchPokemon(pokemonToCatch);

// Exercise 11 – Improve catchPokemon to decrease pokeballs
game.catchPokemon = function(pokemonObj) {
  if (!this.party.includes(pokemonObj)) {
    this.party.push(pokemonObj);

    let pokeballItem = this.items.find(item => item.name === 'pokeball');
    if (pokeballItem) {
      pokeballItem.quantity -= 1;
    }
  } else {
    console.log(`${pokemonObj.name} is already in the party.`);
  }
};

pokemonToCatch = pokemon[1];
game.catchPokemon(pokemonToCatch);
console.log(game.items);

// Exercise 12 – Complete gyms with difficulty < 6
game.gyms.forEach(gym => {
  if (gym.difficulty < 6) {
    gym.completed = true;
  }
});
console.log(game.gyms);

// Exercise 13 – Add gymStatus method
game.gymStatus = function() {
  const gymTally = {
    completed: 0,
    incomplete: 0
  };

  this.gyms.forEach(gym => {
    if (gym.completed) {
      gymTally.completed += 1;
    } else {
      gymTally.incomplete += 1;
    }
  });

  console.log(gymTally);
};

game.gymStatus();

// Exercise 14 – Add partyCount method
game.partyCount = function() {
  return this.party.length;
};

console.log(game.partyCount());

// Exercise 15 – Complete gyms with difficulty < 8
game.gyms.forEach(gym => {
  if (gym.difficulty < 8) {
    gym.completed = true;
  }
});
console.log(game.gyms);

// Exercise 16 – Log final game object
console.log(game);

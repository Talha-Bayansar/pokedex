//speciale teken => ``

// queryselectors
const pokemonGrid = document.querySelector(".grid_pokemons");

// constants

const pokemonCount = 151;
const url = "https://pokeapi.co/api/v2/pokemon/";
const urlImg = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png";

const colors = {
    grass: "rgb(32, 64, 0, 0.75)",
    fire: "rgb(248, 12, 14, 0.75)",
    water: "rgb(8, 81, 122, 0.75)",
    normal: "rgb(172, 169, 114, 0.75)",
    flying: "rgb(8, 87, 100, 0.75)",
    bug: "rgb(145, 186, 46, 0.75)",
    poison: "rgb(97, 19, 128, 0.75)",
    electric: "rgb(191, 172, 33, 0.75)",
    ground: "rgb(150, 145, 1, 0.75)",
    fighting: "rgb(128, 11, 17, 0.75)",
    psychic: "rgb(138, 5, 50, 0.75)",
    rock: "rgb(71, 64, 38, 0.75)",
    ice: "rgb(16, 61, 67, 0.75)",
    ghost: "rgb(71, 43, 83, 0.75)",
    dragon: "rgb(41, 3, 106, 0.75)",
    dark: "rgb(45, 34, 28, 0.75)",
    steel: "rgb(69, 69, 69, 0.75)",
    fairy: "rgb(249, 124, 166, 0.75)",
}

// variables


//functions

async function getPokemon(id) {
    const response = await fetch(url + id);
    const pokemon = await response.json();
    createPokemonCard(pokemon);

}

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemonCount; i++) {
        await getPokemon(i);
    }
}

fetchPokemons();

const createPokemonCard = (pokemon) => {
    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add("card_pokemon");
    const types = pokemon.types.map(t => {
        return t.type.name;
    });
    let color = pokemon.types[0].type.name;
    pokemonCard.style.backgroundColor = colors[color];


    if (types.length === 1) {
        pokemonCard.innerHTML = `
        <h4 class="card_title">${pokemon.name}</h4>
        <div class="pokemon_types">
            <span class="pokemon_type type__1" style="background: ${colors[color]};">${pokemon.types[0].type.name}</span>
        </div>
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id.toString().padStart(3, "0")}.png" alt="${pokemon.name}">
        `;
    } else {
        pokemonCard.innerHTML = `
        <h4 class="card_title">${pokemon.name}</h4>
        <div class="pokemon_types">
            <span class="pokemon_type type__1" style="background: ${colors[color]};">${pokemon.types[0].type.name}</span>
            <span class="pokemon_type type_2" style="background: ${colors[color]};">${pokemon.types[1].type.name}</span>
        </div>
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id.toString().padStart(3, "0")}.png" alt="${pokemon.name}">
        `;
    }

    /*     const pokemonType = document.querySelector(".pokemon_type");
        pokemonType.style.backgroundColor = colors[color]; */

    pokemonGrid.appendChild(pokemonCard);
}

//eventlisteners

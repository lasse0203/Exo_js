import post from "./Post.js";

const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const pokemonImage = document.getElementById("pokemonImage");
const pokemonName = document.getElementById("pokemonName");
const pokemonTypes = document.getElementById("pokemonTypes");
const pokemonHeight = document.getElementById("pokemonHeight");
const pokemonWeight = document.getElementById("pokemonWeight");
const abilitiesList = document.getElementById("abilities");

const baseURL = "https://pokeapi.co/api/v2/pokemon/";
let currentPokemonId = 1; 

async function getPokemonData(pokemonNameOrId) {
    try {
        const response = await fetch(baseURL + pokemonNameOrId);
        if (!response.ok) {
            throw new Error('Pokemon not found');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}


const pokemonNameOrId = ""; 
getPokemonData(pokemonNameOrId)
    .then((pokemonData) => {
        console.log(pokemonData);

        updatePokemonDetails(pokemonData);
    })
    .catch((error) => {
        console.error(error);
    });


function updatePokemonDetails(data) {
    pokemonImage.src = data.sprites.front_default;
    pokemonName.textContent = data.name;
    const types = data.types.map((type) => type.type.name);
    pokemonTypes.textContent = types.join(", ");
    pokemonHeight.textContent = data.height;
    pokemonWeight.textContent = data.weight;
    abilitiesList.textContent = data.abilities.map(ability => ability.ability.name).join("ability1,ability2");
}


searchForm.addEventListener("submit", async (e) => {
    e.preventDefault(); 

    const searchValue = searchInput.value.trim();
    if (searchValue) {
        try {
            const pokemonData = await getPokemonData(searchValue);
            currentPokemonId = pokemonData.id; 
            updatePokemonDetails(pokemonData);
        } catch (error) {
            console.error(error);
        }
    }
});


prevButton.addEventListener("click", async () => {
    if (currentPokemonId > 1) {
        currentPokemonId--;
        try {
            const pokemonData = await getPokemonData(currentPokemonId);
            updatePokemonDetails(pokemonData);
        } catch (error) {
            console.error(error);
        }
    }
});


nextButton.addEventListener("click", async () => {
    if (currentPokemonId < 1027) {
        currentPokemonId++;
        try {
            const pokemonData = await getPokemonData(currentPokemonId);
            updatePokemonDetails(pokemonData);
        } catch (error) {
            console.error(error);
        }
    }
});

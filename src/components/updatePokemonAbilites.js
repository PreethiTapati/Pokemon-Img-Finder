import createAbilities from  './createPokemonAbilities.js'

const updatePokemon = (pokemonData) => {
    const container = document.getElementById('container');
    // update name
    const title = document.getElementById('name');
    title.innerText = pokemonData.name;

    // update img
    const image = document.getElementById('img');
    image.src = pokemonData.sprites.back_default;
    image.alt = `${pokemonData.name} Image`;
    image.id = 'img';

     // Clear previous abilities
    const abilitiesContainer = document.getElementById('ability-list');
    abilitiesContainer.innerHTML = ''; 

    const abilitiesList = createAbilities(pokemonData.abilities);
    abilitiesContainer.appendChild(abilitiesList);

    return container;
};
export default updatePokemon;




  



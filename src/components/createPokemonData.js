import createAbilities from './createPokemonAbilities.js';

const createPokemon = (pokemonData) => {
    // container
    const container = document.createElement('div');
    container.className = 'pokemon-container';
    container.id = 'container';

    // Create h2 for pokemon name
    const title = document.createElement('h2');
    title.innerText = pokemonData.name;
    title.id = 'name';

    // Create img for pokemon image
    const image = document.createElement('img');
    image.src = pokemonData.sprites.back_default;
    image.alt = `${pokemonData.name} Image`;
    image.id = 'img';

    // Create h3 for the abilities
    const abilitiesHeader = document.createElement('h3');
    abilitiesHeader.innerText = 'Abilities:';
    const abilities = createAbilities(pokemonData.abilities);

    container.append(title, image, abilitiesHeader, abilities);
    return container;
};

export default createPokemon;

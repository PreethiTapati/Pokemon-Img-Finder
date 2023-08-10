import dom from '../dom.js';
import data from '../data.js';
import getPokemonId from '../../apis/fetchPokemonData.js';
import createPokemon from '../components/createPokemonData.js';
import updatePokemon from '../components/updatePokemonAbilites.js';

const getPokemonHandler = async () => {
  
    const pokemonExist = document.getElementById('container');

    const pokemonId = Number(dom.searchBar.value);
 
    if (pokemonId === data.id) {
        return;
    }
    
  
    if (Number.isNaN(pokemonId) || pokemonId <= 0) {
        data.id = null;
        dom.error.innerText = 'please enter pokemon id';
        dom.root.append(dom.error);
        if (pokemonExist !== null) {
            pokemonExist.remove();
        }
        return;
    }

    const dataPokemonId = await getPokemonId(pokemonId);

    if (!dataPokemonId) {
        dom.error.innerText = 'please enter pokemon id';
        dom.root.append(dom.error);
        if (pokemonExist !== null) {
            pokemonExist.remove();
        }
        return;
    }

    dom.error.remove();

    if (!pokemonExist) {
        const pokemonDom = createPokemon(dataPokemonId);
        dom.root.append(pokemonDom);
    } else {
        updatePokemon (dataPokemonId);
    }
    data.id = pokemonId;
};
export default getPokemonHandler;

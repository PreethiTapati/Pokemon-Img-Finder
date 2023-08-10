import dom from '../dom.js';
import getPokemonHandler from '../handlers/getPokemonHandler.js';

const getPokemonListener = () => {
    dom.searchButton.addEventListener('click', getPokemonHandler);

    dom.searchBar.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            getPokemonHandler();
        }
    });
};

export default getPokemonListener;

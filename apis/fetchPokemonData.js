const getPokemonId = async (id) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${res.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        return;
    }
};
export default getPokemonId;

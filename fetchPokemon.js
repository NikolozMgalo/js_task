/**
 * Fetches and logs the weight of a Pokémon by its ID or name.
 * @param {number|string} info - The Pokémon's ID (number) or name (string).
 * @returns {Promise<void>} A promise that resolves when the Pokémon data is fetched and logged.
 * @throws {Error} If the fetch request fails or the Pokémon is not found.
 */
const getPokemon = async (info) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${info}`);
        if(!response.ok) throw new Error(`Error ${response.statusText}`);

        const data = await response.json();
        console.log(`The weight of pokemon ${data.name} is ${data.weight}`)
    } catch (error) {
        console.error(error)
    }
}

getPokemon('Pikachu');

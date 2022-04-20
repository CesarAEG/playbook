import Pokemon from './pokemon.js'

test('1) Create a new object pokemon', () => {
  const myPokemon = new Pokemon('Pikachu', 'Electric', 15);
  expect(myPokemon.name).toBe('Pikachu'); // Corrige esta prueba
});
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemons/thunks";

const PokemonApp = () => {
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span> {pokemonState.isLoading ? "Loading" : "Done"}</span>
      <ul>
        {pokemonState.pokemons.map((pokemon) => {
          return <li key={pokemon.name}>{pokemon.name}</li>;
        })}
      </ul>

      <button
        disabled={pokemonState.isLoading}
        onClick={() => {
          dispatch(getPokemons(pokemonState.page));
        }}
      >
        Next Page
      </button>
    </>
  );
};

export default PokemonApp;

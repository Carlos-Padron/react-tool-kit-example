import { pokemonAPI } from "../../../api/pokemonApi"
import { setPokemons, startLoadginPokemon } from "./pokemonSlice"

export const getPokemons = (page = 0) => {

    return async (dispatch, getState) => {
        dispatch(startLoadginPokemon())
        // 
        const { data } = await pokemonAPI.get(`/pokemon?limit=10&offset=${page * 10}`)

        console.log(data);

        dispatch(setPokemons({ pokemons: data.results, page: page + 1 }))
    }

}
import axios from "axios";

const client = axios.create({
    baseURL: "https://pokedex-jgabriele.vercel.app/",
});

export default {
    getPokemon() {
        return client.get("pokemons.json");
    },

    getTypes() {
        return client.get("types.json")
    }
};


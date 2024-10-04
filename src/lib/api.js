import axios from "axios";

const client = axios.create({
    baseURL: "https://file.notion.so/f/f/cabb3a88-2e2d-4113-a7fd-1e5d0ebd235a/",
});

export default {

    getPokemon() {
        return client.get("/2e13b180-be26-4f9d-bd97-e5e6abd7c25e/pokemons.json?table=block&id=c6db3a96-81a3-4eb9-95a2-35e6b72a9e7b&spaceId=cabb3a88-2e2d-4113-a7fd-1e5d0ebd235a&expirationTimestamp=1728115200000&signature=6iw4yv4MTkfQX4OdltWf9gEbeEjJh9ilQuRy56GliV4&downloadName=pokemons.json");
    },

    getTypes() {
        return client.get("29fd780f-17e7-4ff3-937c-8da8446bb6b0/types.json?table=block&id=9f8d6891-804c-486d-a6cb-d0166848b3c0&spaceId=cabb3a88-2e2d-4113-a7fd-1e5d0ebd235a&expirationTimestamp=1728115200000&signature=xGajBxMo4kdalK573BErF5nQWf5W4hmkBTb4b0XNSik&downloadName=types.json\n")

    }

};


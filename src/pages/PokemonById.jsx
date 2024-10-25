import {useParams} from "react-router-dom";
import PokemonDetail from "../components/PokemonDetail.jsx";


const PokemonById = () => {

    const pokemonId = useParams().pokemonId;
    return (
        <>
            <PokemonDetail pokemonId={pokemonId}/>
        </>
    );
};

export default PokemonById;
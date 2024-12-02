import { useContext } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { PokemonContext, ChangeLanguageContext, TypesContext } from "@/context/PokemonContext";
import LazyImage from "@/utils/LazyImage";
import { Badge } from "@/components/ui/badge";
import PokeBall from "@/assets/pokeball.gif";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const PokemonDetail = ({ pokemonId }) => {
    const listPokemon = useContext(PokemonContext);
    const { language } = useContext(ChangeLanguageContext);
    const { types } = useContext(TypesContext);
    const typesArray = Object.values(types);

    const pokemon = listPokemon.find(pokemon => pokemon.id === parseInt(pokemonId));

    if (!pokemon) {
        return <p>Pokémon non trouvé</p>;
    }

    return (
        <main>
            <div className={"mt-12 flex flex-wrap justify-center"}>
                <Card
                    className="w-[320px] h-[460px] flex items-center flex-col m-8 outline outline-[10px] outline-border"
                    key={pokemon.id}
                >
                    <CardHeader className={"w-full text-center"}>
                        <div className={"w-full flex justify-between items-center"}>
                            <CardTitle className={"text-lg"}>{pokemon.names[language]}</CardTitle>
                            <CardDescription>No.{pokemon.id}</CardDescription>
                        </div>
                    </CardHeader>

                    <CardContent className={"flex flex-col justify-center items-center"}>
                        <LazyImage
                            placeholderSrc={PokeBall}
                            placeholderClassName={"w-[200px] h-[200px]"}
                            src={pokemon.image}
                            alt={pokemon.names[language]}
                            className={"w-[200px] h-[200px]"}
                        />

                        <div className={"w-full flex justify-between items-center"}>
                            <div className={'flex gap-5'}>
                                <p>{pokemon.height / 10}m</p>
                                <p>{pokemon.weight / 10}kg</p>
                            </div>

                            <Dialog>
                                <DialogTrigger>Moves</DialogTrigger>
                                <DialogContent className={"h-[600px] overflow-auto"}>
                                    <DialogHeader>
                                        <DialogTitle>Pokemon Moves</DialogTitle>
                                        <DialogDescription className={"flex flex-col"}>
                                            {pokemon.moves.map((move, index) => (
                                                <span key={index}>{move}</span>
                                            ))}
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </div>

                        <div className={"flex gap-2 mt-12"}>
                            {pokemon.types.map((type, index) => {
                                const typeInfo = typesArray.find(
                                    (t) => t?.translations?.en?.toLowerCase() === type.toLowerCase()
                                );
                                const color = typeInfo ? typeInfo.backgroundColor : "gray";
                                const translatedType = typeInfo ? typeInfo.translations[language] : type;
                                return (
                                    <Badge key={index} style={{ backgroundColor: color }}>
                                        {translatedType}
                                    </Badge>
                                );
                            })}
                        </div>

                    </CardContent>
                </Card>
            </div>
        </main>
    );
};

export default PokemonDetail;
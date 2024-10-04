import {useContext, useEffect} from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {PokemonContext, SearchContext, ChangeLanguageContext, TypesContext} from "@/context/PokemonContext";
import LazyImage from "@/utils/LazyImage";
import PokeBall from "@/assets/pokeball.gif";
import {Badge} from "@/components/ui/badge"


const PokemonCard = () => {
    const listPokemon = useContext(PokemonContext);
    const search = useContext(SearchContext);
    const {language} = useContext(ChangeLanguageContext);
    const types = useContext(TypesContext);
    const typesArray = Object.values(types);

    return (
        <main>
            <div className={"mt-12 flex flex-wrap justify-center"}>
                {listPokemon
                    .filter((pokemon) => {
                        const name = pokemon.names?.[language];
                        return name && name.toLowerCase().includes(search.query.toLowerCase());
                    })
                    .slice(0, 10)
                    .map((pokemon) => {
                        return (
                            <Card
                                className={"w-[250px] h-[300px] flex justify-center items-center flex-col m-5"}
                                key={pokemon.id}
                            >
                                <CardHeader className={"w-full text-center"}>
                                    <div className={"w-full flex justify-start"}>
                                        <CardDescription>No.{pokemon.id}</CardDescription>
                                    </div>
                                    <CardTitle>{pokemon.names[language]}</CardTitle>
                                </CardHeader>
                                <CardContent className={"flex flex-col justify-center items-center"}>
                                    <LazyImage
                                        placeholderSrc={PokeBall}
                                        placeholderClassName={"w-[150px] h-[150px]"}
                                        src={pokemon.image}
                                        alt={pokemon.names[language]}
                                        className={"w-[150px] h-[150px]"}
                                    />

                                    <div className={"flex gap-2"}>
                                        {pokemon.types.map((type, index) => {
                                            const typeInfo = typesArray.find((t) => t.translations.en.toLowerCase() === type.toLowerCase());
                                            const color = typeInfo ? typeInfo.backgroundColor : "gray";
                                            const translatedType = typeInfo ? typeInfo.translations[language] : type;
                                            return (
                                                <Badge key={index}
                                                       style={{backgroundColor: color}}>{translatedType}</Badge>
                                            );
                                        })}

                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
            </div>
        </main>
    );
};

export default PokemonCard;
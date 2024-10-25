import {useContext} from "react";
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
import {Link} from "react-router-dom";


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

                    .slice(0, 50)
                    .map((pokemon) => {
                        return (
                            <Card
                                className="w-[320px] h-[460px] flex items-center justify-between flex-col m-8 outline outline-[10px] outline-border"
                                key={pokemon.id}
                            >
                                <Link to={`/pokemon/${pokemon.id}`} className={"w-full text-center h-full"}>
                                    <CardHeader>
                                        <div className={"w-full flex justify-between items-center"}>
                                            <CardTitle className={"text-lg"}>{pokemon.names[language]}</CardTitle>
                                            <CardDescription>No.{pokemon.id}</CardDescription>
                                        </div>
                                    </CardHeader>

                                    <CardContent className={"flex flex-col justify-center items-center "}>
                                            <LazyImage
                                            placeholderSrc={PokeBall}
                                            placeholderClassName={"w-[200px] h-[200px]"}
                                            src={pokemon.image}
                                            alt={pokemon.names[language]}
                                            className={"w-[200px] h-[200px]"}
                                        />



                                    <div className={"flex gap-2 mt-12"}>
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
                                </Link>
                            </Card>
                        );
                    })}
            </div>
        </main>
    );
};

export default PokemonCard;
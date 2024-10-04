import {useContext} from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {PokemonContext, SearchContext, ChangeLanguageContext} from "@/context/PokemonContext"

const PokemonCard = () => {
    const listPokemon = useContext(PokemonContext)
    const search = useContext(SearchContext)
    const {language} = useContext(ChangeLanguageContext)

    return (
        <main>
            <div className={"mt-12 flex flex-wrap justify-center"}>
                {
                    listPokemon.filter((pokemon) => {
                        const name = pokemon.names[language]
                        return name && name.toLowerCase().includes(search.query.toLowerCase())
                    }).slice(0, 10).map((pokemon) => {
                        return (
                            <Card className={"w-[200px] h-[250px] flex justify-center items-center flex-col m-5"}
                                  key={pokemon.id}>
                                <CardHeader className={"w-full text-center"}>
                                    <div className={"w-full flex justify-start"}>
                                        <CardDescription>No.{pokemon.id} </CardDescription>
                                    </div>
                                    <CardTitle>{pokemon.names[language]}</CardTitle>
                                </CardHeader>
                                <CardContent className={"flex flex-col justify-center items-center"}>
                                    <img src={pokemon.image} alt={pokemon.names[language]}/>
                                    {pokemon.types.map((type, index) => (
                                        <p key={index}>{type}</p>
                                    ))}

                                </CardContent>
                            </Card>
                        )
                    })

                }
            </div>
        </main>

    );
};

export default PokemonCard;
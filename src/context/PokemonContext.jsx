import {createContext, useState, useEffect} from "react";
import client from "@/utils/api";

const PokemonContext = createContext([]);
const SearchContext = createContext({
    query: "",
});
const ChangeLanguageContext = createContext({
    language: "fr",
});
const TypesContext = createContext({
    types: [],
    selectedType: null,
    setSelectedType: () => {},
});

export const PokemonProvider = ({children}) => {
    const [listPokemon, setListPokemon] = useState([]);
    const [query, setQuery] = useState(localStorage.getItem("query") || "");
    const [language, setLanguage] = useState(localStorage.getItem("language") || "fr");
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState(null);

    useEffect(() => {
        client.getPokemon().then((response) => {
            setListPokemon(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    useEffect(() => {
        client.getTypes().then((response) => {
            setTypes(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    return (
        <PokemonContext.Provider value={listPokemon}>
            <TypesContext.Provider value={{ types, selectedType, setSelectedType }}>
                <SearchContext.Provider value={{query, setQuery}}>
                    <ChangeLanguageContext.Provider value={{language, setLanguage}}>
                        {children}
                    </ChangeLanguageContext.Provider>
                </SearchContext.Provider>
            </TypesContext.Provider>
        </PokemonContext.Provider>
    );
};

export {PokemonContext, SearchContext, ChangeLanguageContext, TypesContext};
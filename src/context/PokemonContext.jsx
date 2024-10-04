// src/context/PokemonContext.jsx
import {createContext, useState, useEffect} from "react";
import client from "@/lib/api";

const PokemonContext = createContext([]);
const SearchContext = createContext({
    query: "",
});
const ChangeLanguageContext = createContext({
    language: "fr",
})

// eslint-disable-next-line react/prop-types
export const PokemonProvider = ({children}) => {
    const [listPokemon, setListPokemon] = useState([]);
    const [query, setQuery] = useState("");
    const [language, setLanguage] = useState("fr");

    useEffect(() => {
        client.getPokemon().then((response) => {
            setListPokemon(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <PokemonContext.Provider value={listPokemon}>
            <SearchContext.Provider value={{query, setQuery}}>
                <ChangeLanguageContext.Provider value={{language, setLanguage}}>
                    {children}
                </ChangeLanguageContext.Provider>
            </SearchContext.Provider>
        </PokemonContext.Provider>
    );
};

export {PokemonContext, SearchContext, ChangeLanguageContext};
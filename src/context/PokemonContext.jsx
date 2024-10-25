// src/context/PokemonContext.jsx
import {createContext, useState, useEffect} from "react";
import client from "@/utils/api";

const PokemonContext = createContext([]);
const SearchContext = createContext({
    query: "",
});
const ChangeLanguageContext = createContext({
    language: "fr",
})
const TypesContext = createContext([]);

export const PokemonProvider = ({children}) => {
    const [listPokemon, setListPokemon] = useState([]);
    const [query, setQuery] = useState("");
    const [language, setLanguage] = useState("fr");
    const [types, setTypes] = useState([]);

    useEffect(() => {
        client.getPokemon().then((response) => {
            setListPokemon(response.data);
            console.log(response.data);
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

    return (
        <PokemonContext.Provider value={listPokemon}>
            <TypesContext.Provider value={types}>
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
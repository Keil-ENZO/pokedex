import { Input } from "@/components/ui/input";
import { useContext } from "react";
import { SearchContext } from "@/context/PokemonContext";

const SearchBar = () => {
    const { query, setQuery } = useContext(SearchContext);

    return (
        <div className={"flex justify-center items-center"}>
            <Input
                id={"searchBar"}
                className={`mt-5 w-1/2 h-12`}
                onChange={(event) => setQuery(event.target.value)}
                value={query}
                placeholder="Enter a pokemon name"
            />
        </div>
    );
};

export default SearchBar;
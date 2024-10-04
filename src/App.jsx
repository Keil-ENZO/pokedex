import Header from "@/layout/Header"
import Footer from "@/layout/Footer"
import PokemonCard from "./components/PokemonCard";
import SearchBar from "./components/SearchBar.jsx";
import {PokemonProvider} from "@/context/PokemonContext"


function App() {

    return (

        <PokemonProvider>
            <Header/>
            <SearchBar/>
            <PokemonCard/>
            <Footer/>
        </PokemonProvider>
    )
}

export default App

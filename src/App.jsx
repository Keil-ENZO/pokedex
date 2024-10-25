import Header from "@/layout/Header"
import Footer from "@/layout/Footer"
import {PokemonProvider} from "@/context/PokemonContext"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Pokemon from "./pages/Pokemon.jsx";
import PokemonById from "./pages/PokemonById.jsx";


function App() {

    return (
        <BrowserRouter>
            <PokemonProvider>
                <Header/>
                <Routes>
                    <Route path="/" element={<Pokemon/>}/>
                    <Route path="/pokemon/:pokemonId" element={<PokemonById/>}/>
                </Routes>
                <Footer/>
            </PokemonProvider>
        </BrowserRouter>)
}

export default App

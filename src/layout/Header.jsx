import Logo from "../assets/React Pokedex logo.svg"
import SelectLanguage from "../components/SelectLanguage";
import {Link} from "react-router-dom";



const Header = () => {
    return (
        <>
            <header className={"p-5 border-b border-border"}>
                <nav className={"flex justify-between items-center"}>
                    <Link to={"/"}>
                        <img className={"w-[150px] md:w-[200px]"} src={Logo} alt="logo pokedex"/>
                    </Link>

                    <SelectLanguage/>

                </nav>
            </header>
        </>
    );
};

export default Header;
import Logo from "../assets/React Pokedex logo.svg"
import SelectLanguage from "../components/SelectLanguage";



const Header = () => {
    return (
        <>
            <header className={"p-5 border-b border-border"}>
                <nav className={"flex justify-between items-center"}>
                    <img className={"w-[150px] md:w-[200px]"} src={Logo} alt="logo pokedex"/>
                    <SelectLanguage/>

                </nav>
            </header>
        </>
    );
};

export default Header;
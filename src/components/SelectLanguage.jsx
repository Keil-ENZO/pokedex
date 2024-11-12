import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useContext } from "react"
import { ChangeLanguageContext } from "@/context/PokemonContext"

const SelectLanguage = () => {

    const { language, setLanguage } = useContext(ChangeLanguageContext)

    return (
        <Select onValueChange={(value) => setLanguage(value)}>
            <SelectTrigger className="w-[100px]"  >
                <SelectValue placeholder="Langue"  />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="fr">Fr</SelectItem>
                <SelectItem value="en">En</SelectItem>
                <SelectItem value="ja">Ja</SelectItem>
                <SelectItem value="de">De</SelectItem>
                <SelectItem value="es">Es</SelectItem>
                <SelectItem value="it">It</SelectItem>
                <SelectItem value="ko">Ko</SelectItem>
            </SelectContent>
        </Select>
    );
};

export default SelectLanguage;
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useContext } from "react";
import { ChangeLanguageContext, TypesContext } from "../context/PokemonContext.jsx";

const SelectType = () => {
    const { types, selectedType, setSelectedType } = useContext(TypesContext);
    const { language } = useContext(ChangeLanguageContext);

    const typesArray = types ? Object.values(types) : [];

    const handleSelectType = (value) => {
        setSelectedType(value);
    };

    return (
        <Select onValueChange={handleSelectType} value={selectedType}>
            <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Types" />
            </SelectTrigger>
            <SelectContent>
                {typesArray.map((type, index) => {
                    if (!type || !type.translations) return null;
                    const translatedType = type.translations[language] || type.translations.en || "Unknown";
                    const typeValue = type.translations.en;

                    return (
                        <SelectItem key={index} value={typeValue}>
                            {translatedType}
                        </SelectItem>
                    );
                })}
            </SelectContent>
        </Select>
    );
};

export default SelectType;
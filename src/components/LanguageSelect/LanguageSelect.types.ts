import { LanguagesList, SupportedLanguages } from "config/languages";

export interface LanguageSelectProps {
    defaultLanguage?: SupportedLanguages;
    languages: LanguagesList;
    onLanguageChange: (lng: SupportedLanguages) => void;
}

import { LanguagesList, SupportedLanguages } from "config/languages";
import { PageRoutes } from "config/routes";

export interface HeaderProps {
    routes: PageRoutes;
    languagesList: LanguagesList;
    defaultLanguage: SupportedLanguages;
    onLanguageChange: (language: SupportedLanguages) => void;
}

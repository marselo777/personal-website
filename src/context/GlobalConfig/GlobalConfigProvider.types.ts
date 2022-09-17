import { ReactNode } from "react";

import { SupportedLanguages } from "config/languages";

export interface GlobalConfigState {
    language: SupportedLanguages;
    setLanguage: (language: SupportedLanguages) => void;
}
export interface GlobalConfigProviderProps {
    children: ReactNode;
}

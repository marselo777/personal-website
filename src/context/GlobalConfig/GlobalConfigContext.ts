import React from "react";

import { SupportedLanguages } from "config/languages";

import { GlobalConfigState } from "./GlobalConfigProvider.types";

export const GlobalConfigContext = React.createContext<GlobalConfigState>({
    language: SupportedLanguages.English,
    setLanguage: () => undefined,
});

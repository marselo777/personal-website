import React, { useEffect, useState } from "react";

import { LANGUAGE_KEY, SupportedLanguages } from "config/languages";

import { GlobalConfigContext } from "./GlobalConfigContext";
import { GlobalConfigProviderProps } from "./GlobalConfigProvider.types";

export const GlobalConfigProvider = (props: GlobalConfigProviderProps) => {
    const { children } = props;
    const [language, setLanguage] = useState(SupportedLanguages.English);

    const ctxState = { language, setLanguage };

    useEffect(() => {
        const lng = localStorage.getItem(LANGUAGE_KEY);
        if (lng) {
            setLanguage(lng as SupportedLanguages);
        }
    }, []);

    return (
        <GlobalConfigContext.Provider value={ctxState}>
            {children}
        </GlobalConfigContext.Provider>
    );
};

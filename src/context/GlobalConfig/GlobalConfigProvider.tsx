import React, { useState } from "react";

import { SupportedLanguages } from "config/languages";

import { GlobalConfigContext } from "./GlobalConfigContext";
import { GlobalConfigProviderProps } from "./GlobalConfigProvider.types";

export const GlobalConfigProvider = (props: GlobalConfigProviderProps) => {
    const { children } = props;
    const [language, setLanguage] = useState(SupportedLanguages.English);

    const ctxState = { language, setLanguage };

    return (
        <GlobalConfigContext.Provider value={ctxState}>
            {children}
        </GlobalConfigContext.Provider>
    );
};

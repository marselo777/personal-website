import {
    metadata,
    routes,
    languagesList,
    SupportedLanguages,
    LANGUAGE_KEY,
} from "config";
import React, { useEffect } from "react";

import { ContactsSidebar } from "components/ContactsSideBar";
import { Header } from "components/Header";
import { SocialSideBar } from "components/SocialSideBar";
import { GlobalConfigContext } from "context/GlobalConfig";

import styles from "./BaseLayout.module.scss";
import { BaseLayoutProps } from "./BaseLayout.types";

export const BaseLayout = (props: BaseLayoutProps) => {
    const { children } = props;

    const { language, setLanguage } = React.useContext(GlobalConfigContext);

    const onLanguageChange = (language: SupportedLanguages) => {
        localStorage.setItem(LANGUAGE_KEY, language);
        setLanguage(language);
    };

    useEffect(() => {
        const lng = localStorage.getItem(LANGUAGE_KEY);
        if (lng) {
            setLanguage(lng as SupportedLanguages);
        }
    }, [setLanguage]);

    return (
        <>
            <Header
                routes={routes}
                languagesList={languagesList}
                defaultLanguage={language}
                onLanguageChange={onLanguageChange}
            />
            <SocialSideBar socialLinks={metadata.socialMedia} />
            <ContactsSidebar email={metadata.email} />
            <main id="content" className={styles.main}>
                {children}
            </main>
        </>
    );
};

import React from "react";

import { HamburgerMenu } from "components/HamburgerMenu";
import { Icon } from "components/Icon";
import { LanguageSelect } from "components/LanguageSelect";
import { Nav } from "components/Nav";

import styles from "./Header.module.scss";
import { HeaderProps } from "./Header.types";

export const Header = (props: HeaderProps) => {
    const { routes, languagesList, defaultLanguage, onLanguageChange } = props;
    return (
        <header className={styles.root}>
            <Icon iconName="Main" />
            <div className={styles.nav}>
                <Nav links={routes} />
                <LanguageSelect
                    defaultLanguage={defaultLanguage}
                    languages={languagesList}
                    onLanguageChange={onLanguageChange}
                />
            </div>
            <HamburgerMenu links={routes} />
        </header>
    );
};

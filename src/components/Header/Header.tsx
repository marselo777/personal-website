import React from "react";

import { HamburgerMenu } from "components/HamburgerMenu";
import { Icon } from "components/Icon";
import { Nav } from "components/Nav";

import styles from "./Header.module.scss";
import { HeaderProps } from "./Header.types";

export const Header = (props: HeaderProps) => {
    const { routes } = props;
    return (
        <header className={styles.root}>
            <Icon iconName="Main" />
            <Nav links={routes} />
            <HamburgerMenu links={routes} />
        </header>
    );
};

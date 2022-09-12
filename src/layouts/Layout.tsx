import { links, routes } from "config";
import React, { useEffect } from "react";

import { Header } from "components/Header";
import { SocialSideBar } from "components/SocialSideBar";

import styles from "./Layout.module.scss";
import { LayoutProps } from "./Layout.types";

export const Layout = (props: LayoutProps) => {
    const { children } = props;

    useEffect(() => {}, []);

    return (
        <>
            <Header routes={routes} />
            <div className={styles.rightSideBar}>
                <SocialSideBar socialLinks={links.socialMedia} />
            </div>
            <div></div>
            <main className={styles.main}>{children}</main>
        </>
    );
};

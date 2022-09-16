import { metadata, routes } from "config";
import React from "react";

import { ContactsSidebar } from "components/ContactsSideBar";
import { Header } from "components/Header";
import { SocialSideBar } from "components/SocialSideBar";

import styles from "./Layout.module.scss";
import { LayoutProps } from "./Layout.types";

export const Layout = (props: LayoutProps) => {
    const { children } = props;

    return (
        <>
            <Header routes={routes} />
            <SocialSideBar socialLinks={metadata.socialMedia} />
            <ContactsSidebar email={metadata.email} />
            <main id="content" className={styles.main}>
                {children}
            </main>
        </>
    );
};

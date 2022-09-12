import Link from "next/link";
import React from "react";

import { Icon } from "components/Icon";

import styles from "./SocialSideBar.module.scss";
import { SocialSideBarProps } from "./SocialSideBar.types";

export const SocialSideBar = (props: SocialSideBarProps) => {
    const { socialLinks } = props;
    return (
        <ul className={styles.root}>
            {socialLinks.map(({ name, url }) => (
                <li key={name}>
                    <Link href={url}>
                        <Icon iconName={name} />
                    </Link>
                </li>
            ))}
        </ul>
    );
};
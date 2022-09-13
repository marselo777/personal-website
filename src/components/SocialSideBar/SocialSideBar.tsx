import React from "react";

import { Icon } from "components/Icon";
import { Side } from "components/Side";

import styles from "./SocialSideBar.module.scss";
import { SocialSideBarProps } from "./SocialSideBar.types";

export const SocialSideBar = (props: SocialSideBarProps) => {
    const { socialLinks } = props;
    return (
        <Side orientation="left">
            <ul className={styles.root}>
                {socialLinks.map(({ name, url }) => (
                    <li key={name}>
                        <a href={url}>
                            <Icon iconName={name} className={styles.icon} />
                        </a>
                    </li>
                ))}
            </ul>
        </Side>
    );
};

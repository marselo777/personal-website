import cn from "classnames";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import styles from "./HamburgerMenu.module.scss";
import { HamburgerMenuProps } from "./HamburgerMenu.types";

export const HamburgerMenu = (props: HamburgerMenuProps) => {
    const [isOpen, setOpen] = useState(false);
    const { links } = props;

    const toogle = () => {
        setOpen(!isOpen);
    };

    useEffect(() => {
        const body = document.querySelector("body");
        if (isOpen) {
            body?.classList.add("blur");
        } else {
            body?.classList.remove("blur");
        }
    }, [isOpen]);

    return (
        <div className={cn(styles.root)}>
            <div className={styles.hamburgerBox} onClick={toogle}>
                <div
                    className={cn(styles.hamburger, {
                        [styles.hamburgerOpen]: isOpen,
                    })}
                />
            </div>
            <div
                className={cn(styles.divider, {
                    [styles.dividerOpen]: isOpen,
                })}
            >
                <ul className={styles.linksList}>
                    {links.map(({ name, url }) => (
                        <li key={url} className={styles.linkItem}>
                            <Link href={url} className={styles.link}>
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

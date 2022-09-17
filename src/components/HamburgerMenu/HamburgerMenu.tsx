import cn from "classnames";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import { ClickAwayListener } from "components/ClickAwayListener";

import styles from "./HamburgerMenu.module.scss";
import { HamburgerMenuProps } from "./HamburgerMenu.types";

export const HamburgerMenu = (props: HamburgerMenuProps) => {
    const menuRef = useRef<HTMLDivElement>(null);
    const [isOpen, setOpen] = useState(false);
    const { links } = props;

    const toogle = () => {
        setOpen(!isOpen);
    };

    const handleClickAway = () => {
        if (isOpen) {
            setOpen(false);
        }
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
        <ClickAwayListener
            className={styles.root}
            onClickAway={handleClickAway}
        >
            <div ref={menuRef}>
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
        </ClickAwayListener>
    );
};

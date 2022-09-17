import cn from "classnames";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import styles from "./HamburgerMenu.module.scss";
import { HamburgerMenuProps } from "./HamburgerMenu.types";

export const HamburgerMenu = (props: HamburgerMenuProps) => {
    const menuRef = useRef<HTMLDivElement>(null);
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

    useEffect(() => {
        const handler = (event: MouseEvent | TouchEvent) => {
            if (menuRef.current) {
                !menuRef.current.contains(event.target as HTMLElement) &&
                    setOpen(false);
            }
        };

        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, []);

    return (
        <div className={cn(styles.root)} ref={menuRef}>
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

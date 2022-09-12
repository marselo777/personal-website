import Link from "next/link";
import React from "react";

import styles from "./Nav.module.scss";
import { NavProps } from "./Nav.types";

export const Nav = (props: NavProps) => {
    const { links } = props;
    return (
        <nav>
            <ul>
                {links.map(({ name, url }) => (
                    <li key={url} className={styles.linkItem}>
                        <Link href={url} className={styles.link}>
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

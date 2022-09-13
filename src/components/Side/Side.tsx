import cn from "classnames";
import React from "react";

import styles from "./Side.module.scss";
import { SideProps } from "./Side.types";

export const Side = (props: SideProps) => {
    const { children, orientation } = props;
    return (
        <div className={cn(styles.root, styles[orientation])}>{children}</div>
    );
};

import cn from "classnames";
import React from "react";

import styles from "./Tab.module.scss";
import { TabProps } from "./Tab.types";

export const Tab = (props: TabProps) => {
    const { children, active } = props;
    return (
        <div className={cn(styles.root, { [styles.active]: active })}>
            {children}
        </div>
    );
};

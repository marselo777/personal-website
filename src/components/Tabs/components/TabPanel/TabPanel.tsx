import React from "react";

import styles from "./TabPanel.module.scss";
import { TabPanelProps } from "./TabPanel.types";

export const TabPanel = (props: TabPanelProps) => {
    const { active, children } = props;

    if (!active) {
        return null;
    }
    return <div className={styles.root}>{children}</div>;
};

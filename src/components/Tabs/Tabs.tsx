import React from "react";

import styles from "./Tabs.module.scss";
import { TabsProps } from "./Tabs.types";

export const Tabs = (props: TabsProps) => {
    const { children, onTabChange } = props;

    const handleTabClick = (index: number) => {
        onTabChange(index);
    };

    const labels = React.Children.map(children, (child, idx) => {
        return <div onClick={() => handleTabClick(idx)}>{child}</div>;
    });

    return <div className={styles.root}>{labels}</div>;
};

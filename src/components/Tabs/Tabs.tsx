import cn from "classnames";
import React from "react";

import { useMediaQuery } from "./helpers";
import styles from "./Tabs.module.scss";
import { TabsProps } from "./Tabs.types";

export const Tabs = (props: TabsProps) => {
    const { children, onTabChange, activeTab } = props;

    const isMobile = useMediaQuery(768);
    const transform = isMobile
        ? `translateX(calc(${activeTab} * var(--tab-width)))`
        : `translateY(calc(${activeTab} * var(--tab-height)))`;

    const handleTabClick = (index: number) => {
        onTabChange(index);
    };

    const labels = React.Children.map(children, (child, idx) => {
        return <div onClick={() => handleTabClick(idx)}>{child}</div>;
    });

    return (
        <div className={cn(styles.root)}>
            {labels}
            <div
                className={styles.higlight}
                style={{
                    transform,
                }}
            />
        </div>
    );
};

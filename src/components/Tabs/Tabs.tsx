import cn from "classnames";
import React, { useEffect, useRef } from "react";

import { useMediaQuery } from "./helpers";
import styles from "./Tabs.module.scss";
import { TabsProps } from "./Tabs.types";

export const Tabs = (props: TabsProps) => {
    const { children, onTabChange, activeTab } = props;
    const tabsRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        if (tabsRef.current && isMobile) {
            const { left } =
                tabsRef.current.children[activeTab].getBoundingClientRect();
            tabsRef.current.scrollTo({
                behavior: "smooth",
                left,
            });
        }
    }, [activeTab, isMobile]);

    return (
        <div className={cn(styles.root)} ref={tabsRef}>
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

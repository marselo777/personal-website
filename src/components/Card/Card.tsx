import cn from "classnames";
import React from "react";

import { Icon } from "components/Icon";
import { Typography } from "components/Typography";

import styles from "./Card.module.scss";
import { CardProps } from "./Card.types";

export const Card = (props: CardProps) => {
    const { children, description, iconName, title, className } = props;
    return (
        <div className={cn(styles.root, className)}>
            <div className={styles.header}>
                <Typography variant="h5">{title}</Typography>
                <Icon iconName={iconName} />
            </div>
            <div className={styles.description}>
                <Typography variant="body1">{description}</Typography>
            </div>
            <div>{children}</div>
        </div>
    );
};

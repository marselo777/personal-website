import cn from "classnames";
import React from "react";

import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.types";

export const Button = (props: ButtonProps) => {
    const {
        children,
        className,
        variant = "default",
        component = "button",
        ...rest
    } = props;

    const ButtonComponent = React.createElement(component, {
        className: cn(styles[variant], styles.root, className),
        children,
        ...rest,
    });
    return <>{ButtonComponent}</>;
};

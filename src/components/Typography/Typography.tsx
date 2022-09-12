import cn from "classnames";
import React from "react";

import { tagMapping } from "./helpers";
import styles from "./Typography.module.scss";
import { TypographyProps } from "./Typography.types";

export const Typography = (props: TypographyProps) => {
    const {
        component = "span",
        variant = "body2",
        children,
        className,
        ...rest
    } = props;

    const TypographyElement = React.createElement(
        tagMapping(component, variant),
        {
            children,
            className: cn(styles[variant], className),
            ...rest,
        }
    );

    return <>{TypographyElement}</>;
};

import React from "react";

import * as icons from "../icons";

import { IconProps } from "./Icon.types";

export const Icon = (props: IconProps) => {
    const { iconName } = props;

    const IconComponent = icons[iconName];

    return <IconComponent />;
};

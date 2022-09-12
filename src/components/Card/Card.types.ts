import { ReactNode } from "react";

import { IconsType } from "components/icons";

export interface CardProps {
    title: ReactNode;
    description: ReactNode;
    iconName: IconsType;
    children?: ReactNode;
    className?: string;
}

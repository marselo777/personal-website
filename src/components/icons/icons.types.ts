import * as icons from "./index";

export type IconsType = keyof typeof icons;

export interface IconProps {
    className?: string;
    width?: number;
    height?: number;
}

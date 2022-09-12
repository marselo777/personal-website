import { ReactNode } from "react";

export interface ButtonProps
    extends React.AllHTMLAttributes<HTMLElement & HTMLAnchorElement> {
    variant?: "default" | "primary";
    children: ReactNode;
    className?: string;
    component?: keyof HTMLElementTagNameMap;
}

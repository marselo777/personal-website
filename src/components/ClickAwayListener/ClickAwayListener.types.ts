import { ReactNode } from "react";

export interface ClickAwayListenerProps {
    children: ReactNode;
    className?: string;
    onClickAway: () => void;
}

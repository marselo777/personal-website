import React, { useEffect, useRef } from "react";

import { ClickAwayListenerProps } from "./ClickAwayListener.types";

export const ClickAwayListener = (props: ClickAwayListenerProps) => {
    const { children, className, onClickAway } = props;

    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (event: MouseEvent | TouchEvent) => {
            if (rootRef.current) {
                !rootRef.current.contains(event.target as HTMLElement) &&
                    onClickAway();
            }
        };

        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [onClickAway]);

    return (
        <div className={className} ref={rootRef}>
            {children}
        </div>
    );
};

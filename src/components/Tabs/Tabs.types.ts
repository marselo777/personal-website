import { ReactNode } from "react";

export interface TabsProps {
    children: ReactNode;
    activeTab: number;
    onTabChange: (index: number) => void;
}

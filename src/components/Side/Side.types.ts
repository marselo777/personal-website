import { ReactNode } from "react";

export interface SideProps {
    orientation: "left" | "right";
    children: ReactNode;
}

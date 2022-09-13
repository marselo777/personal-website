export type TypographyVariant =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "body1"
    | "body2"
    | "caption"
    | "title";
export type TypographyComponent = keyof HTMLElementTagNameMap;

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    variant?: TypographyVariant;
    component?: TypographyComponent;
    children: React.ReactNode;
}

import { variantMapping } from "./constants";
import { TypographyComponent, TypographyVariant } from "./Typography.types";

export const tagMapping = (
    component: TypographyComponent,
    variant: TypographyVariant
): keyof HTMLElementTagNameMap => {
    if (component) {
        return component;
    }

    return variantMapping[variant];
};

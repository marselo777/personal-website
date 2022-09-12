export enum Routes {
    About = "/#about",
    Experience = "/#experience",
    Contact = "/#contact",
    Resume = "/#resume",
}

export interface Route {
    name: string;
    url: Routes;
}

export type PageRoutes = Route[];

export const routes: PageRoutes = [
    { name: "About", url: Routes.About },
    { name: "Experience", url: Routes.Experience },
    { name: "Contact", url: Routes.Contact },
];

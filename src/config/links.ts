export interface SocialMediaLink {
    name: "Git" | "Twitter" | "LinkedIn" | "Instagram";
    url: string;
}

interface Metadata {
    email: string;
    socialMedia: SocialMediaLink[];
}

export const metadata: Metadata = {
    email: "yevgenii.frolov@gmail.com",
    socialMedia: [
        {
            name: "Git",
            url: "https://github.com/marselo777",
        },
        {
            name: "Twitter",
            url: "https://vk.com/slenter777",
        },
        {
            name: "LinkedIn",
            url: "https://vk.com/slenter777",
        },
        {
            name: "Instagram",
            url: "https://vk.com/slenter777",
        },
    ],
};

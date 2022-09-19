export interface SocialMediaLink {
    name: "Git" | "Twitter" | "LinkedIn" | "Instagram" | "Telegram";
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
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/evgeny-frolov-6925bb224/",
        },
        {
            name: "Telegram",
            url: "https://telegram.me/slenter777",
        },
    ],
};

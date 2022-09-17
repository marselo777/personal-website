export enum SupportedLanguages {
    English = "en",
    Russian = "ru",
}

export interface LanguagesListItem {
    title: string;
    id: SupportedLanguages;
}

export type LanguagesList = LanguagesListItem[];

export const languagesList: LanguagesList = [
    {
        id: SupportedLanguages.Russian,
        title: "Russian",
    },
    {
        id: SupportedLanguages.English,
        title: "English",
    },
];

export const LANGUAGE_KEY = "language";

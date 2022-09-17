import cn from "classnames";
import React, { useState } from "react";

import { SupportedLanguages } from "config/languages";

import { ClickAwayListener } from "components/ClickAwayListener";
import { Icon } from "components/Icon";
import { Typography } from "components/Typography";

import styles from "./LanguageSelect.module.scss";
import { LanguageSelectProps } from "./LanguageSelect.types";

export const LanguageSelect = (props: LanguageSelectProps) => {
    const {
        languages,
        onLanguageChange,
        defaultLanguage = SupportedLanguages.English,
    } = props;

    const [open, setOpen] = useState(false);
    const [activeLng] = languages.filter(({ id }) => id === defaultLanguage);

    const handleLanguageChange = (lng: SupportedLanguages) => {
        setOpen(false);
        onLanguageChange(lng);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClickAway = () => {
        if (open) {
            setOpen(false);
        }
    };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className={styles.root}>
                <div className={styles.activeLanguage} onClick={handleOpen}>
                    <Icon iconName="Language" className={styles.lngIcon} />
                    <Typography variant="body1">{activeLng.title}</Typography>
                </div>
                <ul
                    className={cn(styles.languagesList, {
                        [styles.listActive]: open,
                    })}
                >
                    {languages.map(({ id, title }) => (
                        <li
                            key={id}
                            className={cn(styles.languageItem, {
                                [styles.disabled]: id === activeLng.id,
                            })}
                            onClick={() => handleLanguageChange(id)}
                        >
                            <Typography>{title}</Typography>
                        </li>
                    ))}
                </ul>
            </div>
        </ClickAwayListener>
    );
};

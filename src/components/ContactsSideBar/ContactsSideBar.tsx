import React from "react";

import { Side } from "components/Side";
import { Typography } from "components/Typography";

import styles from "./ContactsSideBar.module.scss";
import { ContactsSideBarProps } from "./ContactsSideBar.types";

export const ContactsSidebar = (props: ContactsSideBarProps) => {
    const { email } = props;
    return (
        <Side orientation="right">
            <Typography
                component="a"
                href="mailto:yevgenii.frolov@gmail.com"
                className={styles.text}
            >
                {email}
            </Typography>
        </Side>
    );
};

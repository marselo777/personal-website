import React from "react";

import { Button } from "components/Button";
import { Typography } from "components/Typography";

import styles from "./Contact.module.scss";

export const Contact = () => {
    return (
        <section id="contact" className={styles.root}>
            <Typography className={styles.title}>What's Next?</Typography>
            <Typography className={styles.subtitle}>Get In Touch</Typography>
            <Typography className={styles.description}>
                I'm looking for an intresting project with hard tasks. If you
                have an highload project or you have an intresting project write
                me an email!
            </Typography>
            <Button component="a" href="mailto:yevgenii.frolov@gmail.com">
                Say hello
            </Button>
        </section>
    );
};

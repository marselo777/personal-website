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
                Despite the fact that I am not looking for a job, I am open to
                offers. If you have a question, write me an email!
            </Typography>
            <Button component="a" href="mailto:yevgenii.frolov@gmail.com">
                Say hello
            </Button>
        </section>
    );
};

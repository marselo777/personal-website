import React from "react";

import { Button } from "components/Button";

import styles from "./Hero.module.scss";

export const Hero = () => {
    return (
        <section className={styles.root}>
            <h1 className={styles.heroTitle}>
                I'm Evgenii Frolov, Front-end Developer.
            </h1>
            <p className={styles.description}>
                I specialize in rapidly building software companies and web
                applications. I talk about my journey on Twitter, commit code to
                Github, and take shots on Dribbble.
            </p>
            <div>
                <Button className={styles.helloButton}>Say Hello</Button>
                <Button variant="primary">Resume</Button>
            </div>
        </section>
    );
};

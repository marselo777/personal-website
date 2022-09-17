import React from "react";

import { Button } from "components/Button";
import { GlobalConfigContext } from "context/GlobalConfig";

import styles from "./Hero.module.scss";

export const Hero = () => {
    const { language } = React.useContext(GlobalConfigContext);

    const getResumeLink = () => `/resume/${language}/resume.pdf`;

    return (
        <section className={styles.root}>
            <h3 className={styles.heroTitle}>Hi, my name is Evgenii Frolov.</h3>
            <p className={styles.description}>
                I'm an{" "}
                <span className={styles.profession}>Front-end Developer.</span>{" "}
                I specialize in building web applications and making 3D
                animations.
            </p>
            <div>
                <Button
                    component="a"
                    href="mailto:yevgenii.frolov@gmail.com"
                    className={styles.helloButton}
                >
                    Say Hello
                </Button>
                <Button
                    component="a"
                    href={getResumeLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Resume
                </Button>
            </div>
        </section>
    );
};

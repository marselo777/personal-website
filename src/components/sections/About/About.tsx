import React from "react";

import { Card } from "components/Card";
import { Typography } from "components/Typography";

import styles from "./About.module.scss";

export const About = () => {
    return (
        <section id="about" className={styles.root}>
            <Typography component="h1" variant="title">
                About
            </Typography>
            <div className={styles.about}>
                <div className={styles.cards}>
                    <Card
                        title="Front-End"
                        description="I develop frontend applications on the React and Typescript"
                        iconName="Code"
                        className={styles.card}
                    />
                    <Card
                        title="Back-end"
                        description="I’m using Nest.JS, MongoDB, PostgreSQL for developing the backend"
                        iconName="Server"
                    />
                </div>
                <div className={styles.description}>
                    <Typography variant="h1" className={styles.title}>
                        Hello! My name is Evgenii Frolov
                    </Typography>
                    <Typography>
                        Since 2020 I started my way as frontend developer. I’ve
                        worked with amazing people and got a lot of usefull
                        experience. I have big experience with building React
                        applications based on the TypeScript and JavaScript. I
                        like to improve work efficiency and, first of all, focus
                        on the end user of the product. So, throughout my
                        career, I have worked in large companies and know a lot
                        about high-load projects. If you have an interesting
                        project we could be work together:)
                    </Typography>
                </div>
            </div>
        </section>
    );
};

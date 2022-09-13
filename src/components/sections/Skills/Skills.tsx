import React from "react";

import { IconsType } from "components/icons";
import { Skill } from "components/Skill";
import { Typography } from "components/Typography";

import { skills } from "./constants";
import styles from "./Skills.module.scss";

export const Skills = () => {
    return (
        <section className={styles.root}>
            <Typography variant="title" component="h1">
                Skills
            </Typography>
            <div className={styles.skills}>
                {skills.map(({ iconName, skillName }) => (
                    <Skill
                        key={iconName}
                        iconName={iconName as IconsType}
                        skillName={skillName}
                    />
                ))}
            </div>
        </section>
    );
};
